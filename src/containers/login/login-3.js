import React from "react";
import './login.css'

export default class LoginErrorMessages extends React.Component {
  render() {
    const {
      or,
      rectangle,
      login,
      spanText,
      spanText2,
      rectangle2,
      join,
      oval,
      oval2,
      oval3,
      label1,
      faq,
      contact,
      privacyPolicy,
      copyright2512021Al,
      AnEmailIsRequire,
      APasswordIsRequi,
      AnEmailIsRequire2,
      APasswordIsRequi2,
      overlapgroupProps,
      overlapgroup1Props,
      overlapgroup2Props,
      overlapgroup12Props,
      fypsoundslogoProps,
      aboutProps,
      fypsoundslogo2Props,
    } = this.props;

    return (
      <form className="loginerrormessages" name="form1" action="form1" method="post">
        <div className="container-center-horizontal">
          <div className="nexticon-copy">
            <h1 className="or sofiapro-normal-torch-red-25px">{or}</h1>
            <Overlapgroup {...overlapgroupProps} />
            <Overlapgroup1 {...overlapgroup1Props} />
            <div className="overlap-group-PVhVGJ">
              <img className="rectangle-JWSful" src={rectangle} />
              <div className="login montserrat-bold-white-20px">{login}</div>
            </div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="bar"></div>
        </div>
        <div className="container-center-horizontal">
          <p className="forgot-your-access montserrat-light-gravel-14px">
            <span className="span1-VhPCr0">{spanText}</span>
            <span className="span2-VhPCr0">{spanText2}</span>
          </p>
        </div>
        <div className="container-center-horizontal">
          <div className="nexticon">
            <Overlapgroup {...overlapgroup2Props} className="overlap-group3" />
            <Overlapgroup1 {...overlapgroup12Props} />
            <div className="overlap-group-PVhVGJ">
              <img className="rectangle-JWSful" src={rectangle2} />
              <a href="javascript:SubmitForm('form1')">
                <div className="join montserrat-bold-white-20px">{join}</div>
              </a>
            </div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="group">
            <img className="oval-NOXmfT" src={oval} />
            <img className="oval-E582nk" src={oval2} />
            <Fypsoundslogo {...fypsoundslogoProps} />
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="footer">
            <div className="overlap-group6">
              <img className="oval-ipjwHu" src={oval3} />
              <div className="group-5">
                <div className="container-center-horizontal">
                  <p className="x montserrat-semi-bold-white-14px">{label1}</p>
                </div>
                <About {...aboutProps} />
                <div className="container-center-horizontal">
                  <div className="faq montserrat-semi-bold-white-14px">{faq}</div>
                </div>
                <div className="container-center-horizontal">
                  <div className="contact montserrat-semi-bold-white-14px">{contact}</div>
                </div>
                <div className="privacy-policy montserrat-semi-bold-white-14px">{privacyPolicy}</div>
              </div>
            </div>
            <Fypsoundslogo2 {...fypsoundslogo2Props} />
            <div className="container-center-horizontal">
              <p className="copyright--51-2021-al montserrat-normal-white-13px">{copyright2512021Al}</p>
            </div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <p className="an-email-is-require-C61RwL montserrat-light-red-14px">{AnEmailIsRequire}</p>
        </div>
        <div className="container-center-horizontal">
          <p className="a-password-is-requi-C61RwL montserrat-light-red-14px">{APasswordIsRequi}</p>
        </div>
        <div className="container-center-horizontal">
          <p className="an-email-is-require-VMr6Om montserrat-light-red-14px">{AnEmailIsRequire2}</p>
        </div>
        <div className="container-center-horizontal">
          <p className="a-password-is-requi-VMr6Om montserrat-light-red-14px">{APasswordIsRequi2}</p>
        </div>
      </form>
    );
  }
}


class Overlapgroup extends React.Component {
  render() {
    const { rectangle, inputName, inputType, inputPlaceholder, inputRequired, className } = this.props;

    return (
      <div className={`overlap-group ${className || ""}`}>
        <img className="rectangle-ZtaLEy" src={rectangle} />
        <input
          className="text montserrat-light-mountain-mist-14px"
          name={inputName}
          placeholder={inputPlaceholder}
          type={inputType}
          required={inputRequired}
        />
      </div>
    );
  }
}


class Overlapgroup1 extends React.Component {
  render() {
    const { inputName, inputType, inputPlaceholder, inputRequired } = this.props;

    return (
      <div className="overlap-group1">
        <div className="rectangle-Vg8Dgr border-class-1"></div>
        <input
          className="text montserrat-light-mountain-mist-14px"
          name={inputName}
          placeholder={inputPlaceholder}
          type={inputType}
          required={inputRequired}
        />
      </div>
    );
  }
}


class Fypsoundslogo extends React.Component {
  render() {
    const { fypsoundsLogo } = this.props;

    return <div className="fypsoundslogo-NOXmfT" style={{ backgroundImage: `url(${fypsoundsLogo})` }}></div>;
  }
}


class About extends React.Component {
  render() {
    const { about } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="about-7pmZoB">
            <div className="about-rVE2UT montserrat-semi-bold-white-14px">{about}</div>
          
        </div>
      </div>
    );
  }
}


class Fypsoundslogo2 extends React.Component {
  render() {
    const { fypsoundsLogo } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="fypsoundslogo-iPe1yZ" style={{ backgroundImage: `url(${fypsoundsLogo})` }}></div>
      </div>
    );
  }
}


