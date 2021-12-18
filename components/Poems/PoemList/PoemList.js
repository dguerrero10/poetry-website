import { useEffect, useState, useCallback } from 'react';

import PoemListItem from './PoemListItem';

import classes from '../../../styles/components/Poems/PoemList/poem-list.module.css';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '@material-ui/icons/Search';
import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';

function PoemList() {
    const [poems, setPoems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchPoemsHandler = useCallback(async () => {
        try {
            const response = await fetch('/api/poems');
            let data = await response.json();
            setPoems(data.poems);
            setIsLoading(false);
        } catch (error) {
            console.log(error)
        }
    }, []);

    useEffect(() => {
        fetchPoemsHandler();
        return () => {
            setPoems([]);
            setIsLoading(null);
        }
    }, [fetchPoemsHandler]);

    return (
        <div className={classes['poems-list']}>
            <div className={classes['poem-list__searchbar--container']}>
                <TextField className={classes['poem-list__searchbar']}
                    variant="filled"
                    label="Search poems"
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
            {!isLoading && poems.map(poem => <PoemListItem key={poem._id}
                title={poem.title}
                content={poem.content} />)}
        </div>
    )
}

export default PoemList
