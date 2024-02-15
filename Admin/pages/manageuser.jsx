// UserManagement.jsx
import React, { useState, useEffect } from 'react';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulated user data
      const simulatedUsers = [
        { id: 1, name: 'John Doe', email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
        { id: 3, name: 'Bob Smith', email: 'bob@example.com' },
      ];

      setUsers(simulatedUsers);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User Management</h2>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserManagement;
