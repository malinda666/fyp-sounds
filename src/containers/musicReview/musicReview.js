import React from "react";
import './musicReview.css'

export default class Musicsub extends React.Component {
   constructor(props) {
    super(props);
     this.state={
      creatorName : '',
      title: '',
      featuringArtist: '',
      data:null
     }
    }

    componentDidMount(){
      if(localStorage.getItem('data')){
        this.setState({data : JSON.parse(localStorage.getItem('data'))})
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
        <ClearCacheCopy {...{...clearCacheCopyProps,  handleFieldChange : event => this.handleFieldChange(event), id : 'creatorName', value :this.state.data ? this.state.data.name : ''}} />
        <ClearCacheCopy {...{...clearCacheCopy2Props,  handleFieldChange : event => this.handleFieldChange(event), id : 'title', value :this.state.data ? this.state.data.title :''}} className="clear-cache-copy-VMr6Om" />
        <ClearCacheCopy {...{...clearCacheCopy3Props, handleFieldChange : event => this.handleFieldChange(event), id : 'featuringArtist', value : this.state.data ? this.state.data.featuringArtist : ''}} className="clear-cache-copy-2" />
        <div className="clear-cache-copy-sXGHus">
          <div className="category sfprodisplay-regular-normal-granite-gray-20px">{category}</div>
          <div className="pop sfprodisplay-regular-normal-pink-swan-15px">{this.state.data ? this.state.data.category: ''}</div>
        </div>
        <div className="clear-cache-copy-sXGHus">
          <div className="content sfprodisplay-regular-normal-granite-gray-20px">{content}</div>
          <div className="explicit sfprodisplay-regular-normal-pink-swan-15px">{this.state.data ? this.state.data.content : ''}</div>
        </div>
        <div className="clear-cache-copy-sXGHus">
          <div className="author sfprodisplay-regular-normal-granite-gray-20px">{author}</div>
          <div className="charlotte--019-amelio sfprodisplay-regular-normal-pink-swan-15px">
            {this.state.data ? this.state.data.authorName : ''}
          </div>
        </div>
        <div className="clear-cache">
          <div className="rectangle-19-copy-gUmma6"></div>
          <div className="rectangle-19-copy-gUmma6"></div>
          <div className="producer sfprodisplay-regular-normal-granite-gray-20px">{producer}</div>
          <div className="dj-sins sfprodisplay-regular-normal-pink-swan-15px">{this.state.data ? this.state.data.producerName  :''}</div>
        </div>
        <ClearCacheCopy3 {...{...clearCacheStoresProps, value: this.state.data ? this.state.data.stores : ''}} />
        <div className="clear-cache">
          <div className="rectangle-19-copy-gUmma6"></div>
          <div className="rectangle-19-copy-gUmma6"></div>
          <div className="audio-file sfprodisplay-regular-normal-granite-gray-20px">{audioFile}</div>
          <div className="mysoundwav sfprodisplay-regular-normal-pink-swan-15px">{this.state.data ? this.state.data.fileName :''}</div>
        </div>
        <ClearCacheCopy3 {...{...clearCacheCopy32Props, value: 'song'}} className="clear-cache-copy-5" />
        <div className="nexticon" style={{ backgroundImage: `url(${nextIcon})` }} onClick={() => {
                                                              this.props.history.push('/warn4');
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
