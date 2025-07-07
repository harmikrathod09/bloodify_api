const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
    res.send('Bloodify API Server is running.');
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});