import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [issues, setIssues] = useState([]);
  const [issue, setIssue] = useState({ id: '', title: '', description: '' });

  const createIssue = async () => {
    try {
      const response = await axios.post('http://localhost:3000/issues', issue);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const readIssue = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/issues/${issue.id}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const updateIssue = async () => {
    try {
      const response = await axios.put(`http://localhost:3000/issues/${issue.id}`, issue);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteIssue = async () => {
    try {
      const response = await axios.delete(`http://localhost:3000/issues/${issue.id}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Issue Tracker</h1>
      <form>
        <label>
          ID:
          <input type="text" value={issue.id} onChange={(e) => setIssue({ ...issue, id: e.target.value })} />
        </label>
        <label>
          Title:
          <input type="text" value={issue.title} onChange={(e) => setIssue({ ...issue, title: e.target.value })} />
        </label>
        <label>
          Description:
          <input type="text" value={issue.description} onChange={(e) => setIssue({ ...issue, description: e.target.value })} />
        </label>
        <button onClick={createIssue}>Create Issue</button>
        <button onClick={readIssue}>Read Issue</button>
        <button onClick={updateIssue}>Update Issue</button>
        <button onClick={deleteIssue}>Delete Issue</button>
      </form>
    </div>
  );
}



export default App;