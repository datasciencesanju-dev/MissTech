const express = require('express');
const cors = require('cors');
const userRoute = require('./Routes/userRoute');
const LoginRoute = require('./Routes/LoginRoute.js');
const courseRoute = require('./Routes/CourseRoute.js');
const DBconnection = require('./db.js');

const app = express();

app.use(express.json());
app.use(cors());

// Connect DB on each request (uses connection caching in db.js)
app.use(async (req, res, next) => {
    try {
        await DBconnection();
    } catch (err) {
        console.error("MongoDB Atlas middleware error:", err.message);
    }
    next();
});

app.use('/api/user', userRoute);
app.use('/api/login', LoginRoute);
app.use('/api/courses', courseRoute);

app.get('/api', (req, res) => {
    const mongoose = require('mongoose');
    res.json({
        status: 'success',
        message: 'MissTech API Gateway is online with MongoDB Atlas!',
        dbStatus: mongoose.connection.readyState === 1 ? 'connected' : 'connecting_or_disconnected',
        timestamp: new Date().toISOString()
    });
});

app.get('/api/health', (req, res) => {
    const mongoose = require('mongoose');
    res.json({
        status: 'ok',
        database: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

module.exports = app;
