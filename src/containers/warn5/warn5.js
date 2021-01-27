import React from "react";
import './warn5.css'

export default class Warn5 extends React.Component {
  constructor(props) {     
    super(props);
   }

  render() {
    const {
      oval,
      oval2,
      oval3,
      oval4,
      rectangle,
      rectangleCopy,
      Ud83CUdf89,
      rectangle2,
      rectangle3,
      dismiss,
      congratulationsYou,
      fypcopyProps,
    } = this.props;

    return (
      <div className="warn5">
        <div className="bg-image-wrap">
          <div className="bg-image1" style={{ backgroundImage: `url(${oval})` }} ></div>
          <div className="bg-image2" style={{ backgroundImage: `url(${oval2})` }} ></div>
          <div className="bg-image3" style={{ backgroundImage: `url(${oval3})` }}></div>
          <div className="bg-image4" style={{ backgroundImage: `url(${oval4})` }}></div>
          <img className="rectangle-IZxxJF" src={rectangle} />
          <img className="rectangle-IZxxJF" src={rectangleCopy} />
        </div>
        <div className="container-center-horizontal">
          <h1 className="ud83cudf89 applecoloremoji-normal-white-60px">{Ud83CUdf89}</h1>
        </div>
        <div className="container-center-horizontal">
          <div className="nexticon-copy-2 animate-enter" onClick={() => {this.props.history.push({
                                                                          pathname : '/dashboard',
                                                                          state: {
                                                                              email : this.props.location.state.email
                                                                            }
                                                                          })}}>
            <img className="rectangle-pXVhQA" src={rectangle2} />
            <a >
              <img className="rectangle-OxJunE" src={rectangle3} />
            </a>
            <div className="dismiss montserrat-semi-bold-white-20px">{dismiss}</div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="congratulations-you sofiapro-normal-white-30px">{congratulationsYou}</div>
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


