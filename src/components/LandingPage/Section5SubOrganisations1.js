import React from "react";

class Section5SubOrganisations1 extends React.Component {
  render() {
    const { onSubOrganisation1Click, onSubOrganisation2Click } = this.props;
    return (
      <div className="section5__block2">
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h2>
        <article className="section5__article">
          <div>
            <h3>Organizacja "Lorem Ipsum 1"</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </p>
          </div>
          <div>Excepteur, sint, occaecat, cupidatat</div>
        </article>
        <article className="section5__article">
          <div>
            <h3>Organizacja "Lorem Ipsum 2""</h3>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi
            </p>
          </div>
          <div>quis, nostrud, exercitatio</div>
        </article>
        <article className="section5__article">
          <div>
            <h3>Organizacja "Lorem Ipsum 3"</h3>
            <p>Culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div>ipsum, dolor, sit, amet</div>
        </article>
        <div className="section5__pagination">
          <button
            className="section5__paginationBtn section5__paginationBtn-active"
            onClick={onSubOrganisation1Click}
          >
            1
          </button>
          <button
            className="section5__paginationBtn"
            onClick={onSubOrganisation2Click}
          >
            2
          </button>
        </div>
      </div>
    );
  }
}

export default Section5SubOrganisations1;
