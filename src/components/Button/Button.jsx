import React from 'react';
import './styles.scss'

export const Button = ({ text, cb }) => {
    return (
        <button className="button" onClick={cb}>{text}</button>
    );
}
