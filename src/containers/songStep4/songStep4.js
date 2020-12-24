import React from "react";
import './songStep4.css'

export default class MusicForm5 extends React.Component {
  render() {
    const {
      oval,
      oval2,
      oval3,
      oval4,
      yes,
      isThisContentExpl,
      rectangle,
      category,
      backChevron,
      rectangle2,
      upload,
      uploadAudioFile,
      rectangle3,
      rectangle4,
      next,
      wavOrMp3Format,
      fypcopyProps,
    } = this.props;

    return (
      <div className="musicform5">
        <div className="overlap-group-C61RwL">
          <img className="oval-4eduM0" src={oval} />
          <img className="oval-BJQsbv" src={oval2} />
          <img className="oval-6sb1qn" src={oval3} />
          <img className="oval-ovOecM" src={oval4} />
        </div>
        <div className="container-center-horizontal">
          <div className="nexticon-copy-3 animate-enter smart-layers-pointers ">
            <div className="yes montserrat-light-white-20px">{yes}</div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <h1 className="is-this-content-expl sofiapro-normal-white-30px">{isThisContentExpl}</h1>
        </div>
        <Fypcopy {...fypcopyProps} />
        <div className="container-center-horizontal">
          <div className="nexticon-C61RwL">
            <img className="rectangle-NnOCDr" src={rectangle} />
            <div className="category montserrat-semi-bold-white-20px">{category}</div>
            <img className="back-chevron" src={backChevron} />
          </div>
        </div>
        <div className="container-center-horizontal">
          <img className="rectangle-C61RwL" src={rectangle2} />
        </div>
        <div className="container-center-horizontal">
          <img className="upload" src={upload} />
        </div>
        <div className="container-center-horizontal">
          <div className="upload-audio-file sofiapro-normal-white-30px">{uploadAudioFile}</div>
        </div>
        <div className="container-center-horizontal">
          <div className="nexticon-VMr6Om">
            <img className="rectangle-On3W7C" src={rectangle3} />
            <img className="rectangle-NnOCDr" src={rectangle4} />
            <div className="next montserrat-semi-bold-white-20px">{next}</div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <p className="wav-or-mp3-format montserrat-light-gravel-14px">{wavOrMp3Format}</p>
        </div>
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


