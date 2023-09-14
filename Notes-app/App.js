import NotesDisplayContainer from "./NotesDisplayContainer";
import "./styles.css";
import { createContext, useState } from "react";

export const notesContext = createContext([]);

export default function App() {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);

  const onChange = (e) => {
    setNote(e.target.value);
  };

  const onClick = () => {
    setNotes([...notes, { id: Math.random() * 1000, text: note }]);
    setNote("");
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
      <button onClick={onClick}>Add</button>
      <br />
      <br />
      <br />

      <notesContext.Provider value={[notes, setNotes]}>
        <NotesDisplayContainer notes={notes} />
      </notesContext.Provider>
    </div>
  );
}