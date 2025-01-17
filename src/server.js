// src/server.js
const express = require('express');
const app = express();
const path = require('path');

// Set up Content Security Policy (CSP) to block inline scripts and only allow scripts from trusted sources
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; script-src 'self';");
  next();
});

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '../public')));

// Sample route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
