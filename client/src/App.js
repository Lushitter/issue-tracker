// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/issues')
      .then(response => {
        setIssues(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { title, description } = event.target;
    axios.post('http://localhost:3000/api/issues', { title, description })
      .then(response => {
        setIssues([...issues, response.data]);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Issues</h1>
      <ul>
        {issues.map(issue => (
          <li key={issue.id}>{issue.title}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" />
        </label>
        <label>
          Description:
          <input type="text" name="description" />
        </label>
        <button type="submit">Create Issue</button>
      </form>
    </div>
  );
}

export default App;