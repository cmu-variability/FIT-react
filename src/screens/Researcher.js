import React from 'react';
import { useNavigate } from 'react-router-dom';

const ResearcherScreen = () => {
  const navigate = useNavigate();
  const username = "Researcher"; // Replace with dynamic username if needed

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid black', width: '100%' }}>
        <h2 style={{marginLeft: '75px'}}>FIT</h2>
        <span style={{marginRight: '75px'}}>{username}</span>
      </div>

      {/* Researcher's main content can be added here */}
      <div style={{ width: '60%', margin: '0 auto' }}>
        {/* Main content for researcher goes here */}
      </div>
    </>
  );
};

export default ResearcherScreen;
