const express = require('express');
const databaseConnection = require('./config/db');

const app = express();

// Connect Database
databaseConnection();

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API is running'));

// Define Routes
app.use('/api/users', require('./routes/api/users'));

app.use('/api/test01', require('./routes/api/test01'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
