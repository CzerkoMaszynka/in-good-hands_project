import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Decoration from "../../assets/assets/Decoration.svg";

//spróbuj ze scroll to element

const options = {
  duration: 500,
  activeclass: "active"
};

function validateEmail(email) {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    isEmailValid: false,
    isPasswordValid: false
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    if (!validateEmail(this.state.email)) {
      this.setState({
        isEmailValid: true
      });
    } else {
      this.setState({
        isEmailValid: false
      });
    }
    if (this.state.password.length < 6) {
      this.setState({
        isPasswordValid: true
      });
    } else {
      this.setState({
        isPasswordValid: false
      });
    }
  };


  render() {
    const { isEmailValid, isPasswordValid } = this.state;
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
              <form onSubmit={this.onFormSubmit}>
                <div className="login__formContainer">
                  <label htmlFor="email">Email</label>
                  <input
                    onChange={this.onInputChange}
                    id="email"
                    type="text"
                    name="email"
                  />
                  {isEmailValid && (
                    <p className="alert">
                      Podany email jest nieprawidłowy
                    </p>
                  )}
                  <label htmlFor="password">Hasło</label>
                  <input
                    onChange={this.onInputChange}
                    id="password"
                    type="password"
                    name="password"
                  />
                  {isPasswordValid && (
                    <p className="alert">
                      Hasło powinno zawierać minimum 6 znaków
                    </p>
                  )}
                </div>
                <div className="login__btnContainer">
                  <NavLink to="/register">
                    <button className="btn-secondary">Załóż konto</button>
                  </NavLink>
                  <button className="btn-secondary btn-active" type="submit" >Zaloguj się</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default Login;
