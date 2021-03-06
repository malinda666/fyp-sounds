import React from "react";
import './faq.css'
import {
  Link
} from 'react-router-dom';
import Header from '../../components/header'
import Footer from '../../components/footer'

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


class About extends React.Component {
  render() {
    const { about } = this.props;

    return (
      <div className="container-center-horizontal footer-items">
          <a href='/about' >
            <div className="montserrat-semi-bold-white-14px">{about}</div>
          </a>
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

