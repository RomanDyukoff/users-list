import './App.scss';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import { Layout } from './components/Layout/Layout';
import { Userspage } from './pages/Userspage/Userspage';
import { CreateUser } from './pages/CreateUser/CreateUser';
import { Singlepage } from './pages/Singlepage/Singlepage';


const App = () => {
  
  const [ users, setUsers] = useState([]);
  const addUser = ({ id, name, lastname }) => {
    const newUser = {
      id: id,
      name: name,
      lastname: lastname,
    }
    setUsers([...users, newUser])
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Userspage users={users} />} />
          <Route path='/:id' element={<Singlepage users={users} />} />
          <Route path='create-user' element={<CreateUser addUser={addUser} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
