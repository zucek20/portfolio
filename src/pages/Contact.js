import Animated from "../components/Animated";
import "../styles/Contact.scss";
import patternContact from "../img/patterns/contact.svg";
import mail from "../img/icons/mail.svg";
import phone from "../img/icons/phone.svg";
import linkedin from "../img/icons/linkedin.svg";
import { AppContext } from "../components/AppContext"
import { useContext } from "react";


export default function Contact() {
  const { isEng } = useContext(AppContext)
  return (
    <Animated>
      {isEng ?  (
        <section className="contact">
        <img src={patternContact} alt="pattern contact" className="patternContact" />

        <div className="wrap">
          <h2>Contact</h2>

          <form action="https://formspree.io/f/mpznwnla" method="POST">
            <h3>Email me!</h3>
            <label>
              Your e-mail address:
              <input type="email" name="email"/>
            </label>
            <label>
              Message:
              <textarea name="message" rows="5"></textarea>
            </label>

            <button type="submit">Submit</button>
          </form>

          <div className="contact">
            <figure>
              <img src={mail} alt="mail icon" />
              <b>E-mail:</b>
              <p>p.izdebski14@gmail.com</p>
            </figure>
            <figure>
              <img src={phone} alt="phone icon" />
              <b>Phone number:</b>
              <p>789 371 234</p>
            </figure>
            <figure>
              <img src={linkedin} alt="LinkedIn icon" />
              <a href="https://www.linkedin.com/in/pawe%C5%82-izdebski-7b3697199/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </figure>
          </div>
        </div>
      </section>
      ) : (
        <section className="contact">
        <img src={patternContact} alt="pattern contact" className="patternContact" />

        <div className="wrap">
          <h2>Kontakt</h2>

          <form action="https://formspree.io/f/mpznwnla" method="POST">
            <h3>Napisz do mnie!</h3>
            <label>
              Twój adres e-mail:
              <input type="email" name="email"/>
            </label>
            <label>
              Wiadomość:
              <textarea name="message" rows="5"></textarea>
            </label>

            <button type="submit">Wyślij</button>
          </form>

          <div className="contact">
            <figure>
              <img src={mail} alt="mail icon" />
              <b>E-mail:</b>
              <p>p.izdebski14@gmail.com</p>
            </figure>
            <figure>
              <img src={phone} alt="phone icon" />
              <b>Telefon:</b>
              <p>789 371 234</p>
            </figure>
            <figure>
              
              <a href="https://www.linkedin.com/in/pawe%C5%82-izdebski-7b3697199/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn icon" /></a>
              <a href="https://www.linkedin.com/in/pawe%C5%82-izdebski-7b3697199/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </figure>
          </div>
        </div>
      </section>
      )}
      
    </Animated>
  );
}
