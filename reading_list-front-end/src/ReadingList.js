import React, { useState } from 'react';
import './ReadingList.css';

import CurrentlyReadingList from './CurrentlyReadingList';
import FutureReadingList from './FutureReadingList';

import MenuBookIcon from '@material-ui/icons/MenuBook';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import ViewListIcon from '@material-ui/icons/ViewList';
import axios from 'axios';



function ReadingList() {
    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    const [ recommended, setRecommended ] = useState("");

    const sendNewBook = async (e) => {
        e.preventDefault();

        await axios.post('/addNewBook/new', {
            title: title,
            author: author,
            recommendedBy: recommended,
        })

        setTitle('');
        setAuthor('');
        setRecommended('');
    }

    return (
        <div className="readinglist">
            <div className="readinglist__addnewbook">
                <div className="addnewbook__header">
                    <MenuBookIcon />

                    <p>Add New Book to Reading List</p>
                </div>
            
                <div className="addnewbook__inputs">
                        <input
                            value={title}
                            placeholder="Title"
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                        />

                        <input
                            value={author} 
                            placeholder="Author"
                            type="text"
                            onChange={e => setAuthor(e.target.value)}
                        />

                        <input
                            value= {recommended}
                            placeholder="Recommended by"
                            type="text"
                            onChange={e => setRecommended(e.target.value)}
                        />

                        <button onClick={sendNewBook} type="submit">Add to List</button>
                </div>
            </div>

            <div className="readinglist__currentlyreading">
                <div className="currentlyreading__header">
                    <BookmarksIcon />
                    
                    <p>Currently Reading</p>
                </div>

                <div className="currentlyreading__list">
                    <CurrentlyReadingList />
                    <CurrentlyReadingList />
                    <CurrentlyReadingList />
                </div>
                
            
            </div>

            <div className="readinglist__futurereading">
                <div className="futurereading__header">
                    <ViewListIcon />
                    
                    <p>Reading List</p>
                </div>

                <div className="futurereading__list">
                    <FutureReadingList />
                    <FutureReadingList />
                    <FutureReadingList />
                </div>
            </div>
        </div >
    )
}

export default ReadingList
