import React from 'react';
import './FutureReadingList.css';

import { IconButton } from '@material-ui/core';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';


function FutureReadingList({ newBook }) {
    const startRead = () => {
        console.log('Added to Currently Reading');
    }

    const futureBook = newBook.map((data) => (
        <div className="futureReadingList">
            <NotListedLocationIcon />

            <div className="futureReadingList__info">
                <h3>{data.title}</h3>
                <p>{data.author}</p>
                <p>{data.recommendedBy}</p>
            </div>

            <IconButton>
                <ChromeReaderModeIcon onClick={startRead}/>
            </IconButton>
        </div>
    ))

    return (
        ( futureBook )
    )
}

export default FutureReadingList