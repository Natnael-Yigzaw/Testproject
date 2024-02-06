import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">Dashboard</Link>
      <Link to="/users">Users</Link>
    </div>
  );
};

export default Sidebar;
