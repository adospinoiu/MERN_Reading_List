import React from 'react';
import './ReadBooks.css';

import FutureReadingList from './FutureReadingList';

import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';

function ReadBooks() {
    return (
        <div className="readbooks">
            <div className="futurereading__header">
                    <WbIncandescentIcon />
                    
                    <p>Read Books List</p>
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
