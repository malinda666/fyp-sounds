import React from "react";
import './about.css'
import {
  Link
} from 'react-router-dom';
import Header from '../../components/header'
import Footer from '../../components/footer'

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
          <Header/>
        </div>
        <div className="container-center-horizontal">
          <Footer/>
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
      <div className="container-center-horizontal footer-items">
        <Link to="/about" className="full-height-a">
            <Link to="/about">
              <div className="montserrat-semi-bold-white-14px">{about}</div>
            </Link>
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


