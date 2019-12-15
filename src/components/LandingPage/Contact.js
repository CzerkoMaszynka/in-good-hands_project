import React from "react";
import Decoration from "../../assets/assets/Decoration.svg";
import Facebook from "../../assets/assets/Facebook.svg";
import Instagram from "../../assets/assets/Instagram.svg";

const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const reWhiteSpace = /[ \t]+/i;


class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    isNameValid: true,
    isEmailValid: true,
    isMessageValid: true,
    isFormValid: false
  };

  onInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    const isFormValid = this.isFormValid();
    if (isFormValid) {
      this.sendRequest();
    }
  };

  sendRequest() {
    const { name, email, message } = this.state;
    fetch("https://fer-api.coderslab.pl/v1/portfolio/contact", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    })
      .then(data => data.json())
      .then(data => {
        if (data.status === 'error') {
          const mapping = {
            name: 'isNameValid',
            email: 'isEmailValid',
            message: 'isMessageValid'
          }

          data.errors.forEach(el => {
            this.setState({
              [mapping[el.param]]: false
            })
          })
        }
      })
  }

  isFormValid = () => {
    const { name, email, message, isFormValid } = this.state;
    const isNameValid = !reWhiteSpace.test(name);
    const isEmailValid = re.test(email);
    const isMessageValid = message.length >= 120;
    this.setState({
      isNameValid, isEmailValid, isMessageValid
    });
    if (isNameValid && isEmailValid && isMessageValid) {
      this.setState({
        isFormValid: true
      })
    }
    return isNameValid && isEmailValid && isMessageValid;
  }

  render() {
    const {
      isNameValid,
      isEmailValid,
      isMessageValid,
      isFormValid
    } = this.state;
    return (
      <>
        <section className="section6" id="Contact" >
          <div className="section6__leftBox">

          </div>
          <div className="section6__contact">
            <div className="section6__header">
              <h1>Skontaktuj się z nami</h1>
              <img src={Decoration} alt="decoration" />
              {isFormValid &&
                <>
                  <p className="formValid">Wiadomość została wysłana!</p>
                  <p className="formValid">Wkrótce się skontaktujemy.</p>
                </>}
            </div>
            <form onSubmit={this.onFormSubmit}>
              <div className="section6__inputsContainer">
                <div>
                  <label htmlFor="name">Wpisz swoje imię</label>
                  <input
                    id="username"
                    type="text"
                    name="name"
                    placeholder="Krzysztof"
                    onChange={this.onInputChange}
                  />
                  {!isNameValid && <span style={{ color: "red" }}>Podane imię jest nieprawidłowe!</span>}
                </div>
                <div>
                  <label htmlFor="email">Wpisz swój email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="abc@xyz.pl"
                    onChange={this.onInputChange}
                  />
                  {!isEmailValid && <span style={{ color: "red" }}>Podany email jest nieprawidłowy!</span>}
                </div>
              </div>
              <div className="section6__textareaContainer">
                <label htmlFor="message">Wpisz swoją wiadomość</label>
                <textarea
                  id="textarea"
                  type="textarea"
                  name="message"
                  rows="4"
                  cols="50"
                  onChange={this.onInputChange}
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
                {!isMessageValid && <span style={{ color: "red" }}>Wiadomość musi mieć conajmniej 120 znaków!</span>}
                <button type="submit" className="contactBtn" >Wyślij</button>
              </div>
            </form>
          </div>
          <footer className="section6__footer">
            <span>
              Copyright by Coders Lab
            </span>
            <a href="https://www.facebook.com/"><img src={Facebook} alt="facebook" /></a>
            <a href="https://www.instagram.com/"><img src={Instagram} alt="instagram" /></a>
          </footer>
        </section>
      </>
    );
  }

}

export default Contact;
