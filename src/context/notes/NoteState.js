import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);

  // Get all Notes

  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjVhZGZjMGZhNDNkNDhkMGIyOTJmNzJkIiwiaWF0IjoxNzA1OTAzMTg2fQ.-NLbJ__ysY0Hd5NubeSOrjXMU9akZ6wMF9kOX-t_PGY",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  // Add
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjVhZGZjMGZhNDNkNDhkMGIyOTJmNzJkIiwiaWF0IjoxNzA1OTAzMTg2fQ.-NLbJ__ysY0Hd5NubeSOrjXMU9akZ6wMF9kOX-t_PGY",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();

    setNotes(notes.concat(note));
  };
  // Delete
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjVhZGZjMGZhNDNkNDhkMGIyOTJmNzJkIiwiaWF0IjoxNzA1OTAzMTg2fQ.-NLbJ__ysY0Hd5NubeSOrjXMU9akZ6wMF9kOX-t_PGY",
      },
    });
    const json = response.json();

    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  // Edit
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjVhZGZjMGZhNDNkNDhkMGIyOTJmNzJkIiwiaWF0IjoxNzA1OTAzMTg2fQ.-NLbJ__ysY0Hd5NubeSOrjXMU9akZ6wMF9kOX-t_PGY",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes));

    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };
  return (
    <noteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
