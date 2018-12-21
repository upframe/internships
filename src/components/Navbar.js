function hamburgerClick() {
  let navbar = document.querySelector('nav'),
    hamburger = document.querySelector('.hamburger'),
    calltoaction = document.querySelector('#calltoaction');

  if(hamburger.classList.contains('open')) {
    // close hamburger
    hamburger.classList.remove('open')
    // start menu close animation
    navbar.classList.add('menu-close')
    // show call to action
    if(calltoaction) calltoaction.classList.remove('hide');

    // remove classes after animations are done
    setTimeout(() => {
      navbar.classList.remove('menu-open')
      navbar.classList.remove('menu-close')
    }, 500);
  }
  else {
    // open hamburger
    hamburger.classList.add('open')
    // start menu open animation
    navbar.classList.add('menu-open')
    // hide call to action
    if(calltoaction) calltoaction.classList.add('hide')
  }
}

function Navbar(props) {  
  return (
    <nav>
      <div className="wrapper">
        <a href="/" className="logo">
          <img src="/logo.svg" alt="Upframe"></img>
        </a>

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