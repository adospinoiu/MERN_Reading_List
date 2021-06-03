import React, { useState } from 'react';
import ReadingNotes from './ReadingNotes';
import axios from './axios';
import './BookNotes.css';

// Import Sub-Components
import CurrentlyReadingList from './CurrentlyReadingList';

// Import Material-Ui Related
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import CommentIcon from '@material-ui/icons/Comment';
import BookmarksIcon from '@material-ui/icons/Bookmarks';



function BookNotes({ currentBook, notesFromDatabase }) {
    const [ getCurrentlyReadingData, setCurrentlyReadingData ] = useState("");
    const [ notes, setNotes ] = useState("");
  
    console.log('GET-Call ... NOTES from DATABASE...', notesFromDatabase);

    const sendNotes = async (e) => {
        e.preventDefault(); 

        console.log(notes);

        await axios.post('/addBookNotes/new', {
            title: getCurrentlyReadingData.title,
            notes: notes,
        })

        setNotes('');
    }

    let notesToDisplay = [];

    for (let i = 0; i < notesFromDatabase.length; i++) {
        if (getCurrentlyReadingData.title == notesFromDatabase[i].title) {
            notesToDisplay.push(notesFromDatabase[i].notes)
        }
    }

    console.log(notesToDisplay)

    return (
        <div className="booknotes">
            <div className="readinglist__currentlyreading">
                <div className="currentlyreading__header">
                    <BookmarksIcon />
                    
                    <p>Currently Reading</p>
                </div>

                <div className="currentlyreading__list">
                    <CurrentlyReadingList 
                        currentBook={currentBook}
                        getBookData={getCurrentlyReadingData => setCurrentlyReadingData(getCurrentlyReadingData)} />
                </div>
            </div>

            <div className="booknotes__header">
                <SpeakerNotesIcon />

                <div className="booknotes__headerInfo">
                    <h3>{getCurrentlyReadingData.title}</h3>
                    {/* <p>Last comment added on</p> */}
                </div>
            </div>
            
            <div className="booknotes__body">
                <ReadingNotes
                    notesToDisplay={notesToDisplay}/>
            </div>

            <div className="booknotes__footer">
                <CommentIcon />

                <form>
                    <input
                        value= {notes}
                        placeholder="Notes to save" 
                        type="text"
                        onChange={e => setNotes(e.target.value)}
                    />

                    <button onClick={sendNotes} type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default BookNotes
