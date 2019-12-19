import React from "react";

class Section5OrganisationsMainText extends React.Component {
  render() {
    const { onFundationClick, onOrganisationsClick, onLocalClick } = this.props;
    return (
      <div className="section5__block1">
        <div className="section5__buttonContainer">
          <button className="section5__btn" onClick={onFundationClick}>
            Fundacjom
          </button>
          <button
            className="section5__btn section5__btnActive"
            onClick={onOrganisationsClick}
          >
            Organizacjom pozarządowym
          </button>
          <button className="section5__btn" onClick={onLocalClick}>
            Lokalnym zbiórkom
          </button>
        </div>
      </div>
    );
  }
}

export default Section5OrganisationsMainText;
