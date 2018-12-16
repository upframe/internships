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
    setTimeout(() =>{
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

function navbarScroll() {
  document.addEventListener('scroll', (ev) => {
    let nav = document.querySelector('nav')
    if(window.scrollY && !nav.classList.contains('active')) {
      nav.classList.add('active')
    } else if(!window.scrollY && nav.classList.contains('active')) {
      nav.classList.remove('active')
    }
  })
}

function Navbar(props) {
  navbarScroll()
  
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
          <a href="/"><li>Internships</li></a>
          <a href="."><li>Contact</li></a>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;