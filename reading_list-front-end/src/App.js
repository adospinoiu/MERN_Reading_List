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

  console.log('GET API FUTURE-READING-LIST-SUB...', newBook);
  console.log('GET API CURRENTLY-READING-SUB...', currentBook);

  return (
    <div className="app">
      <div className="app__body">
        <ReadingList newBook={newBook} currentBook={currentBook}/>

        <BookNotes />

        <ReadBooks />
      </div>
    </div>
  );
}

export default App;
