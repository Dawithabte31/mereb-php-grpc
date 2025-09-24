import React, { useState } from 'react';
import { CommunicationServiceClient } from './proto/service_grpc_web_pb';
import { PingRequest, PingResponse } from './proto/service_pb';

const client = new CommunicationServiceClient('http://localhost:8080');

function App() {
  const [inputMessage, setInputMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handlePing = () => {
    if (!inputMessage.trim()) return;

    setLoading(true);
    const request = new PingRequest();
    request.setMessage(inputMessage);

    client.ping(request, {}, (err, response) => {
      setLoading(false);
      if (err) {
        setResponseMessage(`Error: ${err.message}`);
      } else {
        setResponseMessage(response.getMessage());
      }
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Mereb Technologies - gRPC Demo</h1>
      
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Enter your message"
          style={{
            padding: '10px',
            width: '100%',
            marginBottom: '10px',
            fontSize: '16px'
          }}
        />
        
        <button
          onClick={handlePing}
          disabled={loading || !inputMessage.trim()}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: loading ? '#ccc' : '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: loading ? 'not-allowed' : 'pointer'
          }}
        >
          {loading ? 'Sending...' : 'Send Ping'}
        </button>
      </div>

      {responseMessage && (
        <div style={{
          padding: '15px',
          backgroundColor: '#f8f9fa',
          border: '1px solid #dee2e6',
          borderRadius: '4px'
        }}>
          <strong>Response:</strong> {responseMessage}
        </div>
      )}
    </div>
  );
}

export default App;