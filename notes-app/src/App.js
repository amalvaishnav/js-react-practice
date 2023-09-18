import NotesDisplayContainer from "./NotesContainer";
import "./App.css";
import { createContext, useState } from "react";

export const notesContext = createContext([]);

export default function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const [isVisible, setVisible] = useState(true);

  const onChange = (e) => {
    setNote(e.target.value);
  };

  const onClick = () => {
    setNotes([...notes, { id: Math.random() * 1000, text: note }]);
    setNote("");
  };

  const onToggle = () => {
    setVisible(!isVisible);
  };
  console.log("notes-", notes);
  return (
    <div className="App">
      <h1>Notes App</h1>
      <textarea
        type="textarea"
        placeholder="add note"
        value={note}
        onChange={onChange}
      ></textarea>
      <button onClick={onClick} disabled={note === ""}>
        Add
      </button>
      <br />
      <br />
      <br />
      {note}
      <notesContext.Provider value={[notes, setNotes]}>
        <NotesDisplayContainer
          notes={notes}
          isVisible={isVisible}
          setVisible={setVisible}
          onToggle={onToggle}
        >
          <p>I am child</p>
        </NotesDisplayContainer>
      </notesContext.Provider>

      <br />
      {isVisible && <h1>TooDaLooo</h1>}
    </div>
  );
}
