import React, { useMemo } from 'react';
import styles from './styles.module.scss';
import Fade from 'react-reveal/Fade';
const Hero = ({ text }) => {
    console.log('hello')
    return (
        <div className={styles.container}>
            <div>
                <Fade>
                    <h1>
                        <mark>{text}</mark>
                    </h1>
                </Fade>
            </div>
        </div>
    );
};

const FinalHero = ({ text }) => useMemo(() => <Hero text={text} />, [text]);

export default FinalHero;
