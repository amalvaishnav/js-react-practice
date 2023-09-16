import { useContext, useMemo, useState } from "react";
import { notesContext } from "./App";

const NoteComponent = ({ item }) => {
  const [notes, setNotes] = useContext(notesContext);
  const [isEdit, setEdit] = useState(false);
  const [editNote, setEditNote] = useState(item.text);

  const onChange = (e) => {
    setEditNote(e.target.value);
  };
  const onEdit = () => {
    setEdit(true);
  };
  const onUpdate = async (item) => {
    await setNotes([
      ...notes.filter((elem) => elem.id !== item.id),
      { id: Math.random() * 1000, text: editNote },
    ]);
    setEdit(false);
  };

  const onDelete = (item) => {
    setNotes([...notes.filter((elem) => elem.id !== item.id)]);
  };

  return (
    <div key={item.id}>
      {!isEdit && <div onClick={() => onEdit(item)}>{editNote}</div>}
      {isEdit && (
        <textarea
          placeholder="edit the note here"
          value={editNote}
          onChange={onChange}
          onMouseOut={() => onUpdate(item)}
        />
      )}
      {!isEdit && <button onClick={() => onEdit(item)}>edit</button>}
      {isEdit && <button onClick={() => onUpdate(item)}>update</button>}
      <button onClick={() => onDelete(item)}>Delete</button>
    </div>
  );
};

export default NoteComponent;
