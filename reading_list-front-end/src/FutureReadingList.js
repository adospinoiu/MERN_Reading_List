import React, { useState, useEffect } from 'react';
import './FutureReadingList.css';
import axios from './axios';

// Import Material-Ui Related
import { IconButton } from '@material-ui/core';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import ClearIcon from '@material-ui/icons/Clear';
import { ClassNames } from '@emotion/react';


function FutureReadingList({ newBook, searchReadingList }) {
    const [searchForBook, setSearchForBook] = useState([]);

    useEffect(() => {
        setSearchForBook(
            newBook.filter(book => {
                return book.title.toLowerCase().includes(searchReadingList.toLowerCase())
            })
        )
    }, [searchReadingList, newBook])

    const sendCurrentlyReading = (currentBookId, currentTitle, currentAuthor, currentRecommendedBy) => {
        axios.post('/addCurrentlyReading/new', {
            _id: currentBookId,
            title: currentTitle,
            author: currentAuthor,
            recommendedBy: currentRecommendedBy,
        })
    }

    const Clicked = (currentBook) => {
        console.log('Clicked ...', currentBook);

        let currentBookId = currentBook[0]._id;
        let currentTitle = currentBook[0].title;
        let currentAuthor = currentBook[0].author;
        let currentRecommendedBy = currentBook[0].recommendedBy;

        sendCurrentlyReading(currentBookId, currentTitle, currentAuthor, currentRecommendedBy);
    }

    const futureBook = searchForBook.map((data) => (
        <div
            key={data._id}
            className="futureReadingList"
        // onClick={() => Clicked([data])}
        >
            {/* <div className="lightBulbIcon"><NotListedLocationIcon /></div> */}

            <div
                key={data._id}
                className="futureReadingList__info"
            >
                <h4>{data.title}</h4>
                <p>{data.author}</p>
            </div>

            <div className="futureReadingList__iconButtons">
                <div
                    className="openBookIcon"
                    onClick={() => Clicked([data])}
                >
                    <IconButton><ChromeReaderModeIcon /></IconButton>
                </div>

                <div className="clearIcon"
                    onClick={() => 
                        console.log("Will be Deleted")
                    }
                >
                    <IconButton><ClearIcon /></IconButton>
                </div>
            </div>
        </div>
    ))

    return (
        (futureBook)
    )
}

export default FutureReadingList