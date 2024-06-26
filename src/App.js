import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Inicio from './Inicio';
import Registro from './Registro';
import Acerca from './Acerca';


const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/acerca" element={<Acerca />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

