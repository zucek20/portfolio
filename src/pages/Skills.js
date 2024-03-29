import "../styles/Skills.scss";
import Animated from "../components/Animated";
import patternSkills from "../img/patterns/skills.svg";
import reactjs from "../img/stack/react.png";
import js from "../img/stack/js.png";
import sass from "../img/stack/sass.png";
import css from "../img/stack/css.png";
import html from "../img/stack/html.png";
import git from "../img/stack/git.png";
import vscode from "../img/stack/vscode.png";
import figma from "../img/stack/figma.png";
import designer from "../img/stack/designer.png";
import publisher from "../img/stack/publisher.png";
import photo from "../img/stack/photo.png";
import tablet from "../img/tablet.svg";
import angular from '../img/stack/angular.png'
import typescript from '../img/stack/typescript.png'
import rxjs from '../img/stack/rxjs.png'
import ngrx from '../img/stack/ngrx.png'
import gitlab from '../img/stack/gitlab.png'

import { AppContext } from "../components/AppContext"
import { useContext } from "react";


export default function Skills() {
  const {isEng} = useContext(AppContext)

  return (
    <Animated>
      {isEng ? (
        <section className="skills">
        <img src={patternSkills} alt="pattern" className="patternSkills" />

        <div className="wrap">
          <h2>Skills</h2>

          <div className="stack">
            <div className="head">
              <h3>My stack</h3>
              <div className="green"></div>
            </div>

            <div className="mainGallery">
              <figure>
                <img src={angular} alt="angular" />
                <p>Angular</p>
              </figure>
              <figure>
                <img src={typescript} alt="TypeScript" />
                <p>TypeScript</p>
              </figure>
              <figure>
                <img src={rxjs} alt="react" />
                <p>RxJs</p>
              </figure>
              <figure>
                <img src={ngrx} alt="angular" />
                <p>NgRx</p>
              </figure>
              <figure>
                <img src={reactjs} alt="react" />
                <p>React</p>
              </figure>
              <figure>
                <img src={js} alt="javaScript" />
                <p>JavaScript</p>
              </figure>
              <figure>
                <img src={sass} alt="sass" />
                <p>Sass/Scss</p>
              </figure>
              <figure>
                <img src={css} alt="css" />
                <p>CSS3</p>
              </figure>
              <figure>
                <img src={html} alt="html" />
                <p>HTML5</p>
              </figure>
              <figure>
                <img src={git} alt="git" />
                <p>Git</p>
              </figure>
              <figure>
                <img src={gitlab} alt="git" />
                <p>Gitlab</p>
              </figure>
            </div>

            <p className="other">Other:</p>
            <div className="otherGallery">
              <figure>
                <img src={vscode} alt="vscode" />
                <p>VS Code</p>
              </figure>
              <figure>
                <img src={figma} alt="figma" />
                <p>Figma</p>
              </figure>
              <figure>
                <img src={designer} alt="affinity_designer" />
                <p>Affinity Designer</p>
              </figure>
              <figure>
                <img src={photo} alt="affinity_photo" />
                <p>Affinity Photo</p>
              </figure>
              <figure>
                <img src={publisher} alt="affinity_publisher" />
                <p>Affinity Publisher</p>
              </figure>
            </div>
          </div>

          <div className="design">
            <div className="head">
              <h3>Design</h3>
              <div className="green"></div>
            </div>
            <article>
              <p>
              In addition to programming, I also design websites, web applications and their interfaces, maintaining the appropriate UX and UI practices and aesthetics.
                <br />
                <br />
                I can use tools such as Figma to design interfaces/layouts and the Affinity software suite to create 2D graphics for projects and StyleGuides in them.
                <br />
                <br />
                I can implement a responsive design dedicated to mobile devices, and use "Mobile first" technique.
              </p>
              <img src={tablet} alt="graphic tablet" />
            </article>
          </div>

          <div className="otherSkills">
            <div className="head">
              <h3>Other skills</h3>
              <div className="green"></div>
            </div>
            <ul>
              <li>English - Intermediate</li>
              <li>Ability to work in a team</li>
              <li>Ability to work under pressure</li>
              <li>Desire to learn new technologies</li>
            </ul>
          </div>
        </div>
      </section>
      ) : (

        <section className="skills">
        <img src={patternSkills} alt="pattern" className="patternSkills" />

        <div className="wrap">
          <h2>Umiejętności</h2>

          <div className="stack">
            <div className="head">
              <h3>Mój TechStack</h3>
              <div className="green"></div>
            </div>

            <div className="mainGallery">
              <figure>
                <img src={angular} alt="angular" />
                <p>Angular</p>
              </figure>
              <figure>
                <img src={typescript} alt="TypeScript" />
                <p>TypeScript</p>
              </figure>
              <figure>
                <img src={rxjs} alt="angular" />
                <p>RxJs</p>
              </figure>
              <figure>
                <img src={ngrx} alt="angular" />
                <p>NgRx</p>
              </figure>
              <figure>
                <img src={reactjs} alt="react" />
                <p>React</p>
              </figure>
              <figure>
                <img src={js} alt="js" />
                <p>JavaScript</p>
              </figure>
              <figure>
                <img src={sass} alt="sass" />
                <p>Sass/Scss</p>
              </figure>
              <figure>
                <img src={css} alt="css" />
                <p>CSS3</p>
              </figure>
              <figure>
                <img src={html} alt="html" />
                <p>HTML5</p>
              </figure>
              <figure>
                <img src={git} alt="git" />
                <p>Git</p>
              </figure>
              <figure>
                <img src={gitlab} alt="git" />
                <p>Gitlab</p>
              </figure>
            </div>

            <p className="other">Pozostałe:</p>
            <div className="otherGallery">
              <figure>
                <img src={vscode} alt="vscode" />
                <p>VS Code</p>
              </figure>
              <figure>
                <img src={figma} alt="figma" />
                <p>Figma</p>
              </figure>
              <figure>
                <img src={designer} alt="affinity_designer" />
                <p>Affinity Designer</p>
              </figure>
              <figure>
                <img src={photo} alt="affinity_photo" />
                <p>Affinity Photo</p>
              </figure>
              <figure>
                <img src={publisher} alt="affinity_publisher" />
                <p>Affinity Publisher</p>
              </figure>
            </div>
          </div>

          <div className="design">
            <div className="head">
              <h3>Design</h3>
              <div className="green"></div>
            </div>
            <article>
              <p>
                Oprócz programowania zajmuję się też projektowaniem stron, aplikacji webowych i ich interfejsów z
                zachowaniem odpowiednich praktyk UX i UI oraz estetyki.
                <br />
                <br />
                Umiem posługiwać się narzędziami takimi jak Figma i zestawem programów Affinity i tworzyć w nich grafiki
                2D na potrzeby projektów oraz StyleGuide-y.
                <br />
                <br />
                Potrafię zaimplementować responsywny design przystosowany do urządzeń mobilnych, a także używać techniki
                “mobile first”.
              </p>
              <img src={tablet} alt="graphic tablet" />
            </article>
          </div>

          <div className="otherSkills">
            <div className="head">
              <h3>Pozostałe</h3>
              <div className="green"></div>
            </div>
            <ul>
              <li>Język Angielski - średnio zaawansowany</li>
              <li>Umiejętność pracy w zespole</li>
              <li>Umiejętność pracy pod presją</li>
              <li>Chęć poznawania nowych technologii</li>
            </ul>
          </div>
        </div>
      </section>
      )}
    </Animated>
  );
}
