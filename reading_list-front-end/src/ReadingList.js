import React from 'react';
import './ReadingList.css';

import MenuBookIcon from '@material-ui/icons/MenuBook';

function ReadingList() {
    return (
        <div className="readinglist">
            <div className="readinglist__header">
                <MenuBookIcon />
                <p>Add New Book to Reading List</p>
            </div>

            <div className="readinglist__addnewbook">

            </div>

            <div className="readinglist__currentlyreading">

            </div>

            <div className="readinglist__futurereading">

            </div>
        </div>
    )
}

export default ReadingList
