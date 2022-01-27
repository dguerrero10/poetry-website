import classes from '../styles/layout/page-wrapper.module.css';

function PageWrapper(props) {
    return (
        <div className={classes['page-wrapper']}>
            {props.children}
        </div>
    )
}

export default PageWrapper
