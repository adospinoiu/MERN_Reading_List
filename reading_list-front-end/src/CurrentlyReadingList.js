import React from 'react';
import './CurrentlyReadingList.css';

import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

function CurrentlyReadingList({ currentBook }) {
    console.log('Currently Reading List Passdown ...', currentBook);

    const readingNowBook = currentBook.map((data) => (
        <div 
            key={data._id}
            className="currentlyReadingList"
        >
            <EmojiObjectsIcon />

            <div
                key={data._id}
                className="currentlyReadingList__info"
            >
                <h3>{data.title}</h3>
                <p>{data.author}</p>
            </div>
        </div>
    )) 
    
    return (
        ( readingNowBook )
    )
}

export default CurrentlyReadingList
