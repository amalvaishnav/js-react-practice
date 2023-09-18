import NoteComponent from "./NoteComponent";

const NotesDisplayContainer = ({
  notes,
  isVisible,
  setVisible,
  onToggle,
  children,
}) => {
  return (
    <>
      {children}
      <button onClick={onToggle}>
        Toggle the below element(seperate excercise than notes)
      </button>
      <div className="notesDisplayContainer">
        {notes.map((item) => {
          return <NoteComponent item={item} />;
        })}
      </div>
    </>
  );
};

export default NotesDisplayContainer;
