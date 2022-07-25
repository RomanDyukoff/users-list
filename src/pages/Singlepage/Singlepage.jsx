import React from 'react';
import './styles.scss'
import { Link, useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';

export const Singlepage = ({ users, cb }) => {
    
    const {id} = useParams();

    const person = users.find(user => user.id === id) || [];

    const rePerson = () => {
        cb([...users.filter(user => user.id !== id)])
    }

    return (
        <>
            <div className="person">
                <p className="person__info">Welcome to {person.name} {person.lastname}!</p>   
                <div className="person__buttons">
                    <Button text={<Link to="/">Назад</Link>} />
                    <Button text={<Link to="/">Удалить пользователя</Link>} cb={rePerson} /> 
                </div>
            </div>
        </>
    );
}
