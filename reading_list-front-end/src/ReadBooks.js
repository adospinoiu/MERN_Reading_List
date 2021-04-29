import React from 'react';
import './ReadBooks.css';

import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

function ReadBooks() {
    return (
        <div className="readbooks">
            <p>Read Books Component</p>
            <div className="futurereading__header">
                    <WbIncandescentIcon />
                    
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
