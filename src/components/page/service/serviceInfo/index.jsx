import React from 'react';
import styles from './styles.module.scss';

const ServiceInfo = ({ title, description }) => {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <p dangerouslySetInnerHTML={{ __html: description }}></p>
        </div>
    );
};

export default ServiceInfo;
