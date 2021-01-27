import React from "react";
import './warn1.css'

export default class Warn1 extends React.Component {
  render() {
    const { warn1, spanText, spanText2, oopsSorryWeOnly, rectangle, rectangle2, dismiss } = this.props;

    return (
      <div className="warn1" style={{ backgroundImage: `url(${warn1})` }}>
        <div className="container-center-horizontal">
          <h1 className="ud83dude2c applecoloremoji-normal-white-60px">
            <span className="span1-PqxSWv">{spanText}</span>
            <span className="span2-PqxSWv">{spanText2}</span>
          </h1>
        </div>
        <div className="container-center-horizontal">
          <div className="oops-sorry-we-only montserrat-bold-white-25px">{oopsSorryWeOnly}</div>
        </div>
        <div className="container-center-horizontal"  onClick={() => this.props.history.push({
                                                                                                pathname : "/dashboard",
                                                                                                state: { email : this.props.location.state.email}})}>
          <div className="nexticon-copy-2 animate-enter">
            <img className="rectangle-pXVhQA" src={rectangle} />
           
              <img className="rectangle-OxJunE" src={rectangle2} />
         
            <div className="dismiss montserrat-semi-bold-white-20px">{dismiss}</div>
          </div>
        </div>
      </div>
    );
  }
}


