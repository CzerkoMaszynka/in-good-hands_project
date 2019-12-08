import React from "react";

class Section5SubFundation3 extends React.Component {
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
            <h3>Fundacja "Lorem ipsum 1"</h3>
            <p>Cel i Misja: Lorem ipsum dolor sit amet</p>
          </div>
          <div>ex, ea, commodo, consequat</div>
        </article>
        <article className="section5__article">
          <div>
            <h3>Fundacja "Lorem ipsum 2"</h3>
            <p>Cel i misja: Consectetur adipiscing elit.</p>
          </div>
          <div>laboris, nisi, ut, aliquip</div>
        </article>
        <article className="section5__article">
          <div>
            <h3>Fundacja "Lorem ipsum 3"</h3>
            <p>Cel i misja: tempor incididunt ut labore et dolore</p>
          </div>
          <div>Excepteur, sint, occaecat</div>
        </article>
        <div className="section5__pagination">
          <button
            className="section5__paginationBtn"
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
            className="section5__paginationBtn section5__paginationBtn-active"
            onClick={onSubFundation3Click}
          >
            3
          </button>
        </div>
      </div>
    );
  }
}

export default Section5SubFundation3;
