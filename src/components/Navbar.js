import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav>
      <div className="wrapper">
        <Link to="/" className="logo">
          <img src="/media/logo.svg" alt="Upframe"></img>
        </Link>
        <ul>
          <li>
            Internships
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;