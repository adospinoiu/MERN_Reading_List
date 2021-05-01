import React from 'react';
import './AlreadyReadList.css';

import HighlightIcon from '@material-ui/icons/Highlight';

function AlreadyReadList() {
    return (
        <div className="alreadyReadList">
            <HighlightIcon />

            <div className="alreadyReadList__info">
                <h3>This is the book name</h3>
                <p>This is the author</p>
                <p>This is who recommended it</p>
            </div>
        </div>
    )
}

export default AlreadyReadList