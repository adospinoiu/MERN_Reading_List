import React from 'react';
import './CurrentlyReadingList.css';

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

function CurrentlyReadingList() {
    return (
        <div className="currentlyReadingList">
            <EmojiObjectsIcon />

            <div className="currentlyReadingList__info">
                <h3>This is the book name</h3>
                <p>This is who recommended it</p>
            </div>
        </div>
    )
}

export default CurrentlyReadingList