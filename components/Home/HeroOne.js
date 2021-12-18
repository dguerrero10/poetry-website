import { useCallback, useEffect, useState } from 'react';

import Link from 'next/link';

import Typewriter from "typewriter-effect";
import classes from '../../styles/components/Home/hero-one.module.css';

function HeroOne() {
    const [poemSamples, setPoemSamples] = useState([]);
    const [finishedTyping, setFinishedTyping] = useState(false);

    const fetchPoemSamplesHandler = useCallback(async () => {
        try {
            const response = await fetch('/api/poem-samples');
            let data = await response.json();
            setPoemSamples(data.poemSamples);
        } catch (error) {
            console.log(error)
        }
    }, []);

    useEffect(() => {
        fetchPoemSamplesHandler();
        return () => {
            setPoemSamples(null);
        }
    }, [fetchPoemSamplesHandler]);

    return (
        <section className={classes['hero-one']}>
            {poemSamples.map(poem =>
                <h1 key={poem.title} className={classes['hero-one__sample-poem']}>
                    <Typewriter options={{ delay: 85 }} onInit={(typewriter) => {
                        typewriter
                            .typeString(`"${poem.sample}"`)
                            .callFunction(() => setFinishedTyping(true))
                            .start();
                    }} />
                </h1>)}
            {finishedTyping &&
                <Link href={`/poems/${poemSamples[0].title}`}>
                    <h1 className={classes['hero-one__sample-poem--title']}>
                        {`${poemSamples[0].title}`}
                    </h1>
                </Link>}
        </section>
    )
}

export default HeroOne
