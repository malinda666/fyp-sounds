import React from "react";
import "./warn7.css";

export default class Warn7 extends React.Component {
    constructor(props) {     
    super(props);
   }
  render() {
    const { warn3Copy, textLabel, youGotSomeCh, rectangle, rectangle2, dismiss } = this.props;

    return (
      <div className="warn3copy" style={{ backgroundImage: `url(${warn3Copy})` }}>
        <h1 className="textlabel applecoloremoji-normal-white-60px">{textLabel}</h1>
        <div className="you-got-some-ch montserrat-bold-white-25px">{youGotSomeCh}</div>
        <div className="nexticon-copy-2 animate-enter">
          <div className="overlap-group">
            <img className="rectangle" src={rectangle} />
            <img className="rectangle-1" src={rectangle2} />
            <div className="dismiss montserratheading20pxsemiboldcenter-aligngray-900" onClick= {() => this.props.history.push('/dashboard')}>{dismiss}</div>
          </div>
        </div>
      </div>
    );
  }
}
