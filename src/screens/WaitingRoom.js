import React from 'react';

const WaitingRoom = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      fontSize: '2rem',
      textAlign: 'center'
    }}>
      <p>Please wait for the researcher to join this room.</p>
    </div>
  );
};

export default WaitingRoom;
