import React from 'react';
import './AlreadyReadList.css';

import HighlightIcon from '@material-ui/icons/Highlight';

function AlreadyReadList({ finishedBook }) {
    const finishedReadingBook = finishedBook.map((data) => (
        <div
            key={data._id} 
            className="alreadyReadList"
        >

            <div
                key={data._id} 
                className="alreadyReadList__info"
            >
                <h3>{data.title}</h3>
                <p>{data.author}</p>
            </div>

            <HighlightIcon />
        </div>
    ))


    return (
        (finishedReadingBook)
    )
}

export default AlreadyReadList
