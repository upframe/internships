import React from 'react';
import { Link } from 'react-router-dom';

function hamburgerClick() {
  let navbar = document.querySelector('nav'),
    hamburger = document.querySelector('.hamburger')

  if(hamburger.classList.contains('open')) {
    // close hamburger
    hamburger.classList.remove('open')

    // start close animation
    navbar.classList.add('menu-close')

    // remove classes after animations are done
    setTimeout(() => {
      navbar.classList.remove('menu-open')
      navbar.classList.remove('menu-close')
    }, 500);
  }
  else {
    // open hamburger
    hamburger.classList.add('open')

    // open menu
    navbar.classList.add('menu-open')
  }
}

function Navbar(props) {  
  return (
    <nav>
      <div className="wrapper">
        <Link to="/" className="logo">
          <img src="/media/logo.svg" alt="Upframe"></img>
        </Link>

        <div className="hamburger" onClick={hamburgerClick}>
        </div>

        <ul>
          <a href="."><li>People</li></a>
          <a href="/"><li className="active">Internships</li></a>
          <a href="."><li>Contact</li></a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;