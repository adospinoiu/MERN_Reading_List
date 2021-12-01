import React from 'react';
import './CurrentlyReadingList.css';


// Import Material-Ui Related
import { IconButton } from '@material-ui/core';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import FactCheckIcon from '@mui/icons-material/FactCheck';

function CurrentlyReadingList({ currentBook, getBookData }) {
    const readingNowBook = currentBook.map((data) => (
        <div
            key={data._id}
            className="currentlyReadingList"
            // onClick={() => getBookData(data)}
        >

            <div
                key={data._id}
                className="currentlyReadingList__info"
            >
                <h4>{data.title}</h4>
                <p>{data.author}</p>

            </div>

            <div className="currentlyReadingList__iconButtons">
                <div className="emojiObjectIcon"
                    onClick={() => getBookData(data)}
                >
                    <IconButton><EmojiObjectsIcon /></IconButton>
                </div>

                <div className="factCheckIcon"
                    onClick={() =>
                        console.log("Reading Complete. Move to Completed")
                    }
                >
                    <IconButton><FactCheckIcon /></IconButton>
                </div>
            </div>
        </div>
    ))

    return (
        (readingNowBook)
    )
}

export default CurrentlyReadingList
