import React from 'react';
import './BookNotes.css';

import SpeakerNotesIcon from '@material-ui/icons/SpeakerNotes';
import CommentIcon from '@material-ui/icons/Comment';

function BookNotes() {
    return (
        <div className="booknotes">
            <p>Book Notes Component</p>
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
