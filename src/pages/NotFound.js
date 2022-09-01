import "../styles/NotFound.scss"
import Animated from "../components/Animated"
import { NavLink } from "react-router-dom"
import robot from "../img/icons/robot.png"
import { AppContext } from "../components/AppContext"
import { useContext } from "react"


export default function NotFound() {
  const { isEng } = useContext(AppContext)
  return (
    <Animated>
      <section className="NotFound">
        <div>
        <img src={robot} alt="robot" />

        <h2>{isEng ? "Error" : "Błąd 404"}</h2>
        <p>{isEng? "Page not found" : "Nie odnaleziono strony"}</p>

        <NavLink to="/" className="link">{isEng? "Home page" : "Strona główna"}</NavLink>
        </div>
      </section>

    </Animated>
  )
}