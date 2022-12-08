import React from 'react';
import styles from './styles.module.scss';
import Fade from 'react-reveal/Fade';
const Hero = ({ text }) => {
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

export default Hero;
