const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
    // We get data from DB
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port}`);