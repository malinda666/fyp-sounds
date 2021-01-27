import React from "react";
import './soundReview.css'

export default class SoundReview extends React.Component {
   constructor(props) {     
    super(props);
    this.state={
      name :''
    }
   }
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
        <ClearCacheCopy {...{...clearCacheCopyProps, id:'creator', value : this.props.location?.state?.name}} />
        <ClearCacheCopy {...{...clearCacheCopy2Props, id:'title', value : this.props.location?.state?.title}} className="clear-cache-copy-VMr6Om" />
        <div className="clear-cache-copy-awedTk">
          <div className="category sfprodisplay-regular-normal-granite-gray-20px">{category}</div>
          <div className="funny sfprodisplay-regular-normal-pink-swan-15px">{this.props.location?.state?.category}</div>
        </div>
        <div className="clear-cache-copy-awedTk">
          <div className="content sfprodisplay-regular-normal-granite-gray-20px">{content}</div>
          <div className="explicit sfprodisplay-regular-normal-pink-swan-15px">{this.props.location?.state?.content}</div>
        </div>
        <ClearCacheCopy3 {...{...clearCacheCopy3Props,  value : 'TikTok'}} />
        <div className="clear-cache-copy-">
          <div className="rectangle-19-copy-W5x3Ae"></div>
          <div className="rectangle-19-copy-W5x3Ae"></div>
          <div className="audio-file sfprodisplay-regular-normal-granite-gray-20px">{audioFile}</div>
          <div className="mysoundwav sfprodisplay-regular-normal-pink-swan-15px">{this.props.location?.state?.fileName}</div>
        </div>
        <ClearCacheCopy3 {...{...clearCacheCopy32Props,  value : 'sound'}} className="clear-cache-copy-5" />
        <div className="nexticon" style={{ backgroundImage: `url(${nextIcon})` }}  onClick={() => {
                                                              this.props.history.push({
                                                                pathname: '/warn4',
                                                                state: {
                                                                  name: this.props.location.state.name, 
                                                                  coverImageURL : this.props.location.state.coverImageURL, 
                                                                  title : this.props.location.state.title, 
                                                                  creativeURL: this.props.location.state.creativeURL,
                                                                  fileName : this.props.location.state.fileName,
                                                                  category: this.props.location.state.category,
                                                                  content: this.props.location.state.content,
                                                                  email : this.props.location.state.email,
                                                                  albumcover: this.props.location.state.albumcover,
                                                                  audiofile : this.props.location.state.audiofile,
                                                                  type: 'sound',
                                                                  stores: 'TikTok'
                                                                }
                                                                  });
                                                              }}>
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
        id = {this.props.id}
          className="text- sfprodisplay-regular-normal-pink-swan-15px"
          name={inputName}
          placeholder={inputPlaceholder}
          type={inputType}
          required={inputRequired}
          value ={ this.props.value}
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

