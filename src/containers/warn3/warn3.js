import React from "react";
import "./warn3.css";

export default class Warn3 extends React.Component {
    constructor(props) {     
    super(props);
   }
  render() {
    const { warn3, textLabel, pleaseAddAPaypal, rectangle, rectangle2, dismiss } = this.props;

    return (
      <div className="warn3" style={{ backgroundImage: `url(${warn3})` }}>
        <h1 className="textlabel applecoloremoji-normal-white-60px">{textLabel}</h1>
        <div className="please-add-a-paypal montserrat-bold-white-25px">{pleaseAddAPaypal}</div>
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
