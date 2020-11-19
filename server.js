const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect DB
connectDB();

app.get('/', (req, res) => res.json({ msg: 'working' }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/history', require('./routes/history'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))