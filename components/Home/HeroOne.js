import { useEffect, useState } from 'react';

import Link from 'next/link';

import Typewriter from "typewriter-effect";
import classes from '../../styles/components/Home/hero-one.module.css';
import useAPI from '../../hooks/use-api';

function HeroOne() {
    const [poemSamples, setPoemSamples] = useState([]);
    const [finishedTyping, setFinishedTyping] = useState(false);

    const { sendRequest: fetchPoemSamples } = useAPI();

    useEffect(() => {
        const lambda = data => setPoemSamples(data.poemSamples);
        fetchPoemSamples(
            { url: '/api/poems/poem-samples' },
            lambda
        );
        return () => {
            setPoemSamples(null);
        }
    }, [fetchPoemSamples]);

    return (
        <section className={classes['hero-one']}>
            {poemSamples?.map(poem =>
                <h1 key={poem.title} className={classes['hero-one__sample-poem']}>
                    <Typewriter options={{ delay: 85 }} onInit={(typewriter) => {
                        typewriter
                            .typeString(`"${poem.sample}"`)
                            .callFunction(() => setFinishedTyping(finishedTyping => !finishedTyping))
                            .start();
                    }} />
                </h1>)}
            {finishedTyping &&
                <Link href={`/poems/${poemSamples[0].title}`} passHref>
                    <h1 className={classes['hero-one__sample-poem--title']}>
                        {`${poemSamples[0].title}`}
                    </h1>
                </Link>}
        </section>
    )
}

export default HeroOne
