// client/src/components/IssueList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function IssueList() {
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState({ title: '', description: '', status: '' });

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
    axios.post('http://localhost:3000/api/issues', newIssue)
      .then(response => {
        setIssues([...issues, response.data]);
        setNewIssue({ title: '', description: '', status: '' });
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleUpdate = (issue) => {
    axios.put(`http://localhost:3000/api/issues/${issue.id}`, issue)
      .then(response => {
        setIssues(issues.map((i) => i.id === issue.id ? issue : i));
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3000/api/issues/${id}`)
      .then(() => {
        setIssues(issues.filter((issue) => issue.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Issue List</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={newIssue.title} onChange={(event) => setNewIssue({ ...newIssue, title: event.target.value })} />
        </label>
        <label>
          Description:
          <input type="text" value={newIssue.description} onChange={(event) => setNewIssue({ ...newIssue, description: event.target.value })} />
        </label>
        <label>
          Status:
          <input type="text" value={newIssue.status} onChange={(event) => setNewIssue({ ...newIssue, status: event.target.value })} />
        </label>
        <button type="submit">Create Issue</button>
      </form>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <h2>{issue.title}</h2>
            <p>{issue.description}</p>
            <p>Status: {issue.status}</p>
            <button onClick={() => handleUpdate(issue)}>Update</button>
            <button onClick={() => handleDelete(issue.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IssueList;