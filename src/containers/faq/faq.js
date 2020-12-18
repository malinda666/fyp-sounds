import React from "react";
import './faq.css'
import {
  Link
} from 'react-router-dom';

export default class FAQ extends React.Component {
  render() {
    const {
      loremIpsumDolorSi,
      question,
      loremIpsumDolorSiCopy,
      question2,
      loremIpsumDolorSiCopy2,
      question3,
      loremIpsumDolorSiCopy3,
      question4,
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
      <div className="faq">
        <div className="container-center-horizontal">
          <div className="bar"></div>
        </div>
        <div className="container-center-horizontal">
          <p className="lorem-ipsum-dolor-si montserrat-light-mountain-mist-14px">{loremIpsumDolorSi}</p>
        </div>
        <div className="container-center-horizontal">
          <h1 className="question-C61RwL montserrat-bold-rose-pearl-24px">{question}</h1>
        </div>
        <div className="container-center-horizontal">
          <p className="lorem-ipsu-or-si-copy montserrat-light-mountain-mist-14px">{loremIpsumDolorSiCopy}</p>
        </div>
        <div className="container-center-horizontal">
          <div className="question-VMr6Om montserrat-bold-rose-pearl-24px">{question2}</div>
        </div>
        <div className="container-center-horizontal">
          <p className="lorem-ipsu--si-copy-2 montserrat-light-mountain-mist-14px">{loremIpsumDolorSiCopy2}</p>
        </div>
        <div className="container-center-horizontal">
          <div className="question-mzXdH9 montserrat-bold-rose-pearl-24px">{question3}</div>
        </div>
        <div className="container-center-horizontal">
          <p className="lorem-ipsu--si-copy-3 montserrat-light-mountain-mist-14px">{loremIpsumDolorSiCopy3}</p>
        </div>
        <div className="container-center-horizontal">
          <div className="question-QxM5SU montserrat-bold-rose-pearl-24px">{question4}</div>
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
                <div className="container-center-horizontal">
                  <Link to="/faq" className="full-height-a">
                    <div className="faq montserrat-semi-bold-white-14px">{faq}</div>
                  </Link>
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
        <div className="about-IlweIA">
          <a >
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

