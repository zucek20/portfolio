import Animated from "../components/Animated";
import "../styles/About.scss";
import prof from "../img/prof.jpg";
import desk from "../img/desk.png"

export default function About() {
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

  return (
    <Animated>
      <section className="about">
        <header>
          <img src={prof} alt="profile img" />
          <div className="heading">
            <h1>Cześć!</h1>
            <p>
              Jestem Paweł Izdebski <br />
              Front-end developer i UX/UI designer
            </p>
            <button onClick={downloadFile}>Pobierz CV</button>
            <a href="https://github.com/zucek20" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
        </header>

        <div className="wrap">
          <h2>Kilka słów o mnie</h2>
          <article>
            <p>
              Jestem początkującym front-end React developerem, który rozwija się także w projektowaniu graficznym
              interfejsów użytkownika i tworzeniu grafik 2D.
              <br/><br/> 
              Tworze swoje własne projekty w Figmie i zestawie Affinity,
              by potem je przenieść na kod. Rozwiązywanie problemów w programowaniu daje mi nieporównywalną satysfakcję za każdym razem.
            </p>
            <img src={desk} alt="desk" />
          </article>
        </div>
      </section>
    </Animated>
  );
}
