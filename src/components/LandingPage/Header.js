import React from "react";
import HomeHero from "../../assets/assets/Home-Hero-Image.jpg";
import Decoration from "../../assets/assets/Decoration.svg";
import { Link } from "react-scroll";

const options = {
  duration: 500,
  activeClass: "active"
};

const Header = () => (
  <>
    <section className="section1">
      <div className="section1__column">
        <img src={HomeHero} alt="random items" />
      </div>
      <div className="section1__column">
        <div className="section1__login">
          <div>
            <Link to="/login" {...options}>
              Zaloguj
            </Link>
            <Link>Załóż konto</Link>
          </div>
        </div>
        <div className="section1__navi">
          <ul className="section1__ul">
            <li>
              <Link to="Start" {...options}>
                Start
              </Link>
            </li>
            <li>
              <Link to="FourSteps" {...options}>
                O co chodzi
              </Link>
            </li>
            <li>
              <Link to="AboutUs" {...options}>
                O nas
              </Link>
            </li>
            <li>
              <Link to="Organisation" {...options}>
                Fundacja i oragnizacje
              </Link>
            </li>
            <li>
              <Link to="Contact" {...options}>
                Kontakt
              </Link>
            </li>
          </ul>
          <div className="section1__mainText" id="Start">
            <h1>
              Zacznij pomagać!
              <br />
              Oddaj niechciane rzeczy w zaufane ręce
            </h1>
            <img src={Decoration} alt="decoration" />
            <div className="section1__buttons">
              <Link to="/login">
                <button className="btn-primary">
                  ODDAJ
                  <br />
                  RZECZY
                </button>
              </Link>
              <Link to="/login">
                <button className="btn-primary">ZORGANIZUJ ZBIÓRKĘ</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default Header;
