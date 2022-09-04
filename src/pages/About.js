import Animated from "../components/Animated";
import "../styles/About.scss";
import prof from "../img/prof.jpg";
import desk from "../img/desk.png"
import { AppContext } from "../components/AppContext"
import { useContext } from "react";
import { NavLink } from "react-router-dom";


export default function About() {
  const { isEng } = useContext(AppContext)

  const downloadFile = () => {
    fetch("CV_Paweł_Izdebski.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "CV Paweł Izdebski.pdf";
        alink.click();
      });
    });
  };

  const downloadFileEng = () => {
    fetch("CV_Pawel_Izdebski_ENG.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume Paweł Izdebski.pdf";
        alink.click();
      });
    });
  };

  function timeoutScroll() {
    setTimeout(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }, 300)
  }

  return (
    <Animated>
      <section className="about">
        
        <header>
          <img src={prof} alt="profile img" />
          <div className="heading">
            <h1>{isEng ? "Hi!" : "Cześć!"}</h1>
            <p>{isEng ? "I am Paweł Izdebski" : "Jestem Paweł Izdebski"}
               <br />
              Front-end developer {isEng ? "and" : "i"} UX/UI designer
            </p>
            {isEng ? (
              <button onClick={downloadFileEng}>Download resume</button>

            ): (
              <button onClick={downloadFile}>Pobierz CV</button>

            )
            }
          

            <a href="https://github.com/zucek20" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </header>

        <div className="wrap">
          <h2>{isEng ? "About me" : "Kilka słów o mnie"}</h2>
          <article>
            <p>
              {isEng ? "I am a beginner React front-end developer who also develops in graphic design of user interfaces and creating 2D graphics." : "Jestem początkującym front-end React developerem, który rozwija się także w projektowaniu graficznym interfejsów użytkownika i tworzeniu grafik 2D."}
              
              <br/><br/>
              {isEng ? "I create my own designs in Figma and the Affinity set, and then transfer them to code. Solving problems in programming gives me incomparable satisfaction every time." : "Tworze swoje własne projekty w Figmie i zestawie Affinity, by potem je przenieść na kod. Rozwiązywanie problemów w programowaniu daje mi nieporównywalną satysfakcję za każdym razem."} 
              
            </p>
            <img src={desk} alt="desk" />
          </article>
          <NavLink to="contact" className="contact" onClick={timeoutScroll()}>
            {isEng ? "Contact me" : "Skontaktuj się"}
          </NavLink>
        </div>
      </section>
    </Animated>
  );
}
