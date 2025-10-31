// server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Example health check route
app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Kenya Grace HMS' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
