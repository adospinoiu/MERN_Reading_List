import express from 'express';
import mongoose from 'mongoose';

import AddNewBook from './dbAddNewBook.js';

// App config
const app = express();
const port = process.env.PORT || 9000;

//Middleware
app.use(express.json());

//Security Warning
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    next();
})

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

app.post('/addNewBook/new', (req, res) => {
    const newBook = req.body

    AddNewBook.create(newBook, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})


// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))