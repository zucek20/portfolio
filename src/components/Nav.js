import "../styles/Nav.scss"
import logo from "../img/logo_green.svg"
import { NavLink } from "react-router-dom"
import { useState } from "react"
import burger from "../img/icons/burger.svg"
import times from "../img/icons/times.svg"

export default function Nav() {
  const [active, setActive] = useState(false)


  function timeoutScroll() {
    setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 300)
  }
  

  return (
    <>
    <nav className="topNav">
      <div className="navWrap">

        <NavLink to="/">
          <img onClick={function() {timeoutScroll()}} src={logo} alt="logo"   className="logoTop"/>
        </NavLink>

        <div className="links">
          <NavLink onClick={function() {timeoutScroll()}} className="link" to="/">O mnie</NavLink>
          <NavLink onClick={function() {timeoutScroll()}} className="link" to="/projects">Projekty</NavLink>
          <NavLink onClick={function() {timeoutScroll()}} className="link" to="/skills">Umiejętności</NavLink>
          <NavLink onClick={function() {timeoutScroll()}} className="link" to="/contact">Kontakt</NavLink>
        </div>

        {active && 
        <img src={times} alt="times" className="times" onClick={() => setActive(!active)}/>
        }
        {!active && 
        <img src={burger} alt="burger menu" className="burger" onClick={() => setActive(!active)}/>
        
        }
      </div>
    </nav>
    <div className={active.toString()} id="menu">
        <NavLink onClick={() => {setActive(!active); timeoutScroll()}} className="link" to="/">O mnie</NavLink>
        <NavLink onClick={() => {setActive(!active); timeoutScroll()}} className="link" to="projects">Projekty</NavLink>
        <NavLink onClick={() => {setActive(!active); timeoutScroll()}} className="link" to="skills">Umiejętności</NavLink>
        <NavLink onClick={() => {setActive(!active); timeoutScroll()}} className="link" to="contact">Kontakt</NavLink>
    </div>

    </>
  )
}