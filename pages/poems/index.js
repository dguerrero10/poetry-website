import PoemList from '../../components/Poems/PoemList/PoemList'
import Image from 'next/image';

import classes from '../../styles/pages/poems.module.css';

function Poems() {
    return (
      <div className={classes['poems']}>
        <div className={classes['poems__img-container']}>
        <Image 
               src='/assets/images/lordByron.jpg'
               alt='universe'
               objectFit="cover"
               priority
               width={1000}
               height={400}/>
        <div className={classes['poems__header--wrapper']}>
          <h1 className={classes['poems__header']}>Explore My Poems</h1>
        </div>
        </div> 
        <div className={classes['poems__container']}>
          <PoemList />
        </div>
      </div>
    )
  }
  
  export default Poems