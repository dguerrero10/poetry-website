import { useRouter } from 'next/router';

import { htmlContentParser } from '../../../helpers/htmlContentParser';

import Link from 'next/link';
import classes from '../../../styles/components/Poems/PoemPreviews/poem-preview-list-item.module.css';

function PoemPreviewListItem({ title, content }) {
    const intro = htmlContentParser(content);
    const router = useRouter();

    return (
        <div className={classes['poem-prev__item']}>
            <h2 onClick={() => router.push(`/poems/${title}`)} 
                className={classes['poem-prev__item--title']}>{title}</h2>
            <p className={classes['poem-prev__item--content']}>{intro}</p>
            <Link href={`poems/${title}`}>
                <a className={classes['poem-prev__item--link']}>Read more</a>
            </Link>
        </div>
    )
}

export default PoemPreviewListItem
