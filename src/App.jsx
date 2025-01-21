// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



import React, { useState, useEffect } from 'react';
import { fetchUsers, deleteUser, addUser, updateUser } from './api/api';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './styles/App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await fetchUsers();
      setUsers(response.data);
    } catch (error) {
      alert('Failed to fetch users!');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      alert('Failed to delete user!');
    }
  };

  const handleAddOrUpdate = async (user) => {
    try {
      if (user.id) {
        await updateUser(user.id, user);
        setUsers(users.map(u => (u.id === user.id ? user : u)));
      } else {
        const response = await addUser(user);
        setUsers([...users, response.data]);
      }
      setSelectedUser(null);
    } catch (error) {
      alert('Failed to save user!');
    }
  };

  return (
    <div className="app-container">
      <h1>User Management</h1>
      <UserList users={users} onDelete={handleDelete} onEdit={setSelectedUser} />
      <UserForm user={selectedUser} onSave={handleAddOrUpdate} />
    </div>
  );
};

export default App;
