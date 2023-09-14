import NoteComponent from "./NoteComponent";

const NotesDisplayContainer = ({ notes }) => {
  return (
    <div className="notesDisplayContainer">
      {notes.map((item) => {
        return <NoteComponent item={item} />;
      })}
    </div>
  );
};

export default NotesDisplayContainer;
