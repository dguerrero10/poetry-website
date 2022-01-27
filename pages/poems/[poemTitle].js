import { useEffect, useState, useCallback, Fragment } from "react";

import Link from 'next/link';

import ReactHtmlParser from 'react-html-parser';

import classes from '../../styles/pages/poem.module.css';

import Skeleton from '@mui/material/Skeleton';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos'
import Head from "next/head";

function Poem(props) {
    const [poem, setPoem] = useState({ id: '', title: '', content: '' });
    const [isLoading, setIsLoading] = useState(true);

    const fetchPoemHandler = useCallback(async () => {
        try {
            const response = await fetch(`/api/poems/${props.poemTitle}`);

            let data = await response.json();

            setPoem((prevState) => ({
                ...prevState,
                id: data.poem.id,
                title: data.poem.title,
                content: data.poem.content
            }));

            setIsLoading(isLoading => !isLoading);

        } catch (error) {
            console.log(error)
        }
    }, []);

    useEffect(() => {
        fetchPoemHandler();

        return () => {
            setPoem(null);
            setIsLoading(null);
        }
    }, [fetchPoemHandler]);

    return (
        <Fragment>
            <Head>
                <title>{poem.title} by David Guerrero</title>
                <meta name="description" content={`${poem.title} written by David Guerrero`}>
                </meta>
            </Head>
            <div className={classes['poem']}>
                <div className={classes['poem__wrapper']}>
                    <Link href='/poems' passHref>
                        <div className={classes['poem__back--row']}>
                            <ArrowBackIcon fontSize='small' />
                            <h4 className={classes['poem__back--btn']}>
                                Go back to browsing
                            </h4>
                        </div>
                    </Link>
                    {isLoading && <div className={classes['skeleton__header']}>
                        <Typography variant="h1">{isLoading ? <Skeleton /> : 'h1'}</Typography>
                    </div>}
                    {isLoading && [...Array(20).keys()].map((index) =>
                        <div key={index}
                            className={index % 2 == 0 ?
                                classes['skeleton__para'] :
                                classes['skeleton__para-alt']}>
                            <Typography variant="p">{isLoading ? <Skeleton /> : 'p'}</Typography>
                        </div>)}
                    {!isLoading && <Fragment>
                        <h2 className={classes['poem__title']}>{poem.title}</h2>
                        <div className={classes['poem__content']}>{ReactHtmlParser(poem.content)}</div>
                    </Fragment>
                    }
                </div>
            </div>
        </Fragment>

    )
}

export default Poem

export async function getServerSideProps(context) {
    const { params } = context;
    const poemTitle = params.poemTitle;

    return {
        props: {
            poemTitle: poemTitle
        }
    }
}