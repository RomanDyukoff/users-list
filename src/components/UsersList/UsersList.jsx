import React from 'react';
import './styles.scss';
import { UserItem } from '../UserItem/UserItem';

export const Userslist = ({ users }) => {
    return (
        <div className="users">
            <h1 className="users__title title">Users List</h1>
            <ul className="users__list">
                <UserItem users={users} />
            </ul>
        </div>
    );
}
