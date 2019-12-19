import React from "react";
import Section5StaticText from "./Section5StaticText";
import Section5Fundation from "./Section5Fundation";
import Section5Organisations from "./Section5Organisations";
import Section5Local from "./Section5Local";

class WhoWeHelp extends React.Component {
  state = {
    Fundation: true,
    Organisations: false,
    Local: false
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
