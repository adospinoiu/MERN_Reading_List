import express from 'express';
import mongoose from 'mongoose';
import Pusher from 'pusher';

import AddNewBook from './dbAddNewBook.js';
import AddCurrentlyReading from './dbAddCurrentlyReading.js';
import AddBookNotes from './dbAddBookNotes.js';

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

const pusher = new Pusher({
    appId: "1188685",
    key: "d7b5fb7d55c650625560",
    secret: "37d1cd9d91f0cee4cffe",
    cluster: "us3",
    useTLS: true
});

const db = mongoose.connection;

db.once('open', () => {
    console.log("DB Connected");

    const msgCollection = db.collection('addnewbooks');
    const changeStream = msgCollection.watch();

    changeStream.on('change', (change) => {
        console.log('A change occured:', change);

        if (change.operationType === 'insert') {
            const newBookDetails = change.fullDocument;
            pusher.trigger('newBookAdded', 'inserted', {
                title: newBookDetails.title,
                author: newBookDetails.author,
                recommendedBy: newBookDetails.recommendedBy,
            });
        } else {
            console.log('Error triggering Pusher');
        }
    })
})

// API Routes
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
});

// This API-Route is tied to the main App Component. It gets all the data from the database and then sends it down through ReadingList-Component to the Future-Reading-SubComponent to display the list. This is specifically tied to the 'addnewbooks-collection'
app.get('/addNewBook/added', (req, res) => {
    AddNewBook.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(200).send(data);
        }
    })
})

// This API-Route is tied to the 'Add-to-List Button' in the ReadingList-Component. It sends to the database any new books added to by the user. This is specifically tied to the 'addnewbooks-collection'
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

// This API-Route is tied to the main App Component. It gets all the data from the database and then sends it down through BookNotes-Component to the Currently-Reading-SubComponent to display the list. This is specifically tied to the 'addcurrentlyreading-collection'
app.get('/addCurrentlyReading/current', (req, res) => {
    const currentlyReading = req.body

    AddCurrentlyReading.find(currentlyReading, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// This API-Route is tied to the Future-Reading-List-SubComponent. It takes the clicked-on-data and passes the information to the database to post so the user knows which book is currently being read. This is specificially tied to the addcurrentlyreading-collection'
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

// This API-Route is tied to the BookNotes-Component. It takes the notes entered by the user and passes the information to the database to post so the user can save notes for each specific currently reading book.
app.post('/addBookNotes/new', (req, res) => {
    const bookNotes = req.body

    AddBookNotes.create(bookNotes, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

// This API-Route is tied to the main App-Component. It is to get all the notes entered on a book-by-book basis by the user. It then passes the information down to the notes-subcomponent to display the information.
app.get('/addBookNotes/notes', (req, res) => {
    const bookNotes = req.body

    AddBookNotes.find(bookNotes, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))