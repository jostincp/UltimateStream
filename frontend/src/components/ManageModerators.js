import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ManageModerators() {
  const [moderators, setModerators] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [streamerId, setStreamerId] = useState(''); // Assuming you have the streamerId available

  useEffect(() => {
    // Fetch existing moderators
    axios.get('/api/moderators')
      .then(response => setModerators(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleAddModerator = async () => {
    try {
      const response = await axios.post('/api/moderators', { username, password, streamerId });
      setModerators([...moderators, response.data]);
    } catch (error) {
      console.error('Add moderator error:', error.response.data);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Moderators</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mr-2"
        />
        <button onClick={handleAddModerator} className="bg-blue-500 text-white p-2">Add Moderator</button>
      </div>
      <ul className="list-disc pl-5">
        {moderators.map(moderator => (
          <li key={moderator._id} className="mb-2">{moderator.username}</li>
        ))}
      </ul>
    </div>
  );
}

export default ManageModerators;