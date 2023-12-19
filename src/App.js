import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './screens/Login';
import Researcher from './screens/Researcher';
import PreRoom from './screens/PreRoom';
import Room from './screens/Room';
import WaitingRoom from './screens/WaitingRoom';
import SecondRoom from './screens/SecondRoom';
import { AuthProvider } from './authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/r" element={<Researcher />} />
            <Route path="/pre-room" element={<PreRoom />} />
            <Route path="/room/:meetingNumber" element={<Room />} />
            <Route path="/waiting-room" element={<WaitingRoom />} />
            <Route path="/second-room" element={<SecondRoom />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
