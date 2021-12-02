import React from 'react';
import './CurrentlyReadingList.css';


// Import Material-Ui Related
import { IconButton } from '@material-ui/core';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import axios from 'axios';


const sendFinishedReadingBook = (finishedReadingBookId, finishedReadingBookTitle, finishedReadingBookAuthor) => {
    axios.post('/addFinishedReading/new', {
        _id: finishedReadingBookId,
        title: finishedReadingBookTitle,
        author: finishedReadingBookAuthor
    })
}

// This function first RECEIVES the information from the Clicked-Icon, then assigns each piece of information a variable, and lastly SENDS the information to a new function
const Clicked = (finishedReadingBookInfo) => {
    console.log('Clicked ...', finishedReadingBookInfo);

    let finishedReadingBookId = finishedReadingBookInfo[0]._id;
    let finishedReadingBookTitle = finishedReadingBookInfo[0].title;
    let finishedReadingBookAuthor = finishedReadingBookInfo[0].author;

    sendFinishedReadingBook(finishedReadingBookId, finishedReadingBookTitle, finishedReadingBookAuthor);
}

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
                    onClick={() => Clicked([data])}
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
