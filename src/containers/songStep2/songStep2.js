import React from "react";
import './songStep2.css';
import {
  Link
} from 'react-router-dom';

export default class MusicForm3 extends React.Component {
  render() {
    const {
      oval,
      oval2,
      oval3,
      publishAudioTo,
      oval4,
      allStores,
      yes,
      areYouTheOwnerOf,
      creatorName,
      authorName,
      rectangle,
      rectangle2,
      next,
      rectangle3,
      rectangle4,
      rectangle5,
      inputName,
      inputType,
      inputPlaceholder,
      inputRequired,
      inputName2,
      inputType2,
      inputPlaceholder2,
      inputRequired2,
      rectangleCopy,
      inputName3,
      inputType3,
      inputPlaceholder3,
      inputRequired3,
      inputName4,
      inputType4,
      inputPlaceholder4,
      inputRequired4,
      fypcopyProps,
      nexticonCopy7Props,
      nexticonCopy72Props,
    } = this.props;

    return (
      <div className="musicform3">
        <img className="oval-C61RwL" src={oval} />
        <img className="oval-VMr6Om" src={oval2} />
        <img className="oval-mzXdH9" src={oval3} />
        <h1 className="publish-audio-to sofiapro-normal-white-30px">{publishAudioTo}</h1>
        <img className="oval-QxM5SU" src={oval4} />
        <div className="nexticon-copy-2">
          <div className="all-stores montserrat-light-white-20px">{allStores}</div>
        </div>
        <div className="nexticon-copy-5">
          <div className="yes montserrat-light-white-20px">{yes}</div>
        </div>
        <Fypcopy {...fypcopyProps} />
        <div className="are-you-the-owner-of sofiapro-normal-white-30px">{areYouTheOwnerOf}</div>
        <Link to="/musicform3">
          <div className="nexticon-copy-3">
            <div className="or-name sofiapro-normal-white-30px">{creatorName}</div>
          </div>
        </Link>
        <Link to="/musicform3">
          <div className="nexticon-copy-6">
            <div className="or-name sofiapro-normal-white-30px">{authorName}</div>
          </div>
        </Link>
        <NexticonCopy7 {...nexticonCopy7Props} />
        <div className="nexticon">
          <img className="rectangle-rGr1Cp" src={rectangle} />
          <img className="rectangle-xd37is" src={rectangle2} />
          <div className="next montserrat-semi-bold-white-20px">{next}</div>
        </div>
        <img className="rectangle-C61RwL" src={rectangle3} />
        <img className="rectangle-VMr6Om" src={rectangle4} />
        <img className="rectangle-mzXdH9" src={rectangle5} />
        <input
          className="text- montserrat-light-mountain-mist-20px"
          name={inputName}
          placeholder={inputPlaceholder}
          type={inputType}
          required={inputRequired}
        />
        <input
          className="text- montserrat-light-mountain-mist-20px"
          name={inputName2}
          placeholder={inputPlaceholder2}
          type={inputType2}
          required={inputRequired2}
        />
        <NexticonCopy7 {...nexticonCopy72Props} className="nexticon-copy-8" />
        <img className="rectangle-copy" src={rectangleCopy} />
        <input
          className="text- montserrat-light-mountain-mist-20px"
          name={inputName3}
          placeholder={inputPlaceholder3}
          type={inputType3}
          required={inputRequired3}
        />
        <input
          className="text- montserrat-light-mountain-mist-20px"
          name={inputName4}
          placeholder={inputPlaceholder4}
          type={inputType4}
          required={inputRequired4}
        />
      </div>
    );
  }
}


class Fypcopy extends React.Component {
  render() {
    const { fypsoundsLogo } = this.props;

    return <div className="fypsoundslogo" style={{ backgroundImage: `url(${fypsoundsLogo})` }}></div>;
  }
}


class NexticonCopy7 extends React.Component {
  render() {
    const { producerName, className } = this.props;

    return (
      <Link to="/musicform3">
        <div className={`nexticon-copy-7 ${className || ""}`}>
          <div className="producer-name sofiapro-normal-white-30px">{producerName}</div>
        </div>
      </Link>
    );
  }
}
