import React, { useState, useEffect } from 'react';

const DashboardPage = () => {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalOrders: 0,
    revenue: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulated data
      const simulatedData = {
        totalUsers: 1500,
        totalOrders: 500,
        revenue: 100000,
      };

      setStats(simulatedData);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard - Overview</h1>
      <div>
        <h2>Statistics</h2>
        <p>Total Users: {stats.totalUsers}</p>
        <p>Total Orders: {stats.totalOrders}</p>
        <p>Revenue: ${stats.revenue}</p>
      </div>
    </div>
  );
};

export default DashboardPage;
