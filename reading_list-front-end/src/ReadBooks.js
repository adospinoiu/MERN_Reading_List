import React from 'react';
import './ReadBooks.css';

import AlreadyReadList from './AlreadyReadList';

import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';


function ReadBooks({ finishedBook }) {
    return (
        <div className="readbooks">
            <div className="alreadyReadBooks">
                <div className="alreadyReadBooks__header">
                    <WbIncandescentIcon />

                    <p>Read Books List</p>
                </div>

                <div className="alreadyReadBooks__list">
                    <AlreadyReadList finishedBook={finishedBook} />
                </div>
            </div>
        </div>
    )
}

export default ReadBooks
