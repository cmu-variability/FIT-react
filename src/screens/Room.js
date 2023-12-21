import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import ZoomMtgEmbedded from '@zoomus/websdk/embedded'

const Room = () => {
  const [showChat, setShowChat] = useState(true);
  const navigate = useNavigate();
  const { meetingNumber } = useParams();

  const leaveCall = () => {
    navigate('/waiting-room');
  }

  const toggleChat = () => {
    setShowChat(!showChat);
  }

  const client = ZoomMtgEmbedded.createClient()

  let meetingSDKElement = document.getElementById('meetingSDKElement')

  useEffect(() => {
    let meetingSDKElement = document.getElementById('meetingSDKElement');
    client.init({
      zoomAppRoot: meetingSDKElement,
      language: 'en-US'
    });

    // Here, you would also include the logic to start the meeting
    // client.join({ /* Meeting details like API Key, meeting number, etc. */ })

  }, []);

  return (
    <div style={{ width: '90%', margin: '0 auto', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ display: 'flex', flex: 9, marginTop: '20px' }}>
          <div style={{ flex: showChat ? 3 : 4, borderRadius: '15px', border: '1px solid black', marginRight: showChat ? '10px' : '0' }}>
            <div id="meetingSDKElement">

            </div>
          </div>
          {showChat && (
            <div style={{ flex: 1, borderRadius: '15px', border: '1px solid black', padding: '10px' }}>
              {/* Chat section */}
              <p>Chat {meetingNumber}</p>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flex: 1, padding: '10px' }}>
          <span>Call Duration: 00:00</span>
          <div>
            {/* Icons for mic, camera, and chat */}
            <button style={{ width: '50px', height: '50px', margin: '0 5px' }}>Mic</button>
            <button style={{ width: '50px', height: '50px', margin: '0 5px' }}>Cam</button>
            <button style={{ width: '50px', height: '50px', margin: '0 5px' }} onClick={toggleChat}>Chat</button>
          </div>
          <button style={{ padding: '10px 20px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
          onClick={() => leaveCall()}>End Call</button>
        </div>
      </div>
    </div>
  );
};

export default Room;
