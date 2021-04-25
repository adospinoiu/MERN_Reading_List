import React from 'react';
import './ReadingList.css';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import BookmarksIcon from '@material-ui/icons/Bookmarks';

function ReadingList() {
    return (
        <div className="readinglist">
            <div className="readinglist__addnewbook">
                <div className="addnewbook__header">
                    <MenuBookIcon />

                    <p>Add New Book to Reading List</p>
                </div>
            
                <div className="addnewbook__inputs">
                        <input
                            placeholder="Title"
                            type="text"
                        />

                        <input 
                            placeholder="Author"
                            type="text"
                        />

                        <input
                            placeholder="Recommended by"
                            type="text"
                        />

                        <button type="submit">Add to List</button>
                </div>
            </div>

            <div className="readinglist__currentlyreading">
                <div className="currentlyreading__header">
                    <BookmarksIcon />
                    
                    <p>Currently Reading</p>
                </div>
                
            
            
            </div>

            <div className="readinglist__futurereading">
                <p>Reading List</p>
            </div>
        </div >
    )
}

export default ReadingList
