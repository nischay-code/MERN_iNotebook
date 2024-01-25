import React, { useContext, useEffect } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <>
      <AddNote />
      <div className="row m-3">
        <h2>Your Notes</h2>
        {notes &&
          notes.map((note) => {
            return <Noteitem key={note._id} note={note} />;
          })}
      </div>
    </>
  );
};

export default Notes;
