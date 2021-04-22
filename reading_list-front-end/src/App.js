import './App.css';
import BookNotes from './BookNotes';
import ReadBooks from './ReadBooks';
import ReadingList from './ReadingList';

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <p>Start of the APP</p>

        <ReadingList />

        <BookNotes />

        <ReadBooks />
      </div>
    </div>
  );
}

export default App;
