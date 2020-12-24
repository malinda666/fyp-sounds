import React from "react";
import './soundReview.css'

export default class SoundReview extends React.Component {
  render() {
    const {
      review,
      category,
      funny,
      content,
      explicit,
      audioFile,
      mysoundWav,
      nextIcon,
      submit,
      clearCacheCopyProps,
      clearCacheCopy2Props,
      clearCacheCopy3Props,
      clearCacheCopy32Props,
    } = this.props;

    return (
      <div className="soundsub">
        <h1 className="review montserrat-bold-rose-pearl-24px">{review}</h1>
        <ClearCacheCopy {...clearCacheCopyProps} />
        <ClearCacheCopy {...clearCacheCopy2Props} className="clear-cache-copy-VMr6Om" />
        <div className="clear-cache-copy-awedTk">
          <div className="category sfprodisplay-regular-normal-granite-gray-20px">{category}</div>
          <div className="funny sfprodisplay-regular-normal-pink-swan-15px">{funny}</div>
        </div>
        <div className="clear-cache-copy-awedTk">
          <div className="content sfprodisplay-regular-normal-granite-gray-20px">{content}</div>
          <div className="explicit sfprodisplay-regular-normal-pink-swan-15px">{explicit}</div>
        </div>
        <ClearCacheCopy3 {...clearCacheCopy3Props} />
        <div className="clear-cache-copy-">
          <div className="rectangle-19-copy-W5x3Ae"></div>
          <div className="rectangle-19-copy-W5x3Ae"></div>
          <div className="audio-file sfprodisplay-regular-normal-granite-gray-20px">{audioFile}</div>
          <div className="mysoundwav sfprodisplay-regular-normal-pink-swan-15px">{mysoundWav}</div>
        </div>
        <ClearCacheCopy3 {...clearCacheCopy32Props} className="clear-cache-copy-5" />
        <div className="nexticon" style={{ backgroundImage: `url(${nextIcon})` }}>
          <div className="submit montserrat-semi-bold-white-20px">{submit}</div>
        </div>
      </div>
    );
  }
}


class ClearCacheCopy extends React.Component {
  render() {
    const { creator, inputName, inputType, inputPlaceholder, inputRequired, className } = this.props;

    return (
      <div className={`clear-cache-copy-C61RwL ${className || ""}`}>
        <div className="creator sfprodisplay-regular-normal-granite-gray-20px">{creator}</div>
        <input
          className="text- sfprodisplay-regular-normal-pink-swan-15px"
          name={inputName}
          placeholder={inputPlaceholder}
          type={inputType}
          required={inputRequired}
        />
      </div>
    );
  }
}


class ClearCacheCopy3 extends React.Component {
  render() {
    const { stores, tiktok, className } = this.props;

    return (
      <div className={`clear-cache-copy- ${className || ""}`}>
        <div className="rectangle-19-copy-W5x3Ae"></div>
        <div className="rectangle-19-copy-W5x3Ae"></div>
        <div className="stores sfprodisplay-regular-normal-granite-gray-20px">{stores}</div>
        <div className="tik-tok sfprodisplay-regular-normal-pink-swan-15px">{tiktok}</div>
      </div>
    );
  }
}

