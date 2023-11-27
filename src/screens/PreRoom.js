import React from 'react';
import { useNavigate } from 'react-router-dom';

const PreRoom = () => {

  const navigate = useNavigate();

  const username = "YourUsername"; // Replace with dynamic username if needed

  const startRoom = (e) => {
    navigate('/room'); // Replace '/pre-room' with the path of your route
    // e.preventDefault();
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid black' }}>
        <h2 style={{marginLeft: '75px'}}>FIT</h2>
        <span style={{marginRight: '75px'}}>{username}</span>
      </div>

      <div style={{ width: '60%', margin: '0 auto' }}>
        <div style={{ border: '1px solid black', borderRadius: '5px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', marginBottom: '20px' }}>
          <p>Click the button on the right to start a new meeting</p>
          <button 
            onClick={() => startRoom()}
            style={{
              height: '50px', backgroundColor: '#2255FF', color: 'white', border: 'none', borderRadius: '5px',
              padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', 
            }}
          >
            Enter Call <span style={{ marginLeft: '10px', marginBottom: '4px', fontSize: '1.5rem' }}>&rarr;</span>
          </button>
        </div>

        <div style={{ height: '60vh', borderRadius: '5px', border: '1px solid black' }}>
          {/* Empty div */}
        </div>
      </div>
    </>
  );
};

export default PreRoom;
