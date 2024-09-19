const express = require('express');
const app = express();
const issuesRouter = require('./routes/issues');

app.use(express.json());
app.use('/api/issues', issuesRouter);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

// Create
app.post('/issues', (req, res) => {
  const issue = req.body;
  console.log(`Created issue: ${JSON.stringify(issue)}`);
  res.send(`Issue created: ${issue.title}`);
});

// Read
app.get('/issues/:id', (req, res) => {
  const id = req.params.id;
  const issue = issues.find((issue) => issue.id === id);
  if (!issue) {
    res.status(404).send(`Issue not found: ${id}`);
  } else {
    res.send(issue);
  }
});

// Update
app.put('/issues/:id', (req, res) => {
  const id = req.params.id;
  const issue = req.body;
  console.log(`Updated issue: ${JSON.stringify(issue)}`);
  res.send(`Issue updated: ${issue.title}`);
});

// Delete
app.delete('/issues/:id', (req, res) => {
  const id = req.params.id;
  console.log(`Deleted issue: ${id}`);
  res.send(`Issue deleted: ${id}`);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});