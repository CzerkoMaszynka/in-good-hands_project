import React from "react";

class Section5SubFundation1 extends React.Component {
  render() {
    const {
      onSubFundation1Click,
      onSubFundation2Click,
      onSubFundation3Click
    } = this.props;
    return (
      <div className="section5__block2">
        <h2>
          W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
          współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i
          czego potrzebują.
        </h2>
        <article className="section5__article">
          <div>
            <h3>Fundacja "Dbam o Zdrowie"</h3>
            <p>
              Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
              życiowej
            </p>
          </div>
          <div>ubrania, jedzenie, sprzęt AGD, meble, zabawki</div>
        </article>
        <article className="section5__article">
          <div>
            <h3>Fundacja "Dla dzieci"</h3>
            <p>Cel i misja: Pomoc dzieciom z ubogich rodzin.</p>
          </div>
          <div>ubrania, meble, zabawki</div>
        </article>
        <article className="section5__article">
          <div>
            <h3>Fundacja "Bez domu"</h3>
            <p>
              Cel i misja: Pomoc dla osób nie posiadających miejsca
              zamieszkania.
            </p>
          </div>
          <div>ubrania, jedzenie, ciepłe koce</div>
        </article>
        <div className="section5__pagination">
          <button
            className="section5__paginationBtn section5__paginationBtn-active"
            onClick={onSubFundation1Click}
          >
            1
          </button>
          <button
            className="section5__paginationBtn"
            onClick={onSubFundation2Click}
          >
            2
          </button>
          <button
            className="section5__paginationBtn"
            onClick={onSubFundation3Click}
          >
            3
          </button>
        </div>
      </div>
    );
  }
}

export default Section5SubFundation1;
