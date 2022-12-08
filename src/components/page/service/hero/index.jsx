import React, { useMemo } from 'react';
import styles from './styles.module.scss';
import Fade from 'react-reveal/Fade';
const Hero = ({ title, image }) => {
    console.log('hello');
    return (
        <div
            className={styles.container}
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div>
                <Fade>
                    <h1>
                        <mark>{title}</mark>
                    </h1>
                </Fade>
            </div>
        </div>
    );
};

const FinalHero = ({ title, image }) =>
    useMemo(() => <Hero title={title} image={image} />, [title, image]);

export default FinalHero;
