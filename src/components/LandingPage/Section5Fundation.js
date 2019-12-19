import React from "react";
import Section5SubFundation1 from "./Section5SubFundation1";
import Section5SubFundation2 from "./Section5SubFundation2";
import Section5SubFundation3 from "./Section5SubFundation3";
import Section5FundationMainText from "./Section5FundationMainText";

class Section5Fundation extends React.Component {
  state = {
    SubFundation1: true,
    SubFundation2: false,
    SubFundation3: false
  };
  //Fundations re-rendered by clicking on small btns

  onSubFundation1Click = () => {
    this.setState(() => {
      return {
        SubFundation1: true,
        SubFundation2: false,
        SubFundation3: false
      };
    });
  };

  onSubFundation2Click = () => {
    this.setState(() => {
      return {
        SubFundation1: false,
        SubFundation2: true,
        SubFundation3: false
      };
    });
  };
  onSubFundation3Click = () => {
    this.setState(() => {
      return {
        SubFundation1: false,
        SubFundation2: false,
        SubFundation3: true
      };
    });
  };
  render() {
    const { SubFundation1, SubFundation2, SubFundation3 } = this.state;
    const { onFundationClick, onOrganisationsClick, onLocalClick } = this.props;
    if (SubFundation1 === true) {
      return (
        <>
          <Section5FundationMainText
            onFundationClick={onFundationClick}
            onOrganisationsClick={onOrganisationsClick}
            onLocalClick={onLocalClick}
          />
          <Section5SubFundation1
            onSubFundation1Click={this.onSubFundation1Click}
            onSubFundation2Click={this.onSubFundation2Click}
            onSubFundation3Click={this.onSubFundation3Click}
          />
        </>
      );
    }
    if (SubFundation2 === true) {
      return (
        <>
          <Section5FundationMainText
            onFundationClick={onFundationClick}
            onOrganisationsClick={onOrganisationsClick}
            onLocalClick={onLocalClick}
          />
          <Section5SubFundation2
            onSubFundation1Click={this.onSubFundation1Click}
            onSubFundation2Click={this.onSubFundation2Click}
            onSubFundation3Click={this.onSubFundation3Click}
          />
        </>
      );
    }
    if (SubFundation3 === true) {
      return (
        <>
          <Section5FundationMainText
            onFundationClick={onFundationClick}
            onOrganisationsClick={onOrganisationsClick}
            onLocalClick={onLocalClick}
          />
          <Section5SubFundation3
            onSubFundation1Click={this.onSubFundation1Click}
            onSubFundation2Click={this.onSubFundation2Click}
            onSubFundation3Click={this.onSubFundation3Click}
          />
        </>
      );
    }
  }
}

export default Section5Fundation;
