import React from 'react';
import './ReadingList.css';

import MenuBookIcon from '@material-ui/icons/MenuBook';

function ReadingList() {
    return (
        <div className="readinglist">
            <div className="readinglist__addnewbook">
                <div className="addnewbook__header">
                    <MenuBookIcon />

                    <p>Add New Book to Reading List</p>
                </div>
            
                <div className="addnewbook__inputFields">
                    <form>
                        <input
                            // value={input}
                            placeholder="Title"
                            type="text"
                        />
                        <input 
                            // value={input}
                            placeholder="Author"
                            type="text"
                        />
                        <input
                            // value={input}
                            placeholder="Recommended by"
                            type="text"
                        />

                        <button type="submit">Add to List</button>
                    </form>
                </div>
            </div>

            <div className="readinglist__currentlyreading">

            </div>

            <div className="readinglist__futurereading">

            </div>
        </div >
    )
}

export default ReadingList
