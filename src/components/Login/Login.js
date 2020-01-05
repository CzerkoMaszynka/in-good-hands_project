import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Decoration from "../../assets/assets/Decoration.svg";

//spróbuj ze scroll to element

const options = {
  duration: 500,
  activeclass: "active"
};

const Login = () => {
  return (
    <section className="section1 login__section">
      <div className="section1__column"></div>
      <div />
      <div className="section1__column">
        <div className="section1__login">
          <div>
            <NavLink to="/login">Zaloguj</NavLink>
            <NavLink to="/register">Załóż konto</NavLink>
          </div>
        </div>
        <div className="section1__navi">
          <ul className="section1__ul">
            <li>
              <NavLink to="/" {...options}>
                Start
              </NavLink>
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
        </div>
        <div className="login">
          <div className="login__container">
            <h1>Zaloguj się</h1>
            <img src={Decoration} alt="decoration" />
            <form>
              <label htmlFor="login">Email</label>
              <input id="login" type="text" name="login" />
              <label htmlFor="password">Hasło</label>
              <input id="password" type="password" name="password" />
            </form>
            <div className="login__btnContainer">
              <NavLink to="/register"><button className="btn-secondary">Załóż konto</button></NavLink>
              <button className="btn-secondary">Zaloguj się</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
