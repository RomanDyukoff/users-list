import React from 'react';
import './styles.scss'
import { useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

export const Singlepage = ({ users }) => {
    
    const {id} = useParams();

    const person = users.find(user => user.id === id) || [];

    return (
        <>
            <div className='person'>
                <p className='person__info'>Welcome to {person.name} {person.lastname}!</p>   
                <div className='person__buttons'>
                    <Button text={"Назад"}/>
                    <Button text={"Удалить пользователя"}/> 
                </div>
            </div>
        </>
    );
}
