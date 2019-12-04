import React from 'react';
import HomeHero from "/home/damian/Pulpit/in good hands project/in-good-hands_project/src/assets/assets/Home-Hero-Image.jpg";
import Decoration from "/home/damian/Pulpit/in good hands project/in-good-hands_project/src/assets/assets/Decoration.svg";


const Header = () => (
  <>
  <section className="section1">
    <div className="section1__column">
      <img src={HomeHero} alt="random items" />
    </div>
    <div className="section1__column">
      <div className="section1__login">
        <div>
          <a>Zaloguj</a>
          <a>Załóż konto</a>
        </div>
      </div>
      <div className="section1__navi">
        <ul className="section1__ul">
          <li><a>Start</a></li>
          <li><a>O co chodzi?</a></li>
          <li><a>O nas</a></li>
          <li><a>Fundacja i oragnizacje</a></li>
          <li><a>Kontakt</a></li>
        </ul>
        <div className="section1__mainText">
          <h1>Zacznij pomagać!<br/>
          Oddaj niechciane rzeczy w zaufane ręce</h1>
          <img src={Decoration} alt="decoration" />
          <div className="section1__buttons">
            <button className="btn-primary">ODDAJ<br/>RZECZY</button>
            <button className="btn-primary">ZORGANIZUJ ZBIÓRKĘ</button>
          </div>
        </div>
      </div>
    </div>
  </section>
  </>
)

export default Header;
