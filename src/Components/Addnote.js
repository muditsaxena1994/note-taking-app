import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext'




const Addnote = () => {
    const context = useContext(NoteContext)
    const { notes, addNote } = context;
    const handleSubmit = (e) => {
        e.preventDefault();

        // form input values
        const title = e.target.elements.title.value;
        const description = e.target.elements.description.value;
        

        const isTitleExists = notes.some((note) => note.title === title);
        if (isTitleExists) {
            alert('A note with the same title already exists');
            return;
        }
        const isTitleShort = title.length < 10;

        // title is short,description is mandatory
        if (isTitleShort && !description) {
          alert('Please enter a description');
          return;
        }

       
        const newNote = {
            title,
            description,
            
        };
        
        addNote(newNote);
        console.log(newNote);

        
        e.target.reset();
    };


    return (
        <div className='container'  style={{  marginTop: '90px'}} >
            <h1 >Add New Note</h1>
            <form className='mb-3 my-3'style={{boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)', borderRadius: '10px' }} onSubmit={handleSubmit}>
                <div className=" mx-3 my-3">
                    <label htmlFor="title" className="form-label my-3">Title</label>
                    <input type="text" name='title' className="form-control" />
                    <div id="emailHelp" className="form-text"></div>
                </div>
                <div className="my-3 mx-3">
                    <label htmlFor="description" className="form-label">Description</label>
                    <input type="text" name='description' className="form-control" />
                </div>
               

                <button type="submit" className="btn btn-primary mx-3 my-3">Add Note</button>
            </form>
        </div>
    )
}

export default Addnote