import React from "react";
import {
  Link
} from 'react-router-dom';
import './contact.css'
import Header from '../../components/header'
import Footer from '../../components/footer'
import contactManagementService from "../../services/contactManagementService";
import HashLoader from 'react-spinners/HashLoader'
import LoadingOverlay from "react-loading-overlay";

export default class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading : false, 
      name:'',
      email:'',
      message:'',
      successMessage:'',
      errorMessage: ''     
    }
  }

  handleFieldChange(event){
    if(event){
    this.setState({
     [event.target.id]: event.target.value,
   });
 }
}

send = () => {
  if(this.state.name && this.state.name != '' && this.state.email && this.state.email != ''){
    this.setState({loading : true});
    contactManagementService.send({name : this.state.name, email : this.state.email, message : this.state.message})
    .then(response => {
      if(response.status === 200){
        this.setState({successMessage : 'we will contact you soon', errorMessage : '', name : '', email: '', message: ''});
      }
      else {
        this.setState({errorMessage : 'unable to contact fyp', successMessage : ''});
      }
      this.setState({loading : false});
    }).catch(err => {
      this.setState({errorMessage : 'unable to contact fyp', successMessage : ''});
      this.setState({loading : false});
    })
  }else {
    this.setState({errorMessage : 'please enter your name and email', successMessage : ''});
    this.setState({loading : false});
  }
  
}

  render() {
    const {
      contact,
      spanText,
      spanText2,
      inputName,
      inputType,
      inputPlaceholder,
      inputRequired,
      rectangle,
      rectangleCopy2,
      send,
      oval,
      oval2,
      oval3,
      label1,
      faq,
      contact2,
      privacyPolicy,
      copyright2512021Al,
      overlapgroup1Props,
      overlapgroup12Props,
      fypsoundslogoProps,
      aboutProps,
      fypsoundslogo2Props,
    } = this.props;

    return (
      <LoadingOverlay
      active={this.state.loading}
      spinner={<HashLoader color={"#f24b76"} size={100}/>}
    >
      <div className="contact">
        <div className="container-center-horizontal">
          <div className="bar"></div>
        </div>
        <div className="container-center-horizontal">
          <h1 className="contact-C61RwL montserrat-bold-rose-pearl-24px">{contact}</h1>
        </div>
        <div className="container-center-horizontal">
          <a href="mailto:contact@fypsounds.com" className="full-height-a">
            <p className="or-shoot-us-an-email montserrat-light-gravel-14px">
              <span className="span1-YPZk8k">{spanText}</span><br/>
              <span className="span2-YPZk8k">{spanText2}</span>
            </p>
          </a>
        </div>
        <div className="container-center-horizontal">
          <form className="nexticon-copy" name="form2" action="form2" method="post">
            <Overlapgroup1 {...{...overlapgroup1Props, handleFieldChange : event => this.handleFieldChange(event), id: 'name', value : this.state.name}} className="montserrat-light-mountain-mist-14px"  />
            <Overlapgroup1 {...{...overlapgroup12Props, handleFieldChange : event => this.handleFieldChange(event), id: 'email', value : this.state.email}} className="overlap-group montserrat-light-mountain-mist-14px" />
            <div className="overlap-group2">
              <div className="rectangle-zlebQ8 border-class-1"></div>
              <textarea
              id='message'
                className="text-area montserrat-light-mountain-mist-14px"
                name={inputName}
                placeholder={inputPlaceholder}
                type={inputType}
                required={inputRequired}
                onChange={this.handleFieldChange.bind(this)}
                value={this.state.message}
              ></textarea>
            </div>
            <div className="overlap-group3" onClick={()=> this.send()}>
            
                <img className="rectangle-2m0hPv" src={rectangle} />
             
           
                <img className="rectangle-2m0hPv" src={rectangleCopy2} />
             
              <div className="send montserrat-bold-white-20px">{send}</div>
            </div>
          </form>
        </div>
        <div className="container-center-horizontal">
          <Header/>
        </div>
        <div className="container-center-horizontal">
          <Footer/>
        </div>
        <div className="container-center-horizontal">
           {this.state.errorMessage && this.state.errorMessage != '' ? 
            <div className="container-center-horizontal">
              <p className="incorrect-code-che montserrat-light-red-14px">{this.state.errorMessage}</p>
            </div> : null } 
          
        </div>

        <div className="container-center-horizontal">
           {this.state.successMessage && this.state.successMessage != '' ? 
            <div className="container-center-horizontal">
              <p className="correct-code-che montserrat-light-green-14px">{this.state.successMessage}</p>
            </div> : null } 
          
        </div>
      </div>
      </LoadingOverlay>
    );
  }
}


class Overlapgroup1 extends React.Component {
  render() {
    const { rectangleCopy, inputName, inputType, inputPlaceholder, inputRequired, className } = this.props;

    return (
      <div className={`overlap-group1 ${className || ""}`}>
        <img className="rectangle-copy" src={rectangleCopy} />
        <input
          className="text- "
          name={inputName}
          placeholder={inputPlaceholder}
          type={inputType}
          id={this.props.id}
          onChange={this.props.handleFieldChange}
          value={this.props.value}
        />
      </div>
    );
  }
}


class Fypsoundslogo extends React.Component {
  render() {
    const { fypsoundsLogo } = this.props;

    return <div className="fypsoundslogo-NOXmfT" style={{ backgroundImage: `url(${fypsoundsLogo})` }}></div>;
  }
}


class About extends React.Component {
  render() {
    const { about } = this.props;

    return (
      <div className="container-center-horizontal footer-items">
          <a href="/about">
            <div className="montserrat-semi-bold-white-14px">{about}</div>
          </a>
      </div>
    );
  }
}


class Fypsoundslogo2 extends React.Component {
  render() {
    const { fypsoundsLogo } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="fypsoundslogo-iPe1yZ" style={{ backgroundImage: `url(${fypsoundsLogo})` }}></div>
      </div>
    );
  }
}
