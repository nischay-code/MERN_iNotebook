import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";

const Notes = () => {
  const context = useContext(noteContext);

  const { notes, getNotes } = context;
  useEffect(() => {
    getNotes();
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);

  const [note, setNote] = useState({
    editTitle: "",
    editDescription: "",
    editTag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      editTitle: currentNote.title,
      editDescription: currentNote.description,
      editTag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log("Updating", note);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />
      <button
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        ref={ref}
      >
        Modal
      </button>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Title
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form className="m-3">
                <div className="mb-3">
                  <label htmlFor="editTitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editTitle"
                    aria-describedby="emailHelp"
                    onChange={onChange}
                    name="editTitle"
                    value={note.editTitle}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="editDescription" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editDescription"
                    onChange={onChange}
                    name="editDescription"
                    value={note.editDescription}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="editTag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="editTag"
                    onChange={onChange}
                    name="editTag"
                    value={note.editTag}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                Update Note
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row m-3">
        <h2>Your Notes</h2>
        {notes &&
          notes.map((note) => {
            return (
              <Noteitem key={note._id} note={note} updateNote={updateNote} />
            );
          })}
      </div>
    </>
  );
};

export default Notes;
