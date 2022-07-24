import React from 'react';
import './styles.scss'

export const Button = ({ text, action }) => {
    return (
        <button className='button' onClick={action}>{text}</button>
    );
}
