const express = require("express");
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const { connectDB } = require('../Backend/db-serverless');

// Import routes
const userroute = require('../Backend/route/userProfile');
const mealroute = require('../Backend/route/meal');
const analysisroute = require('../Backend/route/analysis');

// Initialize Express app
const app = express();

// Connect to database for each request (serverless)
app.use(async (req, res, next) => {
    try {
        await connectDB();
        next();
    } catch (error) {
        console.error('Database connection failed:', error);
        res.status(500).json({ error: 'Database connection failed' });
    }
});

// Initialize Gemini AI
if (process.env.GEMINI_API_KEY) {
    global.genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
}

// Middleware
app.use(cors({
    origin: process.env.NODE_ENV === 'production'
        ? ['https://*.vercel.app', 'https://your-domain.com']
        : ['http://localhost:3000', 'http://localhost:5173'],
    credentials: true
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        timestamp: new Date().toISOString(),
        service: 'HealthBites Backend API'
    });
});

// API Routes
app.use('/api/user', userroute);
app.use('/api/meal', mealroute);
app.use('/api/analysis', analysisroute);
app.use('/api/generate-meal-plan', mealroute);

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: 'HealthBites API is running!',
        version: '1.0.0',
        endpoints: [
            '/api/user',
            '/api/meal',
            '/api/analysis',
            '/health'
        ]
    });
});

// Handle 404
app.use('*', (req, res) => {
    res.status(404).json({
        error: 'Route not found',
        path: req.originalUrl
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err);
    res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    });
});

module.exports = app;
