import React from 'react';
import './ReadBooks.css';

import AlreadyReadList from './AlreadyReadList';

import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';


function ReadBooks() {
    return (
        <div className="readbooks">
            <div className="readbooks__header">
                <div className="readbooks__headerInfo">
                    <WbIncandescentIcon />

                    <p>Read Books List</p>
                </div>               
            </div>

            <div className="readbooks__list">
                <AlreadyReadList />
                <AlreadyReadList />
                <AlreadyReadList />
            </div>
        </div>
    )
}

export default ReadBooks
