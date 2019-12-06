import React from "react";
import Decoration from "../../assets/assets/Decoration.svg";

const WhoWeHelp = () => (
  <>
    <section className="section5">
      <div className="section5__block1">
        <h1>Komu pomagamy?</h1>
        <img src={Decoration} alt="decoration" />
        <div className="section5__buttonContainer">
          <button className="section5__btn section5__btnActive">Fundacjom</button>
          <button className="section5__btn">Organizacjom pozarządowym</button>
          <button className="section5__btn">Lokalnym zbiórkom</button>
        </div>
      </div>
      <div className="section5__block2">
         <h2>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</h2>
        <article className="section5__article">
          <div>
            <h3>Fundacja "Dbam o Zdrowie</h3>
            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
          </div>
          <div>ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
        </article>
        <article className="section5__article">
          <div>
            <h3>Fundacja "Dbam o Zdrowie</h3>
            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
          </div>
          <div>ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
        </article>
        <article className="section5__article">
          <div>
            <h3>Fundacja "Dbam o Zdrowie</h3>
            <p>Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji życiowej</p>
          </div>
          <div>ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
        </article>
        <div className="section5__pagination">
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
      </div>
    </section>
  </>
);

export default WhoWeHelp;