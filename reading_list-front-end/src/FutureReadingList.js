import React from 'react';
import './FutureReadingList.css';

import AlreadyReadList from './AlreadyReadList';

import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';


function FutureReadingList() {
    return (
        <div className="futureReadingList">
            <NotListedLocationIcon />

            <div className="futureReadingList__info">
                <h3>This is the book name</h3>
                <p>This is the author</p>
                <p>This is who recommended it</p>
            </div>
        </div>
    )
}

export default FutureReadingList