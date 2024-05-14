import React, { useContext } from 'react'
import NoteContext from '../context/NoteContext'
import { Link } from 'react-router-dom';

const Noteitem = (props) => {
    const{note}=props;
    const context = useContext(NoteContext);
    const{deleteNote}=context;
    const handleDelete = () => {
        deleteNote(note.id);
      };
  return (
    <div className="col-md-3">
           
            <div className="card my-3" >
                
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description}</p>
                        
                        <i className="fa fa-trash mx-2" aria-hidden="true" onClick={handleDelete}></i>
                        <Link to={`/Editnote/${note.id}`}><i className="fa fa-pencil mx-2" aria-hidden="true"></i></Link>
                        
                    </div>
            </div>
        </div>
  )
}

export default Noteitem