import "../styles/Projects.scss";
import Animated from "../components/Animated";
import patternProjects from "../img/patterns/projects.svg";
import pro1 from "../img/projekty/pro1.png";
import pro2 from "../img/projekty/pro2.jpg";
import pro3 from "../img/projekty/pro3.jpg";
import pro4 from "../img/projekty/pro4.jpg";
import { AppContext } from "../components/AppContext"
import { useContext } from "react";


export default function Projects() {
  const {isEng} = useContext(AppContext) 
  
  return (
    <Animated>
      {isEng ? (
        <section className="projects">
        <img src={patternProjects} alt="pattern" className="patternProjects" />

        <div className="wrap">
          <h2>My example projects</h2>
          <p>Here are a few projects whose repositories can be found on my GitHub.</p>

          <article className="company">
            <img src={pro1} alt="projekt biuro" />

              <div className="other">
                <div className="text">
                  <h3>Commercial site for a construction company</h3>
                  <p>
                  The project contains a commercial, responsive website advertising a construction company. Its purpose is to encourage visitors to contact the  company.
                    <br />
                    <br />
                    The structure includes standard routing with separate components and the    application renders the navigation and sections independently.
                  </p>
                </div>
              <div className="side">
                <div className="buttons">
                  <a href="https://github.com/zucek20/uslugi_projektowe" target="_blank" rel="noopener noreferrer">
                    Source code
                  </a>
                  <a href="https://zucek20.github.io/uslugi_projektowe/" target="_blank" rel="noopener noreferrer">
                    Page
                  </a>
                  <a href="https://www.figma.com/file/JG5iVSamY3YRAjhtRTqtdL/Us%C5%82ugi-projektowe?node-id=0%3A1" target="_blank" rel="noopener noreferrer">
                    Figma
                  </a>
                </div>
                <div className="list">
                <p>Used tech:</p>
                <ul>
                  <li>React</li>
                  <li>React Router</li>
                  <li>Framer Motion</li>
                  <li>JavaScript</li>
                  <li>Scss</li>
                </ul>
              </div>
              </div>
            </div>
          </article>

          <article className="company">
            <img src={pro2} alt="projekt biuro" />

              <div className="other">
                <div className="text">
                <h3>Apu Apustaja</h3>
              <p>
              It is a One Page website design, whose task is to tell the user what the above-mentioned meme from Finland is about.
                <br /> <br />
                Page contains responsive design and interactive gallery.
                <br /> <br />
                The SCSS code is divided into modules which allows you to keep the code clean for each section.
              </p>
                </div>
              <div className="side">
                <div className="buttons">
                  <a href="https://github.com/zucek20/apu_apustaja" target="_blank" rel="noopener noreferrer">
                    Source code
                  </a>
                  <a href="https://zucek20.github.io/apu_apustaja/" target="_blank" rel="noopener noreferrer">
                    Page
                  </a>
                  <a href="https://www.figma.com/file/rlBMhU9BSQ1DwvWIEVpczJ/Apu-Apustaja" target="_blank" rel="noopener noreferrer">
                    Figma
                  </a>
                </div>
                <div className="list">
                <p>Used tech:</p>
                <ul>
                  <li>JavaScript</li>
                  <li>Scss</li>
                  <li>HTML5</li>
                </ul>
              </div>
              </div>
            </div>
          </article>

          <article className="company">
            <img src={pro3} alt="projekt biuro" />

              <div className="other">
                <div className="text">
                <h3>Weather App</h3>
                <p>
              It is a simple application made in React. It connects to an external weather API to display below information (cloud cover, temperature and wind) about the city you have selected.
                <br /> <br />
                The architeture is based on separate components that data flow through.
              </p>
                </div>
              <div className="side">
                <div className="buttons">
                  <a href="https://github.com/zucek20/weather-app" target="_blank" rel="noopener noreferrer">
                    Source code
                  </a>
                  <a href="https://zucek20.github.io/weather-app" target="_blank" rel="noopener noreferrer">
                    Page
                  </a>
                  <a href="https://www.figma.com/file/TVGV4MJTQufSbL6gHrIwjz/Weather-App?node-id=0%3A1" target="_blank" rel="noopener noreferrer">
                    Figma
                  </a>
                </div>
                <div className="list">
                <p>Used tech:</p>
                <ul>
                  <li>React</li>
                  <li>JavaScript</li>
                  <li>Scss</li>
                </ul>
              </div>
              </div>
            </div>
          </article>

          <article className="company">
            <img src={pro4} alt="projekt biuro" />

              <div className="other">
                <div className="text">
                <h3>Code Quiz</h3>
                <p>
              It is a web application written in TypeScript. Contains a quiz for developers who can test their IT knowledge with a quiz. The game also counts the player's score.
                <br /> <br />
                The quiz uses data structures such as nested arrays to render the data.
              </p>
                </div>
              <div className="side">
                <div className="buttons">
                <a href="https://github.com/zucek20/CodeQuiz" target="_blank" rel="noopener noreferrer">
                    Source code
                  </a>
                  <a href="https://zucek20.github.io/CodeQuiz/" target="_blank" rel="noopener noreferrer">
                    App
                  </a>
                  <a href="https://www.figma.com/file/BNguR8Wp2IpL6PP346LepM/CodeQuiz" target="_blank" rel="noopener noreferrer">
                    Figma
                  </a>
                </div>
                <div className="list">
                <p>Used tech:</p>
                <ul>
                  <li>TypeScript</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                </ul>
              </div>
              </div>
            </div>
          </article>

          

          <p>More projects can be found on my <a href="https://github.com/zucek20" target="_blank" rel="noopener noreferrer" className="more">GitHub</a>.</p>
        </div>
      </section>
      ) : (
        <section className="projects">
        <img src={patternProjects} alt="pattern" className="patternProjects" />

        <div className="wrap">
          <h2>Moje przykładowe projekty</h2>
          <p>Tu jest kilka projektów, których repozytoria można znaleźć na moim githubie.</p>

          <article className="company">
            <img src={pro1} alt="projekt biuro" />

              <div className="other">
                <div className="text">
                  <h3>Komercyjna strona dla biura projekowego</h3>
                  <p>
                  Projekt zawiera komercyjną, responsywną stronę reklamującą biuro projekowe. Jej celem jest zachęcanie odwiedzających do kontaktu z firmą.
                    <br />
                    <br />
                  Struktura zawiera standardowy routing z podzielonymi komponentami a aplikacja renderuje nawigację i sekcje niezależnie.
                  </p>
                </div>
              <div className="side">
                <div className="buttons">
                  <a href="https://github.com/zucek20/uslugi_projektowe" target="_blank" rel="noopener noreferrer">
                    Kod źródłowy
                  </a>
                  <a href="https://zucek20.github.io/uslugi_projektowe/" target="_blank" rel="noopener noreferrer">
                    Strona
                  </a>
                  <a href="https://www.figma.com/file/JG5iVSamY3YRAjhtRTqtdL/Us%C5%82ugi-projektowe?node-id=0%3A1" target="_blank" rel="noopener noreferrer">
                    Figma
                  </a>
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
            </div>
          </article>

          <article className="company">
            <img src={pro2} alt="projekt biuro" />

              <div className="other">
                <div className="text">
                <h3>Apu Apustaja</h3>
              <p>
              To projekt strony typu OnePage, której zadaniem jest opowiedzenie użytkownikowi czym jest ww. internetowy mem pochodzący z Finlandii. 
                <br /> <br />
                Strona zawiera responsywny design oraz interaktywną galerię.
                <br /> <br />
                Kod SCSS jest podzielony na moduły co pozwala pisać czysty kod dla każdej sekcji.
              </p>
                </div>
              <div className="side">
                <div className="buttons">
                  <a href="https://github.com/zucek20/apu_apustaja" target="_blank" rel="noopener noreferrer">
                    Kod źródłowy
                  </a>
                  <a href="https://zucek20.github.io/apu_apustaja/" target="_blank" rel="noopener noreferrer">
                    Strona
                  </a>
                  <a href="https://www.figma.com/file/rlBMhU9BSQ1DwvWIEVpczJ/Apu-Apustaja" target="_blank" rel="noopener noreferrer">
                    Figma
                  </a>
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
            </div>
          </article>

          <article className="company">
            <img src={pro3} alt="projekt biuro" />

              <div className="other">
                <div className="text">
                <h3>Aplikacja pogodowa</h3>
                <p>
                Jest to prosta aplikacja stworzona w React. Łączy się ona z zewnętrznym API pogodowym aby wyświetlić poniżej informacje (zachmurzenie, temperatura i wiatr) o wybranym wcześniej mieście.
                <br /> <br />
                Projekt jest oparty na oddzielnych komponentach, przez które przepływają dane.
                </p>
                </div>
              <div className="side">
                <div className="buttons">
                  <a href="https://github.com/zucek20/weather-app" target="_blank" rel="noopener noreferrer">
                    Kod źródłowy
                  </a>
                  <a href="https://zucek20.github.io/weather-app" target="_blank" rel="noopener noreferrer">
                    Aplikacja
                  </a>
                  <a href="https://www.figma.com/file/TVGV4MJTQufSbL6gHrIwjz/Weather-App?node-id=0%3A1" target="_blank" rel="noopener noreferrer">
                    Figma
                  </a>
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
            </div>
          </article>

          <article className="company">
            <img src={pro4} alt="projekt biuro" />

              <div className="other">
                <div className="text">
                <h3>Code Quiz</h3>
                <p>
                To webowa aplikacja, napisana w TypeScript. Zawiera quiz dla developerów, którzy mogą sprawdzić swoją wiedzę z dzidziny IT. 
                <br /> <br />
                Quiz wykorzystuje struktury danych takie jak zagnieżdżone tablice, do renderowania danych.
              </p>
                </div>
              <div className="side">
                <div className="buttons">
                <a href="https://github.com/zucek20/CodeQuiz" target="_blank" rel="noopener noreferrer">
                    Kod źródłowy
                  </a>
                  <a href="https://zucek20.github.io/CodeQuiz/" target="_blank" rel="noopener noreferrer">
                    Aplikacja
                  </a>
                  <a href="https://www.figma.com/file/BNguR8Wp2IpL6PP346LepM/CodeQuiz" target="_blank" rel="noopener noreferrer">
                    Figma
                  </a>
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
            </div>
          </article>

          

          <p>Więcej moich projktów na <a href="https://github.com/zucek20" target="_blank" rel="noopener noreferrer" className="more">GitHub</a>.</p>
        </div>
      </section>
    )}
    </Animated>
  );
}
