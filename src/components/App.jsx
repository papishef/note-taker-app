import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(inputText) {
    setNotes(prevValue => {
      return [...prevValue, inputText];
    });
  }

  function deleteNote(id) {
    setNotes(prevValue => {
      return prevValue.filter((note, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onButtonClick={addNote} />
      {notes.map((notes, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={notes.title}
            content={notes.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
