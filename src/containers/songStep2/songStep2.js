import React from "react";
import './songStep2.css';
import {
  Link
} from 'react-router-dom';

export default class MusicForm3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creatorName :'',
      authorName: '',
      producerName:'',
      featuringArtist:''

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
          <div className="all-stores montserrat-light-white-20px">{this.props.location?.state?.store}</div>
        </div>
        <div className="nexticon-copy-5">
          <div className="yes montserrat-light-white-20px">{yes}</div>
        </div>
        <Fypcopy {...fypcopyProps} />
        <div className="are-you-the-owner-of sofiapro-normal-white-30px">{areYouTheOwnerOf}</div>
        
          <div className="nexticon-copy-3">
            <div className="or-name sofiapro-normal-white-30px">{creatorName}</div>
          <input
          id='creatorName'
          className="text-field text-1 montserrat-light-mountain-mist-20px"
          name={inputName}
          placeholder={inputPlaceholder}
          type={inputType}
          required={inputRequired}
          onChange={this.handleFieldChange.bind(this)}
        />
          </div>
       
        
          <div className="nexticon-copy-6">
            <div className="or-name sofiapro-normal-white-30px">{authorName}</div>
            <input
            id='authorName'
          className="text-field text- montserrat-light-mountain-mist-20px"
          name={inputName2}
          placeholder={inputPlaceholder2}
          type={inputType2}
          required={inputRequired2}
          onChange={this.handleFieldChange.bind(this)}
        />
          </div>
       
        <NexticonCopy7 {...{...nexticonCopy7Props, handleFieldChange : event => this.handleFieldChange(event), id: 'producerName'}} />
        <div className="nexticon" onClick={()=>{
                                                                                this.props.history.push({
                                                                                pathname: '/songStep3',
                                                                                state: { 
                                                                                  store: this.props.location.state.store, 
                                                                                  coverImageURL : this.props.location.state.coverImageURL, 
                                                                                  albumcover: this.props.location.state.albumcover,
                                                                                  title : this.props.location.state.title, 
                                                                                  email : this.props.location.state.email,
                                                                                  featuringArtist : this.state.featuringArtist,
                                                                                  producerName: this.state.producerName,
                                                                                  creatorName: this.state.creatorName,
                                                                                  authorName: this.state.authorName
                                                                                }})
                                                                                }}>
          <img className="rectangle-rGr1Cp" src={rectangle} />
          <img className="rectangle-xd37is" src={rectangle2} />
          <div className="next montserrat-semi-bold-white-20px">{next}</div>
        </div>
       
        <NexticonCopy7 {...{...nexticonCopy72Props, handleFieldChange : event => this.handleFieldChange(event), id: 'featuringArtist'}} className="nexticon-copy-8" />    
      
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
        <div className={`nexticon-copy-7 ${className || ""}`}>
          <div className="producer-name sofiapro-normal-white-30px">{producerName}</div>
           <input
           id={this.props.id}
          className="text-field text- montserrat-light-mountain-mist-20px"
          name={this.props.id}
          placeholder={this.props.placeholder}
          type='text'
          required={true}
          onChange={this.props.handleFieldChange}
        />
        </div>
    );
  }
}
