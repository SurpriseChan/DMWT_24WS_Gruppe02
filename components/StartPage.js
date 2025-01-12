import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/api-page');
  };

  return (
    <div>
      <h1>Welcome to the Start Page</h1>
      <button onClick={handleNavigate}>Go to API Page</button>
    </div>
  );
}

export default StartPage;
