import React, { useState } from 'react';
import axios from './axios';
import './ReadingList.css';

// Import Sub-Components
import FutureReadingList from './FutureReadingList';

// Import Material-Ui Related
import MenuBookIcon from '@material-ui/icons/MenuBook';
import ViewListIcon from '@material-ui/icons/ViewList';



function ReadingList({ newBook }) {
    // console.log(newBook[0]._id);

    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    const [ recommended, setRecommended ] = useState("");
    const [ searchReadingList, setSearchReadingList ] = useState("");

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

            <div className="readinglist__futurereading">
                <div className="futurereading__header">
                    <ViewListIcon />
                    
                    <p>Reading List</p>

                    <input 
                        type="text" 
                        placeholder="Search"
                        onChange={e => setSearchReadingList(e.target.value)} 
                    />
                </div>

                <div className="futurereading__list">
                    {/* <input 
                        type="text" 
                        placeholder="Search"
                        onChange={e => setSearchReadingList(e.target.value)} 
                    /> */}
                    
                    <FutureReadingList newBook={newBook} searchReadingList={searchReadingList} />
                </div>
            </div>
        </div>
    )
}

export default ReadingList
