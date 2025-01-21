import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        department: '',
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="user-form">
      <h2>{user ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="department"
          value={formData.department}
          onChange={handleChange}
          placeholder="Department"
          required
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default UserForm;
