
import './App.css';

import Navbar from './Components/Navbar';

import NoteState from './context/NoteState';
import About from './Components/About';
import Home from './Components/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Editnote from './Components/Editnote';

function App() {
  return (
    <>
      <Router>
        <NoteState>
          <Navbar></Navbar>

          <Routes>


            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Editnote/:noteId" element={<Editnote/>} />




          </Routes>

        </NoteState>
      </Router>
    </>
  );
}

export default App;
