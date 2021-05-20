import React from 'react';
import './FutureReadingList.css';
import axios from './axios';

import { IconButton } from '@material-ui/core';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';


function FutureReadingList({ newBook }) {
    console.log('Future Reading List Passdown ...', newBook);

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
        
        console.log('ASSIGNED BookID ...', currentBookId);
        console.log('ASSIGNED Title ...', currentTitle);
        console.log('ASSIGNED Author ...', currentAuthor);
        console.log('ASSIGNED RecommendedBy ...', currentRecommendedBy);

        sendCurrentlyReading(currentBookId, currentTitle, currentAuthor, currentRecommendedBy);
    }
    
    const futureBook = newBook.map((data) => (
        <div 
            key={data._id} 
            className="futureReadingList"
            onClick={() => Clicked([data])}
        >
            <NotListedLocationIcon />

            <div 
                key={data._id}             
                className="futureReadingList__info"
            >
                <h3>{data.title}</h3>
                <p>{data.author}</p>
                <p>{data.recommendedBy}</p>
            </div>

            <IconButton>
                <ChromeReaderModeIcon />
            </IconButton>
        </div>
    ))

    return (
        ( futureBook )
    )
}

export default FutureReadingList