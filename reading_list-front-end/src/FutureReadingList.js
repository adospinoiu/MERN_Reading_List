import React from 'react';
import './FutureReadingList.css';

import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';


function FutureReadingList({ newBook }) {
    const futureBook = newBook.map((data) => (
        <div className="futureReadingList">
            <NotListedLocationIcon />

            <div className="futureReadingList__info">
                <h3>{data.title}</h3>
                <p>{data.author}</p>
                <p>{data.recommendedBy}</p>
            </div>
        </div>
    ))

    return (
        ( futureBook )
    )
}

export default FutureReadingList