import React from 'react';
import './FutureReadingList.css';

import AlreadyReadList from './AlreadyReadList';

import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';


function FutureReadingList() {
    return (
        <div className="futureReadingList">
            <NotListedLocationIcon />

            <div className="futureReadingList__info">
                <AlreadyReadList />
            </div>
        </div>
    )
}

export default FutureReadingList