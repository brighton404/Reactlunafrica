// server.js
const express = require('express');
const authMiddleware = require('authMiddleware');

const app = express();
const PORT = 3001;

app.use(express.json());

// Use authentication middleware for protected routes
app.use('/api', authMiddleware);

// Your API routes go here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
