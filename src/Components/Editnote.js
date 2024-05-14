import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Editnote = () => {
  const { noteId } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  

  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      const parsedNotes = JSON.parse(storedNotes);
      const note = parsedNotes.find((note) => note.id === noteId);
      if (note) {
        setTitle(note.title);
        setDescription(note.description);
      }
    }
  }, [noteId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || description.trim() === '') {
      alert('Please enter a title and description');
      return;
    }
  
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      const parsedNotes = JSON.parse(storedNotes);
      const updatedNotes = parsedNotes.map((note) => {
        if (note.id === noteId) {
          return {
            id: note.id,
            title,
            description,
          };
        }
        return note;
      });
      localStorage.setItem('notes', JSON.stringify(updatedNotes));
    }
  
    navigate('/');
  };
  

  return (
    <div className='container  ' style={{ marginTop: '100px' }}>
      <h1>Edit Note</h1>
      <form style={{boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)', borderRadius: '10px' }} onSubmit={handleSubmit}>
        <div className='mx-3 my-3'>
          <label htmlFor='title' className='form-label my-3'>
            Title
          </label>
          <input
            type='text'
            className='form-control'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className=' mx-3 my-3'>
          <label htmlFor='description' className='form-label my-3'>
            Description
          </label>
          <input
            type='text'
            className='form-control'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-primary my-5 mx-3'>
          Update Note
        </button>
      </form>
    </div>
  );
};

export default Editnote;
