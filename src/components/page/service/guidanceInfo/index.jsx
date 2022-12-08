/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './styles.module.scss';
const GuidanceInfo = ({ description, time, via, price }) => {
    return (
        <div className={styles.container}>
            <h1>Get Guidance now</h1>
            <p>{description}</p>
            <div>
                <span className={styles.card}>
                    For <span>{time}</span>
                </span>
                <span className={styles.card}>
                    On <span>{via}</span>
                </span>
                <span className={styles.card}>
                    at <span>{price}</span>
                </span>
            </div>
        </div>
    );
};

export default GuidanceInfo;
