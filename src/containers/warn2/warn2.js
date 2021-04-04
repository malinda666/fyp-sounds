import React from "react";
import './warn2.css'

export default class Warn2 extends React.Component {
  render() {
    const { warn2, Ud83DUde45Ud83CUdffb, spanText, spanText2, rectangle, rectangle2, dismiss } = this.props;

    return (
      <div className="warn2" style={{ backgroundImage: `url(${warn2})` }}>
        <div className="container-center-horizontal">
          <h1 className="ud83dude45ud83cudffb applecoloremoji-normal-white-60px">{Ud83DUde45Ud83CUdffb}</h1>
        </div>
        <div className="container-center-horizontal">
          <div className="this-track-has-been montserrat-bold-white-25px">
            <span className="span1-x6AwG0">{spanText}</span>
            <span className="span2-x6AwG0">{spanText2}</span>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="nexticon-copy-2 animate-enter">
            <img className="rectangle-pXVhQA" src={rectangle} />
            <a>
              <img className="rectangle-OxJunE" src={rectangle2} />
            </a>
            <div className="dismiss montserrat-semi-bold-white-20px">{dismiss}</div>
          </div>
        </div>
      </div>
    );
  }
}


