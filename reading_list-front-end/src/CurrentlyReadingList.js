import React from 'react';
import './CurrentlyReadingList.css';


// Import Material-Ui Related
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CommentIcon from '@material-ui/icons/Comment';

import FactCheckIcon from '@mui/icons-material/FactCheck';

function CurrentlyReadingList({ currentBook, getBookData }) {
    const readingNowBook = currentBook.map((data) => (
        <div 
            key={data._id}
            className="currentlyReadingList"
            onClick={() => getBookData(data)}
        >
            <EmojiObjectsIcon />
            <FactCheckIcon />

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
