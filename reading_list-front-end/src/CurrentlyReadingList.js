import React from 'react';
import './CurrentlyReadingList.css';


// Import Material-Ui Related
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import CommentIcon from '@material-ui/icons/Comment';

function CurrentlyReadingList( { currentBook }) {
    console.log('Currently Reading List Passdown ...', currentBook);

    const Clicked = (currentBook) => {
        console.log('Clicked ...', currentBook);

        // let currentBookId = currentBook[0]._id;
        // let currentTitle = currentBook[0].title;
        // let currentAuthor = currentBook[0].author;
        // let currentRecommendedBy = currentBook[0].recommendedBy;
        
        // console.log('ASSIGNED BookID ...', currentBookId);
        // console.log('ASSIGNED Title ...', currentTitle);
        // console.log('ASSIGNED Author ...', currentAuthor);
        // console.log('ASSIGNED RecommendedBy ...', currentRecommendedBy);

        // sendCurrentlyReading(currentBookId, currentTitle, currentAuthor, currentRecommendedBy);
    }

    const readingNowBook = currentBook.map((data) => (
        <div 
            key={data._id}
            className="currentlyReadingList"
            onClick={() => Clicked([data])}
        >
            <EmojiObjectsIcon />

            <div
                key={data._id}
                className="currentlyReadingList__info"
            >
                <h3>{data.title}</h3>
                <p>{data.author}</p>
            </div>
        </div>
    ))

    const inputField = () => (
        <div className="booknotes__footer">
                <CommentIcon />

                <form>
                    <input placeholder="Notes to save" type="text"></input>

                    <button type="submit">Save</button>
                </form>
            </div>
    )

    return (
        ( readingNowBook, 
          inputField )
    )
}

export default CurrentlyReadingList
