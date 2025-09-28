// Import express
const express = require('express');

// Create an app instance
const app = express();

// Set the port number
const PORT = 3000;

// Define a route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

