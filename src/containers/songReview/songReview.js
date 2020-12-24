import React from "react";
import './songReview.css';

export default class Musicsub extends React.Component {
  render() {
    const {
      review,
      category,
      pop,
      content,
      explicit,
      author,
      charlotteDU2019Amelio,
      producer,
      djSins,
      audioFile,
      mysoundWav,
      nextIcon,
      submit,
      clearCacheCopyProps,
      clearCacheCopy2Props,
      clearCacheCopy3Props,
      clearCacheCopy3Props,
      clearCacheCopy32Props,
    } = this.props;

    return (
      <div className="musicsub">
        <h1 className="review montserrat-bold-rose-pearl-24px">{review}</h1>
        <ClearCacheCopy {...clearCacheCopyProps} />
        <ClearCacheCopy {...clearCacheCopy2Props} className="clear-cache-copy-VMr6Om" />
        <ClearCacheCopy {...clearCacheCopy3Props} className="clear-cache-copy-2" />
        <div className="clear-cache-copy-sXGHus">
          <div className="category sfprodisplay-regular-normal-granite-gray-20px">{category}</div>
          <div className="pop sfprodisplay-regular-normal-pink-swan-15px">{pop}</div>
        </div>
        <div className="clear-cache-copy-sXGHus">
          <div className="content sfprodisplay-regular-normal-granite-gray-20px">{content}</div>
          <div className="explicit sfprodisplay-regular-normal-pink-swan-15px">{explicit}</div>
        </div>
        <div className="clear-cache-copy-sXGHus">
          <div className="author sfprodisplay-regular-normal-granite-gray-20px">{author}</div>
          <div className="charlotte--019-amelio sfprodisplay-regular-normal-pink-swan-15px">
            {charlotteDU2019Amelio}
          </div>
        </div>
        <div className="clear-cache">
          <div className="rectangle-19-copy-gUmma6"></div>
          <div className="rectangle-19-copy-gUmma6"></div>
          <div className="producer sfprodisplay-regular-normal-granite-gray-20px">{producer}</div>
          <div className="dj-sins sfprodisplay-regular-normal-pink-swan-15px">{djSins}</div>
        </div>
        <ClearCacheCopy3 {...clearCacheCopy3Props} />
        <div className="clear-cache">
          <div className="rectangle-19-copy-gUmma6"></div>
          <div className="rectangle-19-copy-gUmma6"></div>
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
      <div className={`clear-cache ${className || ""}`}>
        <div className="rectangle-19-copy-gUmma6"></div>
        <div className="rectangle-19-copy-gUmma6"></div>
        <div className="stores sfprodisplay-regular-normal-granite-gray-20px">{stores}</div>
        <div className="tik-tok sfprodisplay-regular-normal-pink-swan-15px">{tiktok}</div>
      </div>
    );
  }
}
