import React from "react";
import './warn6.css';

export default class Warn6 extends React.Component {
  render() {
    const {
      oval,
      oval2,
      oval3,
      oval4,
      rectangle,
      Ud83EUdd14,
      rectangle2,
      rectangle3,
      yes,
      rectangle4,
      rectangle5,
      no,
      areYouSureYouU2019DL,
      fypcopyProps,
    } = this.props;

    return (
      <div className="warn6">
        <div className="overlap-group-C61RwL">
          <img className="oval-4eduM0" src={oval} />
          <img className="oval-BJQsbv" src={oval2} />
          <img className="oval-6sb1qn" src={oval3} />
          <img className="oval-ovOecM" src={oval4} />
          <img className="rectangle" src={rectangle} />
        </div>
        <div className="container-center-horizontal">
          <h1 className="ud83eudd14 applecoloremoji-normal-white-60px">{Ud83EUdd14}</h1>
        </div>
        <div className="container-center-horizontal">
          <div className="group">
            <div className="nexticon-copy-3 animate-enter smart-layers-pointers ">
              <img className="rectangle-0Ttflx" src={rectangle2} />
              <a >
                <img className="rectangle-0Ttflx" src={rectangle3} />
              </a>
              <div className="yes montserrat-semi-bold-white-20px">{yes}</div>
            </div>
            <div className="nexticon-copy-2 animate-enter1">
              <img className="rectangle-0Ttflx" src={rectangle4} />
              <a >
                <img className="rectangle-0Ttflx" src={rectangle5} />
              </a>
              <div className="no montserrat-semi-bold-white-20px">{no}</div>
            </div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="are-you-su-ouu2019d-l sofiapro-normal-white-30px">{areYouSureYouU2019DL}</div>
        </div>
        <Fypcopy {...fypcopyProps} />
      </div>
    );
  }
}


class Fypcopy extends React.Component {
  render() {
    const { fypsoundsLogo } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="fypsoundslogo" style={{ backgroundImage: `url(${fypsoundsLogo})` }}></div>
      </div>
    );
  }
}

