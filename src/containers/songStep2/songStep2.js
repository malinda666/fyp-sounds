import React from "react";
import './songStep2.css';
import {
  Link
} from 'react-router-dom'; 
import removeEmojis from '../../utils/removeemoji'

export default class MusicForm3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      creatorName :'',
      authorName: '',
      producerName:'',
      featuringArtist:'',
      stores:'',
      errorMessage:''

    }
  }
  componentDidMount(){
    if(localStorage.getItem('data')){
        let data = JSON.parse(localStorage.getItem('data'));  
        this.setState({stores : data.stores, creatorName : data.name, authorName: data.authorName,})  ;  
    }
  }

  handleFieldChange(event){
     if(event){
     this.setState({
      [event.target.id]: event.target.value,
    });
  }
   }

   validateForm =() =>{
    if(!this.state.creatorName || this.state.creatorName === ''){
      this.setState({errorMessage : 'creator name field is required'});
      return false;
    }
    if(!this.state.authorName || this.state.authorName === ''){
      this.setState({errorMessage : 'author name field is required'});
      return false;
    }
    if(removeEmojis(this.state.creatorName) || removeEmojis(this.state.authorName)){
      this.setState({errorMessage : 'sorry emojis are not allowed'});
      return false;
    }
    return true;
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
        
        <img className="oval-QxM5SU" src={oval4} />
        <div className="musicform2-wrapper">

          <div className="ownership">
            <div className="are-you-the-owner-of sofiapro-normal-white-30px">{areYouTheOwnerOf}</div>
            <div className="yes montserrat-light-white-20px">{yes}</div>
          </div>

          <div className="publish-sec">
            <h1 className="publish-audio-to sofiapro-normal-white-30px">{publishAudioTo}</h1>
            <div className="all-stores montserrat-light-white-20px">{this.state?.stores}</div>
          </div>
          
        <Fypcopy {...fypcopyProps} />
        
        
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
          value={this.state.creatorName}
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
          value={this.state.authorName}
        />
          </div>
          <div className="nexticon" onClick={()=>{
          this.setState({errorMessage : ''});
          if(this.validateForm()){
            if(localStorage.getItem('data')){
            let data = JSON.parse(localStorage.getItem('data')); 
             data.authorName = this.state.authorName;
             data.name = this.state.creatorName;
             data.producerName = this.state.producerName;
             data.featuringArtist = this.state.featuringArtist;
             localStorage.setItem('data', JSON.stringify(data));
             this.props.history.push('/song3');
          }
        }
                                                                                }}>


          <img className="rectangle-rGr1Cp" src={rectangle} />
          <img className="rectangle-xd37is" src={rectangle2} />
          <div className="next montserrat-semi-bold-white-20px">{next}</div>
          <div>
            {this.state.errorMessage != '' ? <span className="error-message montserrat-light-red-14px">{this.state.errorMessage}</span> : null}
            </div>
        </div>
        </div>
        
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
          value={this.props.value}
        />
        </div>
    );
  }
}
