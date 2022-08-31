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

export default function Skills() {
  return (
    <Animated>
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
                <img src={designer} alt="designer" />
                <p>Affinity Designer</p>
              </figure>
              <figure>
                <img src={photo} alt="photo" />
                <p>Affinity Photo</p>
              </figure>
              <figure>
                <img src={publisher} alt="publisher" />
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
                zachowaniem odpowiedznich praktyk UX i UI oraz estetyki.
                <br />
                <br />
                Umiem posługiwać się narzędziami takimi jak Figma i zestawem programów Affinity i tworzyć w nich grafiki
                2D na potrzeby projektów oraz StyleGuide-y.
                <br />
                <br />
                Potrafię zaimplementować responsywny design prystosowany do urządzeń mobilnych, a także używać techniki
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
              <li>Język Angielski - B2</li>
              <li>Umiejętność pracy w zespole</li>
              <li>Umiejętność pracy pod presją</li>
            </ul>
          </div>
        </div>
      </section>
    </Animated>
  );
}
