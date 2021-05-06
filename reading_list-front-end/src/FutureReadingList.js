import React from 'react';
import './FutureReadingList.css';

import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';


function FutureReadingList({ newBook }) {
    return (
        <div className="futureReadingList">
            <NotListedLocationIcon />

            <div className="futureReadingList__info">
                {newBook.map((data) => (
                    <>
                        <h3>{data.title}</h3>
                        <p>{data.author}</p>
                        <p>{data.recommendedBy}</p>
                    </>
                ))}

                {/* <h3>This is the book name</h3>
                <p>This is the author</p>
                <p>This is who recommended it</p> */}
            </div>
        </div>
    )
}

export default FutureReadingList