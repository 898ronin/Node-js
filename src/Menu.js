import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/registro">Registro</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/acerca">Acerca</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;
