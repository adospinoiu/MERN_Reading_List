import express from 'express';
import mongoose from 'mongoose';

// App config
const app = express();
const port = process.env.PORT || 9000;

// API Routes
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
});

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))