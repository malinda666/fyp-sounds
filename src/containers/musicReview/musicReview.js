import React from "react";
import './musicReview.css'

export default class Musicsub extends React.Component {
   constructor(props) {
    super(props);
     this.state={
      creatorName : '',
      title: '',
      featuringArtist: ''
     }
    }

    handleFieldChange(event){
      if(event){
      this.setState({
       [event.target.id]: event.target.value,
     });
   }
    }

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
      clearCacheStoresProps,
      clearCacheCopy3Props,
      clearCacheCopy32Props,
    } = this.props;

    return (
      <div className="musicsub">
        <h1 className="review montserrat-bold-rose-pearl-24px">{review}</h1>
        <ClearCacheCopy {...{...clearCacheCopyProps,  handleFieldChange : event => this.handleFieldChange(event), id : 'creatorName', value :this.props.location.state.creatorName}} />
        <ClearCacheCopy {...{...clearCacheCopy2Props,  handleFieldChange : event => this.handleFieldChange(event), id : 'title', value :this.props.location.state.title}} className="clear-cache-copy-VMr6Om" />
        <ClearCacheCopy {...{...clearCacheCopy3Props, handleFieldChange : event => this.handleFieldChange(event), id : 'featuringArtist', value : this.props.location.state.featuringArtist}} className="clear-cache-copy-2" />
        <div className="clear-cache-copy-sXGHus">
          <div className="category sfprodisplay-regular-normal-granite-gray-20px">{category}</div>
          <div className="pop sfprodisplay-regular-normal-pink-swan-15px">{this.props.location.state.category}</div>
        </div>
        <div className="clear-cache-copy-sXGHus">
          <div className="content sfprodisplay-regular-normal-granite-gray-20px">{content}</div>
          <div className="explicit sfprodisplay-regular-normal-pink-swan-15px">{this.props.location.state.status == 'yes' ? 'Explicit' : 'NonExplicit'}</div>
        </div>
        <div className="clear-cache-copy-sXGHus">
          <div className="author sfprodisplay-regular-normal-granite-gray-20px">{author}</div>
          <div className="charlotte--019-amelio sfprodisplay-regular-normal-pink-swan-15px">
            {this.props.location.state.authorName}
          </div>
        </div>
        <div className="clear-cache">
          <div className="rectangle-19-copy-gUmma6"></div>
          <div className="rectangle-19-copy-gUmma6"></div>
          <div className="producer sfprodisplay-regular-normal-granite-gray-20px">{producer}</div>
          <div className="dj-sins sfprodisplay-regular-normal-pink-swan-15px">{this.props.location.state.producerName}</div>
        </div>
        <ClearCacheCopy3 {...{...clearCacheStoresProps, value: this.props.location.state.store}} />
        <div className="clear-cache">
          <div className="rectangle-19-copy-gUmma6"></div>
          <div className="rectangle-19-copy-gUmma6"></div>
          <div className="audio-file sfprodisplay-regular-normal-granite-gray-20px">{audioFile}</div>
          <div className="mysoundwav sfprodisplay-regular-normal-pink-swan-15px">{this.props.location.state.fileName}</div>
        </div>
        <ClearCacheCopy3 {...{...clearCacheCopy32Props, value: 'song'}} className="clear-cache-copy-5" />
        <div className="nexticon" style={{ backgroundImage: `url(${nextIcon})` }} onClick={() => {
                                                              this.props.history.push({
                                                                pathname: '/warn4',
                                                                state: { status: this.props.location.state.status,
                                                                  store: this.props.location.state.store, 
                                                                  coverImageURL : this.props.location.state.coverImageURL, 
                                                                  title : this.props.location.state.title, 
                                                                  email : this.props.location.state.email,
                                                                  featuringArtist : this.props.location.state.featuringArtist,
                                                                  producerName: this.props.location.state.producerName,
                                                                  creativeURL: this.props.location.state.creativeURL,
                                                                  creatorName: this.props.location.state.creatorName,
                                                                  authorName: this.props.location.state.authorName,
                                                                  audiofile : this.props.location.state.audiofile,
                                                                  albumcover: this.props.location.state.albumcover,
                                                                  category : this.props.location.state.category,
                                                                  type: 'song'}
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
        id ={this,this.props.id}
          className="text- sfprodisplay-regular-normal-pink-swan-15px"
          name={inputName}
          placeholder={inputPlaceholder}
          type={inputType}
          required={inputRequired}
          value={this.props.value}
          onChange={this.props.handleFieldChange}
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
        <div className="tik-tok sfprodisplay-regular-normal-pink-swan-15px">{this.props.value}</div>
      </div>
    );
  }
}
