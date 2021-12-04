import axios from './axios';
import React, { useState, useEffect } from 'react';
import Pusher from 'pusher-js';
import './App.css';

// Import Components
import BookNotes from './BookNotes';
import ReadBooks from './ReadBooks';
import ReadingList from './ReadingList';

function App() {
  const [ newBook, setNewBook ] = useState([]);
  const [ currentBook, setCurrentBook ] = useState([]);
  const [ notesFromDatabase, setNotesFromDatabase ] = useState([]);
  const [ finishedBook, setFinishedBook ] = useState([]);

  //Used to GET data from database
    //List of 'new-books' in the Reading-List-Component
    //List of 'currently-reading-books' in the Book-Notes-Component
    //Notes for the books that are 'currently-reading-books' in the Book-Notes-Component.
    //Finished books that are completed reading and are in the Read-Books-Component.
  useEffect(() => {
    axios.get('/addNewBook/added')
      .then(response => {
        setNewBook(response.data)
      })
  }, []);

  useEffect(() => {
    axios.get('/addCurrentlyReading/current')
      .then(response => {
        setCurrentBook(response.data)
      })
  }, []);

  useEffect(() => {
    axios.get('/addBookNotes/notes')
      .then(response => {
        setNotesFromDatabase(response.data)
      })
  }, []);

  useEffect(() => {
    axios.get('/addFinishedReading/added')
      .then(response => {
        setFinishedBook(response.data)
      })
  }, []);

  //Code for Pusher. (For Adding New Book to Reading List)
  useEffect(() => {
    const pusher = new Pusher('d7b5fb7d55c650625560', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('newBookAdded');
    channel.bind('inserted', (newBookAdded) => {
      setNewBook([...newBook, newBookAdded])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [newBook])

  console.log(newBook)

  //Code for Pusher. (For add New Note to Book Notes Section)
  useEffect(() => {
    const pusher = new Pusher('d7b5fb7d55c650625560', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('newBookNotesAdded');
    channel.bind('inserted', (newBookNotesAdded) => {
      setNotesFromDatabase([...notesFromDatabase, newBookNotesAdded])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [notesFromDatabase])

  console.log(notesFromDatabase)


  return (
    <div className="app">
      <div className="app__body">
        <ReadingList newBook={newBook} />

        <BookNotes
          currentBook={currentBook}
          notesFromDatabase={notesFromDatabase} />

        <ReadBooks />
      </div>
    </div>
  );
}

export default App;
