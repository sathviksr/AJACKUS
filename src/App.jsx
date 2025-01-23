import React, { useState, useEffect } from 'react';
import { fetchUsers, deleteUser, addUser, updateUser } from './api/api';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import './styles/App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  // Load users when the component mounts
  useEffect(() => {
    loadUsers();
  }, []);

  // Fetch all users from the API
  const loadUsers = async () => {
    try {
      const response = await fetchUsers();
      setUsers(response.data);
    } catch (error) {
      alert('Failed to fetch users!');
    }
  };

  // Delete a user by ID
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      alert('Failed to delete user!');
    }
  };

  // Add or update a user
  const handleAddOrUpdate = async (user) => {
    try {
      if (user.id) {
        // Update an existing user
        await updateUser(user.id, user);
        setUsers(users.map((u) => (u.id === user.id ? user : u)));
      } else {
        // Add a new user
        const response = await addUser(user);
        setUsers([...users, response.data]);
      }
      setSelectedUser(null); // Reset the selected user after save
    } catch (error) {
      alert('Failed to save user!');
    }
  };

  return (
    <div className="app-container">
      <h1>User Management</h1>
      {/* User list component */}
      <UserList users={users} onDelete={handleDelete} onEdit={setSelectedUser} />
      {/* User form for adding or editing */}
      <UserForm user={selectedUser} onSave={handleAddOrUpdate} />
    </div>
  );
};

export default App;
