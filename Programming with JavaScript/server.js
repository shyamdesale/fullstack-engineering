require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.use(express.json());

// =====================
// In-Memory Database (Mock)
// =====================
let users = [];

// =====================
// Utility Functions
// =====================
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
};

// =====================
// Middleware
// =====================
const authMiddleware = (req, res, next) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: 'Invalid Token' });
    }
};

// =====================
// Routes
// =====================

// Register User
app.post('/api/register', (req, res, next) => {
    try {
        const { name, email } = req.body;

        if (!name || !email) {
            throw new Error('Name and Email required');
        }

        const user = {
            id: users.length + 1,
            name,
            email
        };

        users.push(user);

        res.status(201).json({
            success: true,
            user
        });
    } catch (err) {
        next(err);
    }
});

// Login User (Mock)
app.post('/api/login', (req, res, next) => {
    try {
        const { email } = req.body;

        const user = users.find(u => u.email === email);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        const token = generateToken(user);

        res.json({
            success: true,
            token
        });
    } catch (err) {
        next(err);
    }
});

// Get All Users (Protected)
app.get('/api/users', authMiddleware, (req, res, next) => {
    try {
        res.json({
            success: true,
            data: users
        });
    } catch (err) {
        next(err);
    }
});

// Update User
app.put('/api/users/:id', authMiddleware, (req, res, next) => {
    try {
        const user = users.find(u => u.id == req.params.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.name = req.body.name || user.name;

        res.json({
            success: true,
            updatedUser: user
        });
    } catch (err) {
        next(err);
    }
});

// Delete User
app.delete('/api/users/:id', authMiddleware, (req, res, next) => {
    try {
        users = users.filter(u => u.id != req.params.id);

        res.json({
            success: true,
            message: 'User deleted'
        });
    } catch (err) {
        next(err);
    }
});

// =====================
// Global Error Handler
// =====================
app.use((err, req, res, next) => {
    console.error(err.message);

    res.status(500).json({
        success: false,
        message: err.message || 'Internal Server Error'
    });
});

// =====================
// Server Start
// =====================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});