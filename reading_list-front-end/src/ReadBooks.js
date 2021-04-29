import React from 'react';
import './ReadBooks.css'

function ReadBooks() {
    return (
        <div className="readbooks">
            <p>Read Books Component</p>
            <div className="futurereading__header">
                    <ViewListIcon />
                    
                    <p>Reading List</p>
                </div>

                <div className="futurereading__list">
                    <FutureReadingList />
                    <FutureReadingList />
                    <FutureReadingList />
                </div>
        </div>
    )
}

export default ReadBooks
