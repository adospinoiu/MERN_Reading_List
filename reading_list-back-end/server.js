import express from 'express';
import mongoose from 'mongoose';

import AddNewBook from './dbAddNewBook.js';
import AddCurrentlyReading from './dbAddCurrentlyReading.js';

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

// This API-Route is tied to the main App Component. It gets all the data from the database and then sends it down through Reading-Component to the Future-Reading-SubComponent to display the list
app.get('/addNewBook/added', (req, res) => {
    AddNewBook.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

// This API-Route is tied to the 'Add-to-List Button' in the Reading Component. It sends to the database any new books added to by the user
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

app.post('/addCurrentlyReading/new', (req, res) => {
    const currentlyReading = req.body

    AddCurrentlyReading.create(currentlyReading, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))