// FeedbackManagement.jsx
import React, { useState, useEffect } from 'react';

const FeedbackManagement = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      // Simulate API request delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Simulated feedback data
      const simulatedFeedbacks = [
        { id: 1, customer: 'Customer A', feedback: 'Great service!' },
        { id: 2, customer: 'Customer B', feedback: 'Awesome experience!' },
        { id: 3, customer: 'Customer C', feedback: 'Very satisfied!' },
      ];

      setFeedbacks(simulatedFeedbacks);
    };

    fetchFeedbacks();
  }, []);

  return (
    <div>
      <h2>Feedback Management</h2>
      <ul>
        {feedbacks.map(feedback => (
          <li key={feedback.id}>
            {feedback.customer} - {feedback.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackManagement;
