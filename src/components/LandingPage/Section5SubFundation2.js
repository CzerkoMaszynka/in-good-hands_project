import React from "react";

class Section5SubFundation2 extends React.Component {
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
            <h3>Fundacja "Dbam o Psy"</h3>
            <p>Cel i misja: Pomoc psom ze schroniska</p>
          </div>
          <div>koce, jedzenie, zabawki</div>
        </article>
        <article className="section5__article">
          <div>
            <h3>Fundacja "Dbam o koty"</h3>
            <p>Cel i misja: Pomoc kotom ze schroniska.</p>
          </div>
          <div>koce, jedzenie, zabawki</div>
        </article>
        <article className="section5__article">
          <div>
            <h3>Fundacja "Bez internetu"</h3>
            <p>
              Cel i misja: Pomoc dla osób nie posiadających dostępu do internetu
            </p>
          </div>
          <div>komputery, światłowody, routery, modemy</div>
        </article>
        <div className="section5__pagination">
          <button
            className="section5__paginationBtn"
            onClick={onSubFundation1Click}
          >
            1
          </button>
          <button
            className="section5__paginationBtn  section5__paginationBtn-active"
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

export default Section5SubFundation2;
