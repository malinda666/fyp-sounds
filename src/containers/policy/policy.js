import React from "react";
import {
  Link
} from 'react-router-dom';
import './policy.css'

export default class PrivacyPolicy extends React.Component {
  render() {
    const {
      privacyPolicy,
      loremIpsumDolorSi,
      oval,
      oval2,
      oval3,
      label1,
      faq,
      contact,
      privacyPolicy2,
      copyright2512021Al,
      fypsoundslogoProps,
      aboutProps,
      fypsoundslogo2Props,
    } = this.props;

    return (
      <div className="privacypolicy">
        <div className="container-center-horizontal">
          <div className="bar"></div>
        </div>
        <div className="container-center-horizontal">
          <h1 className="privacy-policy-C61RwL montserrat-bold-rose-pearl-24px">{privacyPolicy}</h1>
        </div>
        <div className="container-center-horizontal">
          <p className="lorem-ipsum-dolor-si montserrat-light-mountain-mist-14px">{loremIpsumDolorSi}</p>
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
            <div className="overlap-group">
              <img className="oval-4K0abD" src={oval3} />
              <div className="group-5">
                <div className="container-center-horizontal">
                  <p className="x montserrat-semi-bold-white-14px">{label1}</p>
                </div>
                <About {...aboutProps} />
                  <Link to="/faq">
                <div className="container-center-horizontal">
                 
                  <div className="faq montserrat-semi-bold-white-14px">{faq}</div>
            
                </div>
                      </Link>
                <div className="container-center-horizontal">
                  <div className="contact montserrat-semi-bold-white-14px">{contact}</div>
                </div>
                <Link to="/policy">
                  <div className="privacy-policy-IlweIA montserrat-semi-bold-white-14px">{privacyPolicy2}</div>
                </Link>
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
        <div className="about-IlweIA">
          <a href="/about">
            <div className="about-qv0Ulj montserrat-semi-bold-white-14px">{about}</div>
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
