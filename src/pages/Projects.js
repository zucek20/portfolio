import "../styles/Projects.scss";
import Animated from "../components/Animated";
import patternProjects from "../img/patterns/projects.svg";
import pro1 from "../img/projekty/pro1.png";
import pro2 from "../img/projekty/pro2.png";
import pro3 from "../img/projekty/pro3.png";
import pro4 from "../img/projekty/pro4.png";

export default function Projects() {
  return (
    <Animated>
      <section className="projects">
        <img src={patternProjects} alt="pattern" className="patternProjects" />

        <div className="wrap">
          <h2>Moje przykładowe projekty</h2>
          <p>Tu jest kilka projektów, których repozytoria można znaleźć na moim githubie.</p>

          <article className="company">
            <div className="text">
              <h3>Komercyjna strona dla biura projektowego</h3>
              <p>
                Projekt zawiera komercyjną, responsywną stronę reklamującą biuro projekowe. Jej celem jest zachęcanie
                odwiedzających do kontaktu z firmą.
                <br />
                <br />
                Struktura zawiera standardowy routing z podzielonymi komponentami a aplikacja renderuje nawigację i
                sekcje niezależnie.
              </p>
            </div>
            <div className="other">
              <div className="top">
                <div className="buttons">
                  <a href="https://github.com/zucek20/uslugi_projektowe" target="_blank" rel="noopener noreferrer">
                    Kod źródłowy
                  </a>
                  <a href="https://zucek20.github.io/uslugi_projektowe/" target="_blank" rel="noopener noreferrer">
                    Strona
                  </a>
                </div>
                <img src={pro1} alt="projekt biuro" />
              </div>
              <div className="list">
                <p>Użyta technologia:</p>
                <ul>
                  <li>React</li>
                  <li>React Router</li>
                  <li>Framer Motion</li>
                  <li>JavaScript</li>
                  <li>Scss</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="apu">
            <div className="text">
              <h3>Apu Apustaja</h3>
              <p>
                To projekt strony typu OnePage, której zadaniem jest opowiedzenie użytkownikowi czym jest ww.
                internetowy mem pochodzący z Finlandii.
                <br /> <br />
                Strona zawiera responsywny design oraz interaktywną galerię.
                <br /> <br />
                Kod SCSS jest podzielony na moduły co pozwala zachować czysty kod dla każdej sekcji.
              </p>
            </div>
            <div className="other">
              <div className="top">
                <div className="buttons">
                  <a href="https://github.com/zucek20/apu_apustaja" target="_blank" rel="noopener noreferrer">
                    Kod źródłowy
                  </a>
                  <a href="https://zucek20.github.io/apu_apustaja/" target="_blank" rel="noopener noreferrer">
                    Strona
                  </a>
                </div>
                <img src={pro2} alt="projekt apu apustaja" />
              </div>
              <div className="list">
                <p>Użyta technologia:</p>
                <ul>
                  <li>JavaScript</li>
                  <li>Scss</li>
                  <li>HTML5</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="weather">
            <div className="text">
              <h3>Aplikacja pogodowa</h3>
              <p>
                Jest to prosta aplikacja stworzona w React. Łączy się ona z zewnętrznym API pogodowym aby wyświetlić
                poniżej informacje (zachmurzenie, temperatura i wiatr) o wybranym wcześniej mieście.
                <br /> <br />
                Projekt jest oparty na oddzielnych komponentach, przez które przepływają dane.
              </p>
            </div>
            <div className="other">
              <div className="top">
                <div className="buttons">
                  <a href="https://github.com/zucek20/weather-app" target="_blank" rel="noopener noreferrer">
                    Kod źródłowy
                  </a>
                  <a href="https://zucek20.github.io/weather-app/" target="_blank" rel="noopener noreferrer">
                    Aplikacja
                  </a>
                </div>
                <img src={pro3} alt="projekt pogoda" />
              </div>
              <div className="list">
                <p>Użyta technologia:</p>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Scss</li>
                </ul>
              </div>
            </div>
          </article>

          <article className="quiz">
            <div className="text">
              <h3>CodeQuiz</h3>
              <p>
                To webowa aplikacja, napisana w TypeScript. Zawiera quiz dla developerów, którzy mogą sprawdzić swoją
                wiedzę z dzidziny IT za pomocą quizu. Gra zlicza także punkty gracza.
                <br /> <br />
                Quiz wykorzystuje struktury danych takie jak zagnieżdżone tablice, do renderowania danych.
              </p>
            </div>
            <div className="other">
              <div className="top">
                <div className="buttons">
                  <a href="https://github.com/zucek20/CodeQuiz" target="_blank" rel="noopener noreferrer">
                    Kod źródłowy
                  </a>
                  <a href="https://zucek20.github.io/CodeQuiz/" target="_blank" rel="noopener noreferrer">
                    Aplikacja
                  </a>
                </div>
                <img src={pro4} alt="projekt quiz" />
              </div>
              <div className="list">
                <p>Użyta technologia:</p>
                <ul>
                  <li>TypeScript</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                </ul>
              </div>
            </div>
          </article>

          <p>Więcej moich projektów na <a href="https://github.com/zucek20" target="_blank" rel="noopener noreferrer" className="more">GitHubie</a></p>
        </div>
      </section>
    </Animated>
  );
}
