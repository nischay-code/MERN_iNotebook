import noteContext from "./noteContext";
import { useState } from "react";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "65afb0933c0416gha5d1b883ed",
      user: "65adfc0fa43d48d0b292f72d",
      title: "byebye",
      description: "heybye",
      tag: "tata",
      date: "2024-01-23T12:26:59.428Z",
      __v: 0,
    },
    {
      _id: "65afb167140gk2e46449b71df8",
      user: "65adfc0fa43d48d0b292f72d",
      title: "tatatata",
      description: "tatatata",
      tag: "tatatata",
      date: "2024-01-23T12:30:31.030Z",
      __v: 0,
    },
    {
      _id: "65afb1671402e46449bjk71df8",
      user: "65adfc0fa43d48d0b292f72d",
      title: "tatatata",
      description: "tatatata",
      tag: "tatatata",
      date: "2024-01-23T12:30:31.030Z",
      __v: 0,
    },
    {
      _id: "65afb1671402e46jk449b71df8",
      user: "65adfc0fa43d48d0b292f72d",
      title: "tatatata",
      description: "tatatata",
      tag: "tatatata",
      date: "2024-01-23T12:30:31.030Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Add
  const addNote = (title, description, tag) => {
    const note = {
      _id: "65afb167140asd2e46449jlb71df8",
      user: "65adfc0fa43d48d0b292f72d",
      title: title,
      description: description,
      tag: tag,
      date: "2024-01-23T12:30:31.030Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };
  // Delete
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };
  // Edit
  const editNote = (id,title, description, tag) => {};
  return (
    <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </noteContext.Provider>
  );
};

export default NoteState;
