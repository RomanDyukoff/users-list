import React from 'react';
import { Userslist } from '../../components/UsersList/UsersList'



export const Userspage = ({ users, reUser }) => {
    return (
        <>
            <Userslist users={users} reUser={reUser} />
        </>
    );
}
