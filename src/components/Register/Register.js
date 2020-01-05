import React from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Decoration from "../../assets/assets/Decoration.svg";

const options = {
  duration: 500,
  activeclass: "active"
};

const regEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

class Register extends React.Component {
  state = {
    email: "",
    password: "",
    repeat: "",
    isEmailValid: false,
    isPasswordValid: false,
    isRepeatValid: false,
    isFormValid: false
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.isFormValid();
  };

  isFormValid = () => {
    const { email, password, repeat } = this.state;
    const isEmailValid = regEmail.test(email);
    const isPasswordValid = password.length >= 6;
    const isRepeatValid = repeat === password;
    this.setState({
      isEmailValid,
      isPasswordValid,
      isRepeatValid
    });
    if (isEmailValid && isPasswordValid && isRepeatValid) {
      this.setState({
        isFormValid: true
      });
    }
    return isEmailValid && isPasswordValid && isRepeatValid;
  };

  render() {
    const { isEmailValid, isPasswordValid, isRepeatValid } = this.state;
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
              <h1>Załóż konto</h1>
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
                    <p style={{ color: "red" }}>
                      Podany email jest nieprawidłowy!
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
                    <p style={{ color: "red" }}>
                      Podane hasło jest nieprawidłowe!
                    </p>
                  )}
                  <label htmlFor="repeat">Powtórz Hasło</label>
                  <input
                    onChange={this.onInputChange}
                    id="repeat"
                    type="password"
                    name="repeat"
                  />
                  {isRepeatValid && (
                    <p style={{ color: "red" }}>Hasła muszą być identyczne!</p>
                  )}
                </div>
                <div className="login__btnContainer">
                  <NavLink to="/login">
                    <button className="btn-secondary">Zaloguj się</button>
                  </NavLink>
                  <button type="submit" className="btn-secondary btn-active">
                    Załóż konto
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Register;
