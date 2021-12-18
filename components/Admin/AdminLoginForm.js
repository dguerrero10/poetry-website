import { forwardRef, Fragment, useRef, useState } from 'react';

import classes from '../../styles/components/Admin/admin-login-form.module.css';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import Box from '@mui/material/Box';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="outline" {...props} />;
});

function AdminLoginForm() {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const [loginError, setLoginError] = useState({ error: false, errorMessage: '' });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseState, setResponseState] = useState({
        success: true,
        snackbarIsOpen: false,
        message: ''
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setResponseState((prevState) => ({
            ...prevState,
            snackbarIsOpen: false
        }));
    };

    const loginHandler = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact-me', {
                method: 'POST',
                body: JSON.stringify({ email: enteredEmail, message: enteredMessage }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            setIsSubmitting(false);

            let data = await response.json();

            if (data.success) {
                setEnteredEmail('');
                setEnteredMessage('');
            }

            setResponseState((prevState) => ({
                ...prevState,
                snackbarIsOpen: true,
                success: data.success,
                message: data.message
            }));

        } catch (error) {
            console.log(error)
        }
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

    return (
        <div className={classes['adming-form__container']}>
            <h2 className={classes['adming-form__header']}>Login</h2>
            <form onSubmit={loginHandler}
                className={classes['adming-form']}>
                <div className={classes['adming-form__field']}>
                    <TextField
                        className={classes['adming-form__input']}
                        inputRef={emailInputRef}
                        label="Email" variant="filled" />
                </div>
                <div className={classes['adming-form__field']}>
                    <TextField
                        className={classes['adming-form__input']}
                        inputRef={emailInputRef}
                        label="Password" variant="filled" />
                </div>
                {!isSubmitting && <Button disableElevation
                    type="submit"
                    variant="contained">Submit</Button>}
                {isSubmitting && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>}
            </form>
            {!responseState.success && <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={responseState.snackbarIsOpen} autoHideDuration={2000}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {responseState.message}
                </Alert>
            </Snackbar>}
        </div>
    )
}

export default AdminLoginForm
