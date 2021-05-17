import React, { useState } from 'react';
import './FutureReadingList.css';
import axios from './axios';

import { IconButton } from '@material-ui/core';
import NotListedLocationIcon from '@material-ui/icons/NotListedLocation';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';


function FutureReadingList({ newBook }) {
    console.log('Future Reading List Comp ...', newBook);

    const [ bookId, setBookId ] = useState("");
    const [ title, setTitle ] = useState("");
    const [ author, setAuthor ] = useState("");
    const [ recommendedBy, setRecommended ] = useState("");
    const [ notes, setNotes ] = useState("");

    const Clicked = async (data) => {
        console.log('Clicked ...', data)

        setBookId(data._id);
        setTitle(data.title);
        setAuthor(data.author);
        setRecommended(data.recommendedBy);

        await axios.post('/addCurrentlyReading/new', {
            _id: bookId,
            title: title,
            author: author,
            recommendedBy: recommendedBy,
        })
    }

    const futureBook = newBook.map((data) => (
        <div 
            key={data._id} 
            className="futureReadingList"
            onClick={() => Clicked(data)}
        >
            <NotListedLocationIcon />

            <div key={data._id} className="futureReadingList__info">
                <h3>{data.title}</h3>
                <p>{data.author}</p>
                <p>{data.recommendedBy}</p>
            </div>

            <IconButton>
                <ChromeReaderModeIcon />
            </IconButton>
        </div>
    ))

    return (
        ( futureBook )
    )
}

export default FutureReadingList