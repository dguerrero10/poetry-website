import { forwardRef, Fragment, useState } from 'react';
import { signIn, useSession } from 'next-auth/client';

import classes from '../../styles/components/ContactMe/contact-form.module.css';

import { TextField } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@material-ui/icons/Close'
import Box from '@mui/material/Box';
import MuiAlert from '@mui/material/Alert';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="outline" {...props} />;
});

function ContactForm() {
    const [session, loading] = useSession();

    const [isAdmin, setIsAdmin] = useState(false);

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    const [emailError, setEmailError] = useState({ error: false, errorMsg: '' });
    const [messageError, setMessageError] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseState, setResponseState] = useState({
        success: true,
        snackbarIsOpen: false,
        message: ''
    });

    const handleEmailInput = (event) => {
        if (event.target.value.trim() === 'daveabdouguerrero@gmail.com') {
            setIsAdmin(isAdmin => !isAdmin);
        }

        setEnteredEmail(event.target.value);
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

    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const isFormValid = () => {
        let isValid = true;

        if (!enteredEmail.trim().length) {
            setEmailError((prevState) => ({
                ...prevState,
                error: true,
                errorMsg: 'Email is invalid.'
            }));

            isValid = false;
        }

        if (!enteredEmail.match(regexEmail)) {
            setEmailError((prevState) => ({
                ...prevState,
                error: true,
                errorMsg: 'Email is invalid.'
            }));

            isValid = false;
        }

        if (!enteredMessage.trim().length) {
            setMessageError(messageError => !messageError);

            isValid = false;
        }

        return isValid;
    }

    const contactMeHandler = async (event) => {
        event.preventDefault();

        setIsSubmitting(isSubmitting => !isSubmitting);

        if (enteredEmail === 'daveabdouguerrero@gmail.com') {
            try {
                const result = await signIn('credentials', {
                    redirect: false,
                    email: enteredEmail,
                    password: enteredPassword
                });
                if (!result.error) return;
            } catch (err) { return setIsSubmitting(isSubmitting => !isSubmitting); };
        }

        setEmailError((prevState) => ({
            ...prevState,
            error: false,
            errorMsg: ''
        }));

        setMessageError(false);

        if (!isFormValid()) return setIsSubmitting(isSubmitting => !isSubmitting);

        try {
            const response = await fetch('/api/contact-me/contact-me', {
                method: 'POST',
                body: JSON.stringify({ email: enteredEmail, message: enteredMessage }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

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
            setResponseState((prevState) => ({
                ...prevState,
                snackbarIsOpen: true,
                success: error.success,
                message: error.error
            }));
        }

        setIsSubmitting(isSubmitting => !isSubmitting);
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
        <div className={classes['contact-form__container']}>
            {!isAdmin && !session && <Fragment>
                <h1 className={classes['contact-form__header']}>Send me a message.</h1>
                <p className={classes['contact-form__para']}>Thank you for visiting my site.
                    I hope you enjoyed my writing. Send me a message and I&apos;ll get back to you as soon as I can.
                    Also, if you enter the right email there is a suprise. You know who you are.</p>
            </Fragment>
            }
            {isAdmin && !session && <Fragment>
                <h1 className={classes['contact-form__header']}>Login</h1>
                <p className={classes['contact-form__para']}>Feeling inspired today?</p>
            </Fragment>}
            {session && <Fragment>
                <h1 className={classes['contact-form__header--logged-in']}>Hi, Dave. You&apos;re logged in.</h1>
            </Fragment>}
            {!session && <form onSubmit={contactMeHandler}
                className={classes['contact-form']}>
                <div className={classes['contact-form__field']}>
                    <TextField error={emailError.error}
                        helperText={emailError && emailError.errorMsg}
                        className={classes['contact-form__input']}
                        value={enteredEmail}
                        onChange={handleEmailInput}
                        label="Email" variant="filled" />
                </div>
                <div className={classes['contact-form__field']}>
                    {!isAdmin && <TextField className={classes['contact-form__input']}
                        error={messageError}
                        helperText={messageError && 'Please provide a message of at least 40 characters.'}
                        multiline
                        rows={4}
                        value={enteredMessage}
                        onChange={
                            (event) => setEnteredMessage(event.target.value)
                        }
                        label="Message" variant="filled" />
                    }
                    {isAdmin && <TextField
                        className={classes['contact-form__input']}
                        type="password"
                        value={enteredPassword}
                        onChange={
                            (event) => setEnteredPassword(event.target.value)
                        }
                        label="Password" variant="filled" />
                    }
                </div>
                {!isSubmitting && <button className={classes['contact-form__submit-btn']}
                    type="submit">Submit</button>}
                {isSubmitting && <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>}
            </form>}
            {!responseState.success && <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={responseState.snackbarIsOpen} autoHideDuration={2000}
                onClose={handleClose}>
                <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
                    {responseState.message}
                </Alert>
            </Snackbar>}
            {responseState.success && <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                open={responseState.snackbarIsOpen}
                autoHideDuration={2000}
                onClose={handleClose}
                message={responseState.message}
                action={action} />}
        </div>
    )
}

export default ContactForm

