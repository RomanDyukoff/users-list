import React from 'react';
import { Form } from '../../components/Form/Form';

export const CreateUser = ({ addUser }) => {
    return (
       <>
        <Form addUser={addUser} />
       </>
    );
}
