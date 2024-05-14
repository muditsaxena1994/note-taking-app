import React, { useContext } from 'react'
import Noteitem from './Noteitem';
import NoteContext from '../context/NoteContext'
import { useEffect } from 'react';
import Addnote from './Addnote';


const Notes = () => {
  const context = useContext(NoteContext)
  const { notes, getExistingNotes } = context;
  useEffect(() => {
   
    getExistingNotes();
  }, []);

  return (
    <><Addnote></Addnote>
    <div className=' container my-5 '>
      <h1>Your Notes</h1>

      <div className='row my-3'>
        {notes.map((note) => {
          return <Noteitem key={note.id} note={note}></Noteitem>;
        })}</div></div>
        </>
  )
}

export default Notes