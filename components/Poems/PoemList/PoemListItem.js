import { Fragment, useState } from "react";

import Link from 'next/link';

import { htmlContentParser } from '../../../helpers/htmlContentParser';

import classes from '../../../styles/components/Poems/PoemList/poem-list-item.module.css';

import Fab from '@mui/material/Fab';
import DeleteIcon from '@material-ui/icons/Delete'

function PoemListItem({ title, 
                        content,
                        session, 
                        deletePoem }) {

    const intro = htmlContentParser(content);

    if (session) {
        return (
            <Fragment>
                <div className={classes['poem-list__item--action-row']}>
                     <Fab className={classes['poem-list__item--delete-btn']}
                        onClick={() => deletePoem(title)}
                        size="small" aria-label="delete">
                        <DeleteIcon />
                    </Fab>
                </div>
                <Link href={`poems/${title}`} passHref>
                    <div className={classes['poem-list__item']}>
                        <h2 className={classes['poem-list__item--title']}>{title}</h2>
                        <div className={classes['poem-list__item--row']}>
                            <p className={classes['poem-list__item--content']}>{intro}</p>
                        </div>
                    </div>
                </Link>
            </Fragment>
        )
    }

    else return (
        <Link href={`poems/${title}`} passHref>
            <div className={classes['poem-list__item']}>
                <h2 className={classes['poem-list__item--title']}>{title}</h2>
                <div className={classes['poem-list__item--row']}>
                    <p className={classes['poem-list__item--content']}>{intro}</p>
                </div>
            </div>
        </Link>
    )
}

export default PoemListItem
