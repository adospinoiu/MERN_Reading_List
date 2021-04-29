import React from 'react';
import './ReadBooks.css';

import AlreadyReadList from './AlreadyReadList';

import WbIncandescentIcon from '@material-ui/icons/WbIncandescent';


function ReadBooks() {
    return (
        <div className="readbooks">
            <div className="futurereading__header">
                    <WbIncandescentIcon />
                    
                    <p>Read Books List</p>
                </div>

                <div className="futurereading__list">
                    <AlreadyReadList />
                    <AlreadyReadList />
                    <AlreadyReadList />
                </div>
        </div>
    )
}

export default ReadBooks
