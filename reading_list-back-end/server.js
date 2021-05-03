import express from 'express';
import mongoose from 'mongoose';

// App config
const app = express();
const port = process.env.PORT || 9000;

// DB Config
const connection_url = 'mongodb+srv://controller:JHzOMh9ImpBDMC6S@cluster0.xotjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// API Routes
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
});

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))