import React from "react";
import './newSound.css';

export default class NewSound extends React.Component {

    constructor(props) {
    super(props);
    }
    
  render() {
    const {
      newSound,
      oval,
      oval2,
      oval3,
      oval4,
      isYourAudioA,
      rectangle,
      rectangle2,
      sound,
      rectangle3,
      rectangle4,
      song,
      shape,
      shape2,
      path,
      uploadACoverImage,
      audioTitle,
      tiktokAudioSubmiss,
      rectangle5,
      inputName,
      inputType,
      inputPlaceholder,
      inputRequired,
      ArtworkCanU2019TInclu,
      fypsoundslogoProps,
    } = this.props;

    return (
      <div className="newsound" >
        <div className="overlap-group-C61RwL">
          <img className="oval-4eduM0" src={oval} />
          <img className="oval-BJQsbv" src={oval2} />
          <img className="oval-6sb1qn" src={oval3} />
          <img className="oval-ovOecM" src={oval4} />
        </div>
        <div className="container-center-horizontal">
          <h1 className="is-your-audio-a sofiapro-normal-white-30px">{isYourAudioA}</h1>
        </div>
        <div className="container-center-horizontal">
          <div className="group">
            <div className="nexticon smart-layers-pointers" onClick={() => {this.props.history.push('/soundStep1')}}>
              <img className="rectangle-bKk8JK" src={rectangle} />
              
                <img className="rectangle-bKk8JK" src={rectangle2} />
              
              <div className="sound montserrat-semi-bold-white-20px">{sound}</div>
            </div>
            <div className="nexticon-copy animate-enter smart-layers-pointers ">
              <img className="rectangle-bKk8JK" src={rectangle3} />
              
                <img className="rectangle-bKk8JK" src={rectangle4} />
              
              <div className="song montserrat-semi-bold-white-20px">{song}</div>
            </div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="group-2-copy">
            <div className="rectangle-2"></div>
            <div className="upload smart-layers-pointers ">
              <img className="shape-rlzqmL" src={shape} />
              <img className="shape-UPUXXo" src={shape2} />
              <img className="path" src={path} />
            </div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="upload-a-cover-image sofiapro-normal-white-30px">{uploadACoverImage}</div>
        </div>
        <div className="container-center-horizontal">
          <div className="audio-title sofiapro-normal-white-30px">{audioTitle}</div>
        </div>
        <div className="container-center-horizontal">
          <div className="tik-tok-au-io-submiss montserrat-medium-white-20px">{tiktokAudioSubmiss}</div>
        </div>
        <div className="container-center-horizontal">
          <div className="bar">
            <Fypsoundslogo {...fypsoundslogoProps} />
            <div className="overlap-group1">
              <img className="rectangle" src={rectangle5} />
              <input
                className="text-type-here montserrat-light-mountain-mist-20px animate-enter1"
                name={inputName}
                placeholder={inputPlaceholder}
                type={inputType}
                required={inputRequired}
              />
            </div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <p className="artwork-ca-019t-inclu montserrat-light-gravel-14px">{ArtworkCanU2019TInclu}</p>
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


