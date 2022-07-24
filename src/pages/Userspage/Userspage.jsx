import React from 'react';
import { Userslist } from '../../components/UsersList/UsersList'



export const Userspage = ({ users }) => {
    return (
        <>
            <Userslist users={users} />
        </>
    );
}
