import React from "react";
import './forgotPassword.css'
import {
  Link
} from 'react-router-dom';


export default class Recovery extends React.Component {
  render() {
    const {
      forgotYourAccess,
      rectangle,
      inputName,
      inputType,
      inputPlaceholder,
      inputRequired,
      rectangle2,
      send,
      Ud83EUdd26Ud83CUdffeU200DU2640Ufe0F,
      oval,
      oval2,
      oval3,
      label1,
      faq,
      contact,
      privacyPolicy,
      copyright2512021Al,
      fypsoundslogoProps,
      aboutProps,
      fypsoundslogo2Props,
    } = this.props;

    return (
      <div className="recovery">
        <div className="container-center-horizontal">
          <div className="nexticon">
            <div className="forgot-your-access montserrat-semi-bold-torch-red-25px">{forgotYourAccess}</div>
            <div className="overlap-group">
              <img className="rectangle-NaDWhO" src={rectangle} />
              <input
                className="text-email montserrat-light-mountain-mist-14px"
                name={inputName}
                placeholder={inputPlaceholder}
                type={inputType}
                required={inputRequired}
              />
            </div>
            <div className="overlap-group1">
              <img className="rectangle-3cn1mj" src={rectangle2} />
              <div className="send montserrat-semi-bold-white-20px">{send}</div>
            </div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <h1 className="ud83eudd26-u2640ufe0f montserrat-semi-bold-white-45px">
            {Ud83EUdd26Ud83CUdffeU200DU2640Ufe0F}
          </h1>
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
            <div className="overlap-group2">
              <img className="oval-S4xVmX" src={oval3} />
              <div className="group-5">
                <div className="container-center-horizontal">
                  <Link to="/recovery" className="full-height-a">
                    <p className="x montserrat-semi-bold-white-14px">{label1}</p>
                  </Link>
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
        <div className="about-Tai3pd">
          <a href="/about">
            <div className="about-zEflc1 montserrat-semi-bold-white-14px">{about}</div>
          </a>
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

