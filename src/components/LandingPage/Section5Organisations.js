import React from "react";
import Section5OrganisationsMainText from "./Section5OrganisationsMainText";
import Section5SubOrganisations1 from "./Section5SubOrganisations1";
import Section5SubOrganisations2 from "./Section5SubOrganisations2";

class Section5Organisations extends React.Component {
  state = {
    SubOrganisation1: true,
    SubOrganisation2: false
  };

  onSubOrganisation1Click = () => {
    this.setState(() => {
      return {
        SubOrganisation1: true,
        SubOrganisation2: false
      };
    });
  };
  onSubOrganisation2Click = () => {
    this.setState(() => {
      return {
        SubOrganisation1: false,
        SubOrganisation2: true
      };
    });
  };
  render() {
    const { onFundationClick, onOrganisationsClick, onLocalClick } = this.props;
    const { SubOrganisation1, SubOrganisation2 } = this.state;
    if (SubOrganisation1 === true) {
      return (
        <>
          <Section5OrganisationsMainText
            onFundationClick={onFundationClick}
            onOrganisationsClick={onOrganisationsClick}
            onLocalClick={onLocalClick}
          />
          <Section5SubOrganisations1
            onSubOrganisation1Click={this.onSubOrganisation1Click}
            onSubOrganisation2Click={this.onSubOrganisation2Click}
          />
        </>
      );
    }
    if (SubOrganisation2 === true) {
      return (
        <>
          <Section5OrganisationsMainText
            onFundationClick={onFundationClick}
            onOrganisationsClick={onOrganisationsClick}
            onLocalClick={onLocalClick}
          />
          <Section5SubOrganisations2
            onSubOrganisation1Click={this.onSubOrganisation1Click}
            onSubOrganisation2Click={this.onSubOrganisation2Click}
          />
        </>
      );
    }
  }
}

export default Section5Organisations;
