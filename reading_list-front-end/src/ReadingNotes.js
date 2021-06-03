import React from 'react';

function ReadingNotes({ notesToDisplay }) {
    console.log('NOTES from database ...', notesToDisplay);

    const readingNotes = notesToDisplay.map((notes) => (
        <p className="notes__message">
            <span className="notes__name">Alex</span>
            {notes}
            <span className="notes__timestamp">{new Date().toUTCString()}</span>
        </p>
    ))

    return (
        (readingNotes)
    )
}

export default ReadingNotes
