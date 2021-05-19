import React, { useState } from 'react';
import './FutureReadingList.css';
import axios from './axios';

import { IconButton } from '@material-ui/core';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';


function FutureReadingList({ newBook }) {
    console.log('Future Reading List Passdown ...', newBook);

    let currentBookId = "";
    let currentTitle = "";
    let currentAuthor = "";
    let currentRecommendedBy = "";

    const sendCurrentlyReading = () => {

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
        console.log('ASSIGNED BookID ...', currentBookId)
            
        let currentTitle = currentBook[0].title;
        console.log('ASSIGNED Title ...', currentTitle)

        let currentAuthor = currentBook[0].author;
        console.log('ASSIGNED Author ...', currentAuthor)

        let currentRecommendedBy = currentBook[0].recommendedBy;
        console.log('ASSIGNED RecommendedBy ...', currentRecommendedBy)

        sendCurrentlyReading();
    }

    // console.log('INFO TO POST TO CURRENT READING ...', currentBookId, currentTitle, currentAuthor, currentRecommendedBy)


    
    const futureBook = newBook.map((data) => (
        <div 
            key={data._id} 
            className="futureReadingList"
            onClick={() => Clicked([data])}
        >
            <NotListedLocationIcon />

            <div key={data._id} className="futureReadingList__info">
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