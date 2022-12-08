import React from 'react';
import styles from './styles.module.scss';
const Input = ({ label, type, onChange, placeholder, min, value }) => {
    const handleChange = (e) => {
        if (onChange !== null) {
            onChange(e.target.value);
        }
    };

    let extra = {};

    if (type === 'date') {
        extra = {
            min: new Date().toLocaleDateString('en-ca'),
        };
    }

    if (value) {
        extra = {
            min: new Date().toLocaleDateString('en-ca'),
            value,
        };
    }

    return (
        <div className={styles.container}>
            <label htmlFor={label}>{label}</label>
            <input
                id={label}
                type={type}
                onChange={handleChange}
                placeholder={placeholder}
                required
                {...extra}
            />
        </div>
    );
};

export default Input;
