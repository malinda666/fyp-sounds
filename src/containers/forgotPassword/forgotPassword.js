import React from "react";
import './forgotPassword.css'
import config from "../../config/index";
import userManagementService from '../../services/userManagementService';
import HashLoader from 'react-spinners/HashLoader'
import LoadingOverlay from "react-loading-overlay";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../../components/header'
import Footer from '../../components/footer'
import { IconContext } from "react-icons";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Popover } from 'react-tiny-popover'



export default class Recovery extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      isInvalidUser : false,
      email:'',
      loading: false,
      errorMessage:''
    }
  }

  
   handleFieldChange(event){
     if(event){
     this.setState({
      [event.target.id]: event.target.value,
    });
  }
   }

   onSendClick(){
     if(this.state.email && this.state.email != ''){
         this.setState({
        loading: true
      });
      let authObject = {
        ClientId: config.CLIENT_ID,
        Username: this.state.email,
      };
      userManagementService.validate(this.state.email).then(result => {
        if(result.status === 200){
          if(result.data){
             userManagementService
              .changePassword(authObject)
              .then((res) => {
                if (res.status === 200) {
                  if (res.data.CodeDeliveryDetails == null) {
                    this.setState({ loading: false, errorMessage: res.code });
                  } else {

                    this.props.history.push({
                          pathname: '/changePassword',
                          state: { email: this.state.email}
                            });
                    this.setState({ loading: false });
                    toast.success('Confirmation code sent to ' + this.state.email);
                  }
                } else {
                  this.setState({ loading: false });
                  toast.error('Unable to change user password, please contact administrator');
                }
              })
              .catch((err) => {
                this.setState({ loading: false });
                toast.error('Unable to change user password, please contact administrator.');
              });
          }
          else{
            this.setState({ loading: false , isInvalidUser : true});           
          }
        }
        else{
          this.setState({ loading: false });
          toast.error('Unable to change user password, please contact administrator.');
        }
      }) .catch((err) => {
                this.setState({ loading: false });
                toast.error('Unable to change user password, please contact administrator.');
              });
     
     }
   }

  render() {
    const {
      forgotYourAccess,
      rectangle,
      inputName,
      inputType,
      inputPlaceholder,
      inputRequired,
      rectangle2,
      send,
      Ud83EUdd26Ud83CUdffeU200DU2640Ufe0F,
      oval,
      oval2,
      oval3,
      label1,
      faq,
      contact,
      privacyPolicy,
      copyright2512021Al,
      fypsoundslogoProps,
      aboutProps,
      fypsoundslogo2Props,
      NoAccountFoundUn,
      spanText,
      spanText2
    } = this.props;

    return (
      // <DarkBackground disappear={this.state.loading}>
        <LoadingOverlay
          active={this.state.loading}
          spinner={<HashLoader color={"#f24b76"} size={100}/>}
        >
           <ToastContainer
            className="toast-top-right"
          />
      <div className="recovery">
        <div className="container-center-horizontal">
          <div className="nexticon">
            <div className="forgot-your-access montserrat-semi-bold-torch-red-25px">{forgotYourAccess}</div>
            <div className="overlap-group">
              <img className="rectangle-NaDWhO" src={rectangle} />
              <input
              id="email"
                className="text-email montserrat-light-mountain-mist-14px"
                name={inputName}
                placeholder={inputPlaceholder}
                type={inputType}
                required={inputRequired}
                onChange={this.handleFieldChange.bind(this)}
              />
            </div>
            <div className="overlap-group1" onClick={() => this.onSendClick()}>
              <img className="rectangle-3cn1mj" src={rectangle2} />
              <div className="send montserrat-semi-bold-white-20px">{send}</div>
            </div>
            {this.state.isInvalidUser ? 
            <div className="overlap-group2-C61RwL">
              <p className="no-account-found-un montserrat-light-red-14px">{NoAccountFoundUn}</p>
              <div className="new-user-join-here montserrat-light-gravel-14px">
                <span className="span1">{spanText}</span>
                <span className="span2" onClick={()=>{this.props.history.push('/login')}}>{spanText2}</span>
              </div>
            </div> : null }
          </div>
        </div>
        <div className="container-center-horizontal">
          <h1 className="ud83eudd26-u2640ufe0f montserrat-semi-bold-white-45px">
            {Ud83EUdd26Ud83CUdffeU200DU2640Ufe0F}
          </h1>
        </div>
        <div className="container-center-horizontal">
          <Header/>
        </div>
        <div className="container-center-horizontal">
          <Footer/>
        </div>
      </div>
      </LoadingOverlay>
      // </DarkBackground>
      
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

