import { forwardRef, Fragment, useState } from 'react';

import classes from '../../styles/components/ContactMe/contact-form.module.css';

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

function ContactForm() {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');

    const [emailError, setEmailError] = useState({ error: false, errorMessage: '' });
    const [messageError, setMessageError] = useState(false);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [responseState, setResponseState] = useState({
        success: true,
        snackbarIsOpen: false,
        message: ''
    });

    const handleEmailInput = (event) => {
        setEnteredEmail(event.target.value);
    }

    const handleMessageInput = (event) => {
        setEnteredMessage(event.target.value);
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

    const validateForm = (email, message) => {
        let invalid = false;

        if (!email.trim().length) {
            setEmailError((prevState) => ({
                ...prevState,
                error: true,
                errorMessage: 'Email is invalid.'
            }));
            invalid = true;
        }

        if (!message.trim().length) {
            setMessageError(true);
            invalid = true;
        }

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (!email.trim().length || !email.match(regexEmail)) {
            setEmailError((prevState) => ({
                ...prevState,
                error: true,
                errorMessage: 'Email is invalid.'
            }));

            invalid = true;
        }

        if (message.trim().length < 1) {
            setMessageError(true);

            invalid = true;
        }

        return invalid;
    }

    const contactMeHandler = async (event) => {
        event.preventDefault();

        setIsSubmitting(true);

        setEmailError((prevState) => ({
            ...prevState,
            error: false,
            errorMessage: ''
        }));

        setMessageError(false);

        if (validateForm(enteredEmail, enteredMessage)) {
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
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
        <div className={classes['contact-form__container']}>
            <h2 className={classes['contact-form__header']}>Send Me a Message</h2>
            <p className={classes['contact-form__para']}>I'll get back to you as soon as I can.</p>
            <form onSubmit={contactMeHandler}
                className={classes['contact-form']}>
                <div className={classes['contact-form__field']}>
                    <TextField error={emailError.error}
                        helperText={emailError && emailError.errorMessage}
                        className={classes['contact-form__input']}
                        value={enteredEmail}
                        onChange={handleEmailInput}
                        label="Email" variant="filled" />
                </div>
                <div className={classes['contact-form__field']}>
                    <TextField className={classes['contact-form__input']}
                        error={messageError}
                        helperText={messageError && 'Please provide a message of at least 40 characters.'}
                        multiline
                        rows={4}
                        value={enteredMessage}
                        onChange={handleMessageInput}
                        label="Message" variant="filled" />
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

