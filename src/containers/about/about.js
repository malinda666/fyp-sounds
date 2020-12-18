import React from "react";
import './about.css'
import {
  Link
} from 'react-router-dom';

export default class About extends React.Component {
  render() {
    const {
      about,
      loremIpsumDolorSi,
      oval,
      oval2,
      oval3,
      label1,
      faq,
      contact,
      privacyPolicy,
      copyright2512021Al,
      fypsoundslogoProps,
      about2Props,
      fypsoundslogo2Props,
    } = this.props;

    return (
      <div className="about">
        <div className="container-center-horizontal">
          <div className="bar"></div>
        </div>
        <div className="container-center-horizontal">
          <h1 className="about-C61RwL montserrat-bold-rose-pearl-24px">{about}</h1>
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
                <About2 {...about2Props} />
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


class About2 extends React.Component {
  render() {
    const { about } = this.props;

    return (
      <div className="container-center-horizontal">
        <Link to="/about" className="full-height-a">
          <div className="about-IlweIA">
            <Link to="/about">
              <div className="about-qv0Ulj montserrat-semi-bold-white-14px">{about}</div>
            </Link>
          </div>
        </Link>
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


