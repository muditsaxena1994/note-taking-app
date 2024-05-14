import React, { useState } from "react";
import NoteContext from "./NoteContext";
import { v4 as uuidv4 } from 'uuid';

const NoteState =(props)=>{
    const notesInitial= []
    
        
      
      const [notes, setNotes] = useState(notesInitial)
      
      const addNote = (newNote) => {
        const noteWithId = { ...newNote, id: uuidv4() };
    
        setNotes((prevNotes) => {
          const updatedNotes = [...prevNotes, noteWithId];
          localStorage.setItem('notes', JSON.stringify(updatedNotes));
          return updatedNotes;
        });
      };
    
      const deleteNote = (id) => {
        setNotes((prevNotes) => {
          const updatedNotes = prevNotes.filter((note) => note.id !== id);
          localStorage.setItem('notes', JSON.stringify(updatedNotes));
          return updatedNotes;
        });
      };
      // const editNote = (id, updatedNote) => {
      //   setNotes((prevNotes) => {
      //     const updatedNotes = prevNotes.map((note) =>
      //       note.id === id ? { ...note, ...updatedNote } : note
      //     );
      //     localStorage.setItem('notes', JSON.stringify(updatedNotes));
      //     return updatedNotes;
      //   });
      // };
      const getExistingNotes = () => {
        const existingNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(existingNotes);
      };
    return(
        <NoteContext.Provider value={{notes,setNotes,addNote,getExistingNotes,deleteNote}}>
            {props.children}

        </NoteContext.Provider>
    )

}
export default NoteState