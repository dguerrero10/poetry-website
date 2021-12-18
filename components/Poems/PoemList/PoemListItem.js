import { htmlContentParser } from '../../../helpers/htmlContentParser';

import Link from 'next/link';

import classes from '../../../styles/components/Poems/PoemList/poem-list-item.module.css';

function PoemListItem({ title, content }) {
    const intro = htmlContentParser(content);

    return (
        <Link href={`poems/${title}`}>
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
