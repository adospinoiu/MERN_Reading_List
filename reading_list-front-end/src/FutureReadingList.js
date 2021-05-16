import React from 'react';
import './FutureReadingList.css';

import { IconButton } from '@material-ui/core';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';


function FutureReadingList({ newBook }) {
    const futureBook = newBook.map((data) => (
        <div 
            key={data.id} 
            className="futureReadingList"
        >
            <NotListedLocationIcon />

            <div key={data.id} className="futureReadingList__info">
                <h3>{data.title}</h3>
                <p>{data.author}</p>
                <p>{data.recommendedBy}</p>
            </div>

            <IconButton>
                <ChromeReaderModeIcon/>
            </IconButton>
        </div>
    ))

    return (
        ( futureBook )
    )
}

export default FutureReadingList