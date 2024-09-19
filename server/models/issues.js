// server/models/issues.js
const Issue = require('./issue');

const issues = [
  new Issue(1, 'Issue 1', 'This is issue 1', 'open'),
  new Issue(2, 'Issue 2', 'This is issue 2', 'in progress'),
  new Issue(3, 'Issue 3', 'This is issue 3', 'closed'),
];

module.exports = issues;

// server/models/issue.js
class Issue {
  constructor(id, title, description, status) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }
}

module.exports = Issue;

