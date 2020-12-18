import React from "react";
import './terms.css'

export default class Terms extends React.Component {
  render() {
    const {
      oval,
      oval2,
      oval3,
      oval4,
      rectangle,
      rectangleCopy,
      loremIpsumDolorSiCopy,
      rectangleCopy2,
      rectangle2,
      rectangle3,
      dismiss,
      terms,
      fypsoundslogoProps,
    } = this.props;

    return (
      <div className="terms">
        <div className="overlap-group-C61RwL">
          <img className="oval-4eduM0" src={oval} />
          <img className="oval-BJQsbv" src={oval2} />
          <img className="oval-6sb1qn" src={oval3} />
          <img className="oval-ovOecM" src={oval4} />
          <img className="rectangle-IZxxJF" src={rectangle} />
          <img className="rectangle-IZxxJF" src={rectangleCopy} />
          <Fypsoundslogo {...fypsoundslogoProps} />
        </div>
        <div className="container-center-horizontal">
          <p className="lorem-ipsu-or-si-copy montserrat-light-white-14px">{loremIpsumDolorSiCopy}</p>
        </div>
        <div className="container-center-horizontal">
          <img className="rectangle-copy" src={rectangleCopy2} />
        </div>
        <div className="container-center-horizontal">
          <div className="nexticon-copy-2 animate-enter">
            <img className="rectangle-pXVhQA" src={rectangle2} />
            <a >
              <img className="rectangle-OxJunE" src={rectangle3} />
            </a>
            <div className="dismiss montserrat-semi-bold-white-20px">{dismiss}</div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <h1 className="terms montserrat-bold-white-24px">{terms}</h1>
        </div>
      </div>
    );
  }
}


class Fypsoundslogo extends React.Component {
  render() {
    const { fypsoundsLogo } = this.props;

    return <div className="fypsoundslogo" style={{ backgroundImage: `url(${fypsoundsLogo})` }}></div>;
  }
}


