import { useEffect, useState } from "react";

import PoemPreviewListItem from "./PoemPreviewListItem";

import classes from '../../../styles/components/Poems/PoemPreviews/poem-preview-list.module.css';

import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import useAPI from "../../../hooks/use-api";

function PoemPreviewList() {
    const [poems, setPoems] = useState([]);

    const { isLoading, sendRequest: fetchPoems } = useAPI();

    useEffect(() => {
        const lambda = data => setPoems(data.poems);
        fetchPoems(
            { url: '/api/poems/poem-preview' },
            lambda
        )
        return () => {
            setPoems([]);
        }
    }, [fetchPoems]);

    return (
        <div className={classes['poem-prev']}>
            <h2 className={classes['poem-prev__header']}>Featured Poems</h2>
            <div className={classes['poem-prev__list']}>
                {isLoading && [...Array(3).keys()].map((index) =>
                    <div key={index} className={classes['skeleton__container']}>
                        <div className={classes['skeleton__header']}>
                            <Typography variant="h1">{isLoading ? <Skeleton /> : 'h1'}</Typography>
                        </div>
                        <div className={classes['skeleton__para']}>
                            <Typography variant="p">{isLoading ? <Skeleton /> : 'p'}</Typography>
                        </div>
                        <div className={classes['skeleton__para-alt']}>
                            <Typography variant="p">{isLoading ? <Skeleton /> : 'p'}</Typography>
                        </div>
                    </div>)}
                {!isLoading && poems?.map(poem => <PoemPreviewListItem key={poem._id}
                    title={poem.title}
                    content={poem.content} />)}
            </div>
        </div>
    )
}

export default PoemPreviewList
