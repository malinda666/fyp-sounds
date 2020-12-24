import React from "react";
import './soundStep3.css'

export default class SoundForm2b extends React.Component {
  render() {
    const {
      oval,
      oval2,
      oval3,
      isThisContentExpl,
      oval4,
      yes,
      areYouTheOwnerOf,
      creatorName,
      uploadAudioFile,
      rectangle,
      rectangle2,
      next,
      no,
      rectangle3,
      rectangle4,
      upload,
      inputName,
      inputType,
      inputPlaceholder,
      inputRequired,
      wavOrMp3Format,
      rectangle5,
      category,
      backChevron,
      fypsoundslogoProps,
    } = this.props;

    return (
      <div className="soundform2b">
        <div className="overlap-group-C61RwL">
          <img className="oval-4eduM0" src={oval} />
          <img className="oval-BJQsbv" src={oval2} />
          <img className="oval-6sb1qn" src={oval3} />
          <h1 className="is-this-content-expl sofiapro-normal-white-30px">{isThisContentExpl}</h1>
          <img className="oval-ovOecM" src={oval4} />
          <div className="nexticon-copy-5">
            <div className="yes montserrat-light-white-20px">{yes}</div>
          </div>
          <Fypsoundslogo {...fypsoundslogoProps} />
          <div className="are-you-the-owner-of sofiapro-normal-white-30px">{areYouTheOwnerOf}</div>
          <div className="nexticon-copy-3">
            <div className="creator-name sofiapro-normal-white-30px">{creatorName}</div>
          </div>
          <div className="nexticon-copy-7">
            <div className="upload-audio-file sofiapro-normal-white-30px">{uploadAudioFile}</div>
          </div>
          <div className="nexticon-4eduM0">
            <img className="rectangle-f4xscB" src={rectangle} />
            <img className="rectangle-JuxZGf" src={rectangle2} />
            <div className="next montserrat-semi-bold-white-20px">{next}</div>
          </div>
          <div className="nexticon-copy-2">
            <div className="no montserrat-light-white-20px">{no}</div>
          </div>
          <img className="rectangle-4eduM0" src={rectangle3} />
          <img className="rectangle-BJQsbv" src={rectangle4} />
          <img className="upload" src={upload} />
          <input
            className="text-type montserrat-light-mountain-mist-20px"
            name={inputName}
            placeholder={inputPlaceholder}
            type={inputType}
            required={inputRequired}
          />
        </div>
        <div className="container-center-horizontal">
          <p className="wav-or-mp3-format montserrat-light-gravel-14px">{wavOrMp3Format}</p>
        </div>
        <div className="container-center-horizontal">
          <div className="nexticon-C61RwL">
            <img className="rectangle-JuxZGf" src={rectangle5} />
            <div className="category montserrat-semi-bold-white-20px">{category}</div>
            <img className="back-chevron" src={backChevron} />
          </div>
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


