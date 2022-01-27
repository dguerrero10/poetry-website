import { useState, useEffect, Fragment, forwardRef, useReducer } from 'react';
import { getSession } from 'next-auth/client';

import classes from '../../styles/pages/post-poem.module.css'; 
import { TextField,
        CircularProgress,
        Snackbar,
        IconButton,
        MuiAlert,
        FormControlLabel,
        Checkbox,
        Box } from '@mui/material';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="outline" {...props} />;
});

const initialFormState = {
    title: { value: '', hasError: false, errorMsg: '' },
    content: { value: '', hasError: false, errorMsg: '' }
}

function formReducer(state, action) {
    switch (action.type) {
        case 'VALUE_CHANGE':
            return { ...state, [action.field] : action.value }
    }
}

function PostPoem() {
    const [formState, dispatchFormUpdate] = useReducer(formReducer, initialFormState);


    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [responseState, setResponseState] = useState({
        success: true,
        snackbarIsOpen: false,
        message: ''
    });

    const [enteredTitle, setEnteredTitle] = useState('');
    const [titleError, setTitleError] = useState({ error: false, errorMsg: '' });

    const [enteredContent, setEnteredContent] = useState('');
    const [contentError, setContentError] = useState({ error: false, errorMsg: '' });

    const [updatePoem, setUpdatePoem] = useState(false);

    useEffect(() => {
        getSession().then(session => {
            if (!session) {
                window.location.href = '/';
            } else setIsLoading(isLoading => !isLoading);
        });
    }, []);

    const isFormValid = () => {
        let isValid = true;

        if (!enteredTitle.trim().length) {
            setTitleError((prevState) => ({
                ...prevState,
                error: true,
                errorMsg: 'Title is required.'
            }));

            isValid = false;
        }

        if (!enteredContent.trim().length) {
            setContentError((prevState) => ({
                ...prevState,
                error: true,
                errorMsg: 'Content is required. (Remember, content must be in HTML.)'
            }));

            isValid = false;
        }

        return isValid;
    }

    const responseStateHandler = (err = null, data) => {
        if (data.success) {
            setEnteredTitle('');
            setEnteredContent('');
        }
        setResponseState((prevState) => ({
            ...prevState,
            snackbarIsOpen: data.message ? true : false,
            success: data.success,
            message: err.message ? err.message : data.message
        }));
    }

    const postPoemHandler = async (event) => {
        event.preventDefault();
        
        setIsSubmitting(isSubmitting => !isSubmitting);

        setTitleError((prevState) => ({
            ...prevState,
            error: false,
            errorMsg: ''
        }));

        setContentError((prevState) => ({
            ...prevState,
            error: false,
            errorMsg: ''
        }));

        if (!isFormValid()) return setIsSubmitting(isSubmitting => !isSubmitting);

        let sanitizedContent = enteredContent.trimStart();

        try {
            const response = await fetch('/api/poems/post-poem', {
                method: 'POST',
                body: JSON.stringify({
                    updatePoem: updatePoem, 
                    title: enteredTitle, 
                    content: sanitizedContent 
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            let data = await response.json();
            responseStateHandler(data)

        } catch (err) {
            responseStateHandler(err, data)
        } 
        
        setIsSubmitting(isSubmitting => !isSubmitting);
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setResponseState((prevState) => ({
            ...prevState,
            snackbarIsOpen: false
        }));
    };

    if (isLoading) {
        return <div className={classes['page-loading-wrapper']}>
                 <CircularProgress />
               </div>
     }

     const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    );

    let snackbar;
    if (responseState.success) {
        snackbar = <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={responseState.snackbarIsOpen}
            autoHideDuration={2000}
            onClose={handleClose}
            message={responseState.message}
            action={action} />
    } else {
        snackbar = <Snackbar
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            open={responseState.snackbarIsOpen}
            autoHideDuration={2000}
            onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                {responseState.message}
            </Alert>
        </Snackbar>
    }

    return (
      <div className={classes['post-poem']}>
           <form onSubmit={postPoemHandler}
                className={classes['post-poem-form']}>
            <h2 className={classes['post-poem__header']}>Post Poem</h2>    
                <div className={classes['post-poem-form__field']}>
                    <TextField error={titleError.error}
                        helperText={titleError.error && titleError.errorMsg} 
                        className={classes['post-poem-form__input']}
                        value={enteredTitle}
                        onChange={(event => dispatchFormUpdate({type: 'VALUE_CHANGE', field: title, value: event.target.value})}
                        label="Title" variant="outlined" />
                </div>
                <div className={classes['post-poem-form__field']}>
                    <TextField className={classes['post-poem-form__input']}
                        error={contentError.error}
                        helperText={contentError.error && contentError.errorMsg} 
                        rows={20}
                        value={enteredContent}
                        multiline
                        onChange={(event) => setEnteredContent(event.target.value)}
                        label="Content" variant="outlined" />
                </div>
                <FormControlLabel className={classes['post-poem-form__checkbox']} 
                                  control={<Checkbox />} label="Update poem" 
                                  onChange={(event) => setUpdatePoem(event.target.checked)}
                                  />
                {!isSubmitting && <button className={classes['post-poem-form__submit-btn']}
                    type="submit">Submit</button>}
                {isSubmitting && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>}
            </form>
           {snackbar}
      </div>
    )
}

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });

  if (!session) {
      return {
          redirect: {
            destination: '/',
            permanent: false
          }
      }
  }
  return {
      props: { session }
  }
}

export default PostPoem