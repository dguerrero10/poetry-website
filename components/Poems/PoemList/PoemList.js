import { useEffect, useState, forwardRef, Fragment } from 'react';
import { useSession } from "next-auth/client";

import PoemListItem from './PoemListItem';

import classes from '../../../styles/components/Poems/PoemList/poem-list.module.css';

import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@material-ui/icons/Search';
import Skeleton from '@mui/material/Skeleton';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@material-ui/icons/Close'
import MuiAlert from '@mui/material/Alert';
import useAPI from '../../../hooks/use-api';

const Alert = forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="outline" {...props} />;
});

function PoemList() {
    const [initialPoems, setInitialPoems] = useState([]);
    const [poems, setPoems] = useState([]);
    const [session, loading] = useSession();

    const { isLoading, setResponseState, responseState, sendRequest: lambdaPoem } = useAPI();

    let filterTimeout;

    const searchPoems = query => {
        clearTimeout(filterTimeout);

        filterTimeout = setTimeout(() => {
            let filteredPoems = poems.filter(poem =>
                poem.title.toLowerCase()
                    .includes(query.target.value.toLowerCase()));

            if (!filteredPoems.length > 0 || !query.target.value.trim().length) setPoems(initialPoems);
            else setPoems(filteredPoems);
        }, 500);
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

    useEffect(() => {
        const lambdaFetch = data => {
            setPoems(data.poems);
            setInitialPoems(data.poems);
        }

        lambdaPoem(
            { url: '/api/poems/poems' },
            lambdaFetch
        )

        return () => {
            setPoems([]);
        }
    }, [lambdaPoem]);

    const deletePoemHandler = async (title) => {
        const lambdaDelete = data => setPoems(data.poems);

        lambdaPoem(
            {
                url: '/api/poems/poems',
                method: 'DELETE',
                body: { title: title },
                headers: {
                    'Content-Type': 'application/json'
                }
            },
            lambdaDelete
        )
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
        <div className={classes['poems-list']}>
            <div className={classes['poem-list__searchbar--container']}>
                <TextField className={classes['poem-list__searchbar']}
                    variant="filled"
                    label="Search poems"
                    onChange={searchPoems}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <Search />
                            </InputAdornment>
                        ),
                    }} />
            </div>
            {isLoading && [...Array(7).keys()].map((index) =>
                <div key={index} className={classes['skeleton__container']}>
                    <div className={classes['skeleton__header']}>
                        <Typography variant="h1">{isLoading ? <Skeleton /> : 'h1'}</Typography>
                    </div>
                    <div className={classes['skeleton__para']}>
                        <Typography variant="p">{isLoading ? <Skeleton /> : 'p'}</Typography>
                    </div>
                </div>)}

            {!isLoading && poems?.map(poem => <PoemListItem key={poem._id}
                session={session}
                deletePoem={deletePoemHandler}
                title={poem.title}
                content={poem.content} />)}
            {snackbar}
        </div>
    )
}

export default PoemList
