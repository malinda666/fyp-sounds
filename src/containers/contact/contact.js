import React from "react";
import {
  Link
} from 'react-router-dom';
import './contact.css'
import Header from '../../components/header'
import Footer from '../../components/footer'

export default class Contact extends React.Component {
  render() {
    const {
      contact,
      spanText,
      spanText2,
      inputName,
      inputType,
      inputPlaceholder,
      inputRequired,
      rectangle,
      rectangleCopy2,
      send,
      oval,
      oval2,
      oval3,
      label1,
      faq,
      contact2,
      privacyPolicy,
      copyright2512021Al,
      overlapgroup1Props,
      overlapgroup12Props,
      fypsoundslogoProps,
      aboutProps,
      fypsoundslogo2Props,
    } = this.props;

    return (
      <div className="contact">
        <div className="container-center-horizontal">
          <div className="bar"></div>
        </div>
        <div className="container-center-horizontal">
          <h1 className="contact-C61RwL montserrat-bold-rose-pearl-24px">{contact}</h1>
        </div>
        <div className="container-center-horizontal">
          <a href="mailto:contact@fypsounds.com" className="full-height-a">
            <p className="or-shoot-us-an-email montserrat-light-gravel-14px">
              <span className="span1-YPZk8k">{spanText}</span><br/>
              <span className="span2-YPZk8k">{spanText2}</span>
            </p>
          </a>
        </div>
        <div className="container-center-horizontal">
          <form className="nexticon-copy" name="form2" action="form2" method="post">
            <Overlapgroup1 {...overlapgroup1Props} />
            <Overlapgroup1 {...overlapgroup12Props} className="overlap-group" />
            <div className="overlap-group2">
              <div className="rectangle-zlebQ8 border-class-1"></div>
              <textarea
                className="text-area montserrat-light-mountain-mist-14px"
                name={inputName}
                placeholder={inputPlaceholder}
                type={inputType}
                required={inputRequired}
              ></textarea>
            </div>
            <div className="overlap-group3">
              <a href="javascript:SubmitForm('form2')">
                <img className="rectangle-2m0hPv" src={rectangle} />
              </a>
              <a href="javascript:SubmitForm('form2')">
                <img className="rectangle-2m0hPv" src={rectangleCopy2} />
              </a>
              <div className="send montserrat-bold-white-20px">{send}</div>
            </div>
          </form>
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


class Overlapgroup1 extends React.Component {
  render() {
    const { rectangleCopy, inputName, inputType, inputPlaceholder, inputRequired, className } = this.props;

    return (
      <div className={`overlap-group1 ${className || ""}`}>
        <img className="rectangle-copy" src={rectangleCopy} />
        <input
          className="text- "
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
      <div className="container-center-horizontal footer-items">
          <a href="/about">
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
