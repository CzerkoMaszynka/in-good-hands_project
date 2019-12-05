import React from 'react';
import Icon1 from '/home/damian/Pulpit/in good hands project/in-good-hands_project/src/assets/assets/Icon-1.svg';
import Icon2 from '/home/damian/Pulpit/in good hands project/in-good-hands_project/src/assets/assets/Icon-2.svg';
import Icon3 from '/home/damian/Pulpit/in good hands project/in-good-hands_project/src/assets/assets/Icon-3.svg';
import Icon4 from '/home/damian/Pulpit/in good hands project/in-good-hands_project/src/assets/assets/Icon-4.svg';
import Decoration from '/home/damian/Pulpit/in good hands project/in-good-hands_project/src/assets/assets/Decoration.svg';

const FourSteps = () => (
  <>
    <section className="section3">
      <div className="section3__header">
        <h1>Wystarczą 4 proste kroki</h1>
        <img className="section3__decoration" src={Decoration} alt="decoration" />
      </div>
      <div className="section3__articleContainer">
        <article className="section3__article">
          <img src={Icon1} alt="tshirt" />
          <p>Wybierz rzeczy</p>
          <div className="section3__shortLine"></div>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </article>
        <article className="section3__article">
          <img src={Icon2} alt="package" />
          <p>Spakuj je</p>
          <div className="section3__shortLine"></div>
          <p>skorzystaj z worków na śmieci</p>
        </article>
        <article className="section3__article">
          <img src={Icon3} alt="loupe" />
          <p>Zdecyduj komu chcesz pomóc</p>
          <div className="section3__shortLine"></div>
          <p>wybierz zaufane miejsce</p>
        </article>
        <article className="section3__article">
          <img src={Icon4} alt="loop" />
          <p>Zamów kuriera</p>
          <div className="section3__shortLine"></div>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </article>
      </div>
      <div>
        <button className="btn-primary">ODDAJ RZECZY</button>
      </div>
    </section>
  </>
);

export default FourSteps;