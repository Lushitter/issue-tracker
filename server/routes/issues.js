// server/routes/issues.js
const express = require('express');
const router = express.Router();
const issues = require('../models/issues');

// Get all issues
router.get('/', (req, res) => {
  res.json(issues);
});

// Get a single issue by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const issue = issues.find((issue) => issue.id === id);
  if (!issue) {
    res.status(404).json({ message: 'Issue not found' });
  } else {
    res.json(issue);
  }
});

// Create a new issue
router.post('/', (req, res) => {
  const { title, description, status } = req.body;
  const issue = new Issue(issues.length + 1, title, description, status);
  issues.push(issue);
  res.json(issue);
});

// Update an existing issue
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const issue = issues.find((issue) => issue.id === id);
  if (!issue) {
    res.status(404).json({ message: 'Issue not found' });
  } else {
    const { title, description, status } = req.body;
    issue.title = title;
    issue.description = description;
    issue.status = status;
    res.json(issue);
  }
});

// Delete an issue
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = issues.findIndex((issue) => issue.id === id);
  if (index === -1) {
    res.status(404).json({ message: 'Issue not found' });
  } else {
    issues.splice(index, 1);
    res.json({ message: 'Issue deleted' });
  }
});

module.exports = router;