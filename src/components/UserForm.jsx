import React, { useState, useEffect } from 'react';

const UserForm = ({ user, onSave, resetUserForm }) => {
  const [formData, setFormData] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    department: '',
  });

  // Update form data when the selected user changes
  useEffect(() => {
    if (user) {
      setFormData(user); // Set form data for editing
    } else {
      // Reset form data for adding a new user
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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); // Trigger save or update action
    resetUserForm(); // Clear the form after submission
    setFormData({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      department: '',
    });
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h2>{formData.id ? 'Edit User' : 'Add User'}</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
      />
      {/* Dynamic button text */}
      <button type="submit">
        {formData.id ? 'Update User' : 'Save User'}
      </button>
    </form>
  );
};

export default UserForm;
