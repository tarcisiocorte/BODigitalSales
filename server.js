const express = require('express');
const databaseConnection = require('./config/db');

const app = express();

// Connect Database
databaseConnection();

app.get('/', (req, res) => res.send('API is running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
