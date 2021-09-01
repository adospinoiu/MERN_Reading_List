import axios from './axios';
import React, { useState, useEffect } from 'react';
import './App.css';

// Import Components
import BookNotes from './BookNotes';
import ReadBooks from './ReadBooks';
import ReadingList from './ReadingList';

function App() {
  const [ newBook, setNewBook ] = useState([]);
  const [ currentBook, setCurrentBook ] = useState([]);
  const [ notesFromDatabase, setNotesFromDatabase ] = useState([]);

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

  //Code for Pusher. (To display messages without having to re-load the webpage)
  useEffect(() => {
    const pusher = new Pusher('d7b5fb7d55c650625560', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };

  }, [messages])

  console.log(messages)

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
