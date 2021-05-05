import axios from './axios';
import React, { useState, useEffect } from 'react';
import './App.css';

// Import Components
import BookNotes from './BookNotes';
import ReadBooks from './ReadBooks';
import ReadingList from './ReadingList';

function App() {
  const [ newBook, setNewBook ] = useState([]);

  useEffect(() => {
    axios.get('/addNewBook/added')
      .then(response => {
        setNewBook(response.data)
      })
  }, [])

  console.log(newBook);

  return (
    <div className="app">
      <div className="app__body">
        <ReadingList />

        <BookNotes />

        <ReadBooks />
      </div>
    </div>
  );
}

export default App;
