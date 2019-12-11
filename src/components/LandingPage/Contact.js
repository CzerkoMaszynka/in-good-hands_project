import React from "react";
import Decoration from "../../assets/assets/Decoration.svg";

class Contact extends React.Component {
  render() {
    return (
      <>
        <section className="section6">
          <div className="section6__contact">
            <div className="section6__header">
              <h1>Skontaktuj się z nami</h1>
              <img src={Decoration} alt="decoration" />
            </div>
            <form>
              <div className="section6__inputsContainer">
                <div>
                  <label htmlFor="username">Wpisz swoje imię</label>
                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Krzysztof"
                  />
                </div>
                <div>
                  <label htmlFor="email">Wpisz swój email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="abc@xyz.pl"
                  />
                </div>
              </div>
              <div className="section6__textareaContainer">
                <label htmlFor="textarea">Wpisz swoją wiadomość</label>
                <textarea
                  id="textarea"
                  type="textarea"
                  name="textarea"
                  rows="4"
                  cols="50"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                />
              </div>
              <button type="submit">Wyślij</button>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default Contact;
