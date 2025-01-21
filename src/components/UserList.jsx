import React from 'react';

const UserList = ({ users, onDelete, onEdit, currentPage, totalPages, onPageChange }) => {
  const renderPagination = () => {
    const paginationButtons = [];

    // Add "Previous" button
    paginationButtons.push(
      <button
        key="prev"
        className="pagination-button"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
    );

    // Add numbered buttons with ellipsis for large page numbers
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 || 
        i === totalPages || 
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        paginationButtons.push(
          <button
            key={i}
            className={`pagination-button ${currentPage === i ? 'active' : ''}`}
            onClick={() => onPageChange(i)}
          >
            {i}
          </button>
        );
      } else if (
        i === currentPage - 2 || 
        i === currentPage + 2
      ) {
        paginationButtons.push(
          <span key={`ellipsis-${i}`} className="pagination-ellipsis">...</span>
        );
      }
    }

    // Add "Next" button
    paginationButtons.push(
      <button
        key="next"
        className="pagination-button"
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    );

    return paginationButtons;
  };

  return (
    <div className="user-list">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName || 'N/A'}</td>
              <td>{user.lastName || 'N/A'}</td>
              <td>{user.email || 'N/A'}</td>
              <td>{user.department || 'N/A'}</td>
              <td>
                <button className="edit-button" onClick={() => onEdit(user)}>Edit</button>
                <button className="delete-button" onClick={() => onDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">{renderPagination()}</div>
    </div>
  );
};

export default UserList;
