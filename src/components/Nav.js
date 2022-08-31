import "../styles/Nav.scss"
import logo from "../img/logo_green.svg"
import { NavLink } from "react-router-dom"

export default function Nav() {

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
        <img onClick={function() {timeoutScroll()}} src={logo} alt="logo" className="logoTop"/>
      </NavLink>

        <div className="links">
          <NavLink onClick={function() {timeoutScroll()}} className="link" to="/">O mnie</NavLink>
          <NavLink onClick={function() {timeoutScroll()}} className="link" to="/projects">Projekty</NavLink>
          <NavLink onClick={function() {timeoutScroll()}} className="link" to="/skills">Umiejętności</NavLink>
          <NavLink onClick={function() {timeoutScroll()}} className="link" to="/contact">Kontakt</NavLink>
        </div>
      </div>
    </nav>

    </>
  )
}