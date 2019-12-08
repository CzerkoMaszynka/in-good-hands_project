import React from "react";
import Section5StaticText from "./Section5StaticText";
import Section5Fundation from "./Section5Fundation";
import Section5Organisations from "./Section5Organisations";
import Section5Local from "./Section5Local";

class WhoWeHelp extends React.Component {
  state = {
    Fundation: true,
    Organisations: false,
    Local: false,
    SubFundation1: true,
    SubFundation2: false,
    SubFundation3: false,
  };

  //Fundation, organisation and local re-render by clicking on them

  onFundationClick = () => {
    this.setState(() => {
      return {
        Fundation: true,
        Organisations: false,
        Local: false
      };
    });
  };
  onOrganisationsClick = () => {
    this.setState(() => {
      return {
        Fundation: false,
        Organisations: true,
        Local: false
      };
    });
  };
  onLocalClick = () => {
    this.setState(() => {
      return {
        Fundation: false,
        Organisations: false,
        Local: true
      };
    });
  };

  //Fundations re-rendered by clicking on small btns

  onSubFundation1Click = () => {
    this.setState(() => {
      return {
        SubFundation1: true
      };
    });
  };

  onSubFundation2Click = () => {
    this.setState(() => {
      return {
        SubFundation2: true
      };
    });
  };
  onSubFundation3Click = () => {
    this.setState(() => {
      return {
        SubFundation3: true
      };
    });
  };

  render() {
    const { Fundation, Organisations, Local } = this.state;
    if (Fundation === true) {
      return (
        <>
          <section className="section5" id="Organisation">
            <Section5StaticText />
            <Section5Fundation
              onFundationClick={this.onFundationClick}
              onOrganisationsClick={this.onOrganisationsClick}
              onLocalClick={this.onLocalClick}
              onSubFundation1Click={this.onSubFundation1Click}
              onSubFundation2Click={this.onSubFundation2Click}
              onSubFundation3Click={this.onSubFundation3Click}
            />
          </section>
        </>
      );
    }
    if (Organisations === true) {
      return (
        <>
          <section className="section5" id="Organisation">
            <Section5StaticText />
            <Section5Organisations
              onFundationClick={this.onFundationClick}
              onOrganisationsClick={this.onOrganisationsClick}
              onLocalClick={this.onLocalClick}
            />
          </section>
        </>
      );
    }
    if (Local === true) {
      return (
        <>
          <section className="section5" id="Organisation">
            <Section5StaticText />
            <Section5Local
              onFundationClick={this.onFundationClick}
              onOrganisationsClick={this.onOrganisationsClick}
              onLocalClick={this.onLocalClick}
            />
          </section>
        </>
      );
    }
  }
}

export default WhoWeHelp;
