import "../styles/NotFound.scss"
import Animated from "../components/Animated"
import { NavLink } from "react-router-dom"
import robot from "../img/icons/robot.png"

export default function NotFound() {
  return (
    <Animated>
      <section className="NotFound">
        <div>
        <img src={robot} alt="robot" />

        <h2>Błąd 404</h2>
        <p>Nie odnaleziono strony</p>

        <NavLink to="/" className="link">Strona główna</NavLink>
        </div>
      </section>

    </Animated>
  )
}