import React, { useState } from 'react';
import './BookNotes.css';

// Import Sub-Components
import CurrentlyReadingList from './CurrentlyReadingList';

// Import Material-Ui Related
import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import CommentIcon from '@material-ui/icons/Comment';
import BookmarksIcon from '@material-ui/icons/Bookmarks';


function BookNotes({ currentBook }) {
    console.log('Currently Reading List Passdown ...', currentBook);

    const [ getCurrentlyReadingData, setCurrentlyReadingData ] = useState('');
    console.log('Data FROM Currently Reading Click ...', getCurrentlyReadingData)

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
                    <h3>Title of the Book</h3>
                    <p>Last comment added on</p>
                </div>
            </div>

            <div className="booknotes__body">
                <p className="notes__message">
                    <span className="notes__name">Alex</span>
                    This is a test message
                    <span className="notes__timestamp">{new Date().toUTCString()}</span>
                </p>
            </div>

            <div className="booknotes__footer">
                <CommentIcon />

                <form>
                    <input placeholder="Notes to save" type="text"></input>

                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}

export default BookNotes
