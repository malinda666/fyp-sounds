import React from "react";
import './warn4.css'

export default class Warn4 extends React.Component {
  render() {
    const {
      oval,
      oval2,
      oval3,
      oval4,
      rectangle,
      rectangleCopy,
      spanText,
      spanText2,
      Ud83EUdd13,
      rectangle2,
      rectangle3,
      accept,
      rectangle4,
      rectangle5,
      no,
      byClickingU201Caccept,
      fypcopyProps,
    } = this.props;

    return (
      <div className="warn4">
        <div className="overlap-group-C61RwL">
          <img className="oval-4eduM0" src={oval} />
          <img className="oval-BJQsbv" src={oval2} />
          <img className="oval-6sb1qn" src={oval3} />
          <img className="oval-ovOecM" src={oval4} />
          <img className="rectangle-IZxxJF" src={rectangle} />
          <img className="rectangle-IZxxJF" src={rectangleCopy} />
        </div>
        <div className="container-center-horizontal">
          <div className="view-terms-here montserrat-light-white-14px">
            <span className="span1-mpB3ZZ">{spanText}</span>
            <span className="span2-mpB3ZZ">{spanText2}</span>
          </div>
        </div>
        <div className="container-center-horizontal">
          <h1 className="ud83eudd13 applecoloremoji-normal-white-60px">{Ud83EUdd13}</h1>
        </div>
        <div className="container-center-horizontal">
          <div className="group">
            <div className="nexticon-copy-3 animate-enter smart-layers-pointers ">
              <img className="rectangle-0Ttflx" src={rectangle2} />
              <a >
                <img className="rectangle" src={rectangle3} />
              </a>
              <div className="accept montserrat-semi-bold-white-20px">{accept}</div>
            </div>
            <a href="javascript:history.back()">
              <div className="nexticon-copy-2 animate-enter1">
                <img className="rectangle-0Ttflx" src={rectangle4} />
                <a >
                  <img className="rectangle" src={rectangle5} />
                </a>
                <div className="no montserrat-semi-bold-white-20px">{no}</div>
              </div>
            </a>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="by-clickin-201caccept sofiapro-normal-white-30px">{byClickingU201Caccept}</div>
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


