import Image from "next/image"

import classes from '../../styles/components/Home/hero-two.module.css';

function HeroTwo() {
    return (
        <section className={classes['hero-two']}>
            <div className={classes['hero-two__container']}>
            <div className={classes['hero-two__img-container']}>
            <img className={classes['hero-two__img']} 
                 src="/assets/images/embrace.jpg" />
            <p className={classes['painting-credit']}>
                <span className={classes['painting-name']}>Embrace</span> by Pablo Picasso
            </p>
            </div>
                <div className={classes['hero-two__text-container']}>
                    <h1 className={classes['hero-two__header']}>How I View Poetry</h1>
                    <p className={classes['hero-two__text--content']}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                        eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                        sunt in culpa qui officia deserunt mollit anim id est laborum
                    </p>
                </div>
            </div>
        </section>
    )
}

export default HeroTwo
