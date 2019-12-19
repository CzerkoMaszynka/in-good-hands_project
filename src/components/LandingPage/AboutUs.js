import React from "react";
import Decoration from "../../assets/assets/Decoration.svg";
import Signature from "../../assets/assets/Signature.svg";
import People from "../../assets/assets/People.jpg";

const AboutUs = () => (
  <>
    <section className="section4" id="AboutUs">
      <article className="section4__article">
        <div className="section4__article-container">
          <h1>O nas</h1>
          <img src={Decoration} alt="decoration" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <img src={Signature} alt="signature" />
        </div>
      </article>
      <div className="section4__bigImage">
        <img src={People} alt="people" />
      </div>
    </section>
  </>
);

export default AboutUs;
