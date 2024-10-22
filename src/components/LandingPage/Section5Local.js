import React from "react";

class Section5Local extends React.Component {
  render() {
    const { onFundationClick, onOrganisationsClick, onLocalClick } = this.props;
    return (
      <>
        <div className="section5__block1">
          <div className="section5__buttonContainer">
            <button className="section5__btn" onClick={onFundationClick}>
              Fundacjom
            </button>
            <button className="section5__btn" onClick={onOrganisationsClick}>
              Organizacjom pozarządowym
            </button>
            <button
              className="section5__btn section5__btnActive"
              onClick={onLocalClick}
            >
              Lokalnym zbiórkom
            </button>
          </div>
        </div>
        <div className="section5__block2">
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation.
          </h2>
          <article className="section5__article">
            <div>
              <h3>Zbiórka "Lorem Ipsum 1"</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
            </div>
            <div>Excepteur, sint, occaecat, cupidatat</div>
          </article>
          <article className="section5__article">
            <div>
              <h3>Zbiórka "Lorem Ipsum 2""</h3>
              <p>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi
              </p>
            </div>
            <div>quis, nostrud, exercitatio</div>
          </article>
          <article className="section5__article">
            <div>
              <h3>Zbiórka "Lorem Ipsum 3"</h3>
              <p>Culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div>ipsum, dolor, sit, amet</div>
          </article>
        </div>
      </>
    );
  }
}

export default Section5Local;
