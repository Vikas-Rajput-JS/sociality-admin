const express = require('express');


const path = require('path');

const app = express();
const PORT = process.env.PORT || 4041;

// Serve static files from the build folder
app.use(express.static(path.join(__dirname, 'out')));

// Define a route to serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'out', 'index.html'));
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});