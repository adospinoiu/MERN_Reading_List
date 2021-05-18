import React, { useState } from 'react';
import './FutureReadingList.css';
import axios from './axios';

import { IconButton } from '@material-ui/core';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';


function FutureReadingList({ newBook }) {
    console.log('Future Reading List Passdown ...', newBook);

    const [ currentBookId, setCurrentBookId ] = useState("");
    const [ currentTitle, setCurrentTitle ] = useState("");
    const [ currentAuthor, setCurrentAuthor ] = useState("");
    const [ currentRecommendedBy, setCurrentRecommended ] = useState("");

    const Clicked = (currentBook) => {
        console.log('Clicked ...', currentBook);

        setCurrentBookId(currentBook[0]._id);
        setCurrentTitle(currentBook[0].title);
        setCurrentAuthor(currentBook[0].author);
        setCurrentRecommended(currentBook[0].recommendedBy);
    }

    console.log('INFO TO POST TO CURRENT READING ...', currentBookId, currentTitle, currentAuthor, currentRecommendedBy)

    const sendCurrentlyReading = async (e) => {
        e.preventDefault();

        await axios.post('/addCurrentlyReading/new', {
            _id: currentBookId,
            title: currentTitle,
            author: currentAuthor,
            recommendedBy: currentRecommendedBy,
        })

        setCurrentBookId('');
        setCurrentTitle('');
        setCurrentAuthor('');
        setCurrentRecommended('');
    }
        
        // console.log('POST API TO CURRENT READING ...', currentBookId, currentTitle, currentAuthor, currentRecommendedBy)
    

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