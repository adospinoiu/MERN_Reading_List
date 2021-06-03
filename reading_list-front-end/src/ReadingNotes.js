import React from 'react';

function ReadingNotes({ getCurrentlyReadingData, notesFromDatabase }) {
    console.log('CLICKED Book Title ...', getCurrentlyReadingData.title);
    console.log('NOTES from database ...', notesFromDatabase);

    const readingNotes = notesFromDatabase.map((notes) => (
        <p className="notes__message">
            <span className="notes__name">Alex</span>
                {notes.notes}
            <span className="notes__timestamp">{new Date().toUTCString()}</span>
        </p>
    ))
    
    return (
        ( readingNotes )
    )
}

export default ReadingNotes
