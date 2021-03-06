import React from "react";
import './verification.css'; 
import userManagementService from '../../services/userManagementService'
import profileManagementService from '../../services/profileManagementService'
import HashLoader from 'react-spinners/HashLoader'
import LoadingOverlay from "react-loading-overlay";
import Header from '../../components/header'
import Footer from '../../components/footer'

export default class Verificationin extends React.Component {

 constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: "",
      errorMessage:'',
      verificationCode:'',
      isInvalidCode: false,
      user_dir:''
    };
  }

  verify = () => {
    this.setState({ loading: true});
    userManagementService
      .confirmUser(this.props.location.state.email.trim(), this.state.verificationCode)
      .then((res) => {
        if (res.status === 200) {
          profileManagementService.create(this.props.location.state.email.trim()).then(
                profileResponse => {
                  if(profileResponse.status === 200){
          userManagementService
            .signIn(this.props.location.state.email.trim(), this.props.location.state.password)
            .then((res) => {
              if(res.status === 200){
              let auth = {
                        refreshtoken : res.data.refreshToken,
                        access_token : res.data.accessToken,
                        id_token : res.data.idToken.jwtToken,
                        user_dir : profileResponse.data.user_dir,
                        email : this.props.location.state.email
                      }
                      localStorage.setItem('auth', JSON.stringify(auth) );
                      //this.props.userHasAuthenticated(true);
  
               this.setState({ loading: false, user_dir: profileResponse.data.user_dir });
                this.props.history.push('/dashboard');        
              }
              else{
                this.setState({ loading: false});
                //toast.error('unable to signin, please contact administrator');
              }
            })
            .catch((err) => {
              this.setState({ loading: false});
             // toast.error('unable to signin, please contact administrator');
            });
          }
          }).catch((err) => {
                  this.setState({ loading: false});
                  //toast.error('unable to create user');
                });    
        } else {
          this.setState({ loading: false});
          //toast.error('unable to verify user');
        }
      })
      .catch((err) => {
        this.setState({ loading: false});
        if (err.response.data.includes('UsernameExistsException')) 
        {
          this.setState({isInvalidCode : true})
        }
        else{
          //toast.error('unable to verify user, contact administrator');
        }
      });
  }

  
   handleFieldChange(event){
     if(event){
     this.setState({
      [event.target.id]: event.target.value,
    });
  }
   }

   reSend() {
    userManagementService
      .resendConfirmationCode(this.state.email.trim())
      .then((res) => {
        if (res.status === 200) {
          //toast.success('Verification code sent to ' + this.state.email.trim());
        } else {
         // toast.error('Unable to send verification code');
        }
      })
      .catch((err) => {
        //toast.error('Unable to send verification code');
      });
  }

  render() {
    const {
      checkYourEmailFor,
      rectangle,
      inputName,
      inputType,
      inputPlaceholder,
      inputRequired,
      rectangle2,
      confirm,
      Ud83DUdd75Ufe0F,
      oval,
      oval2,
      oval3,
      label1,
      faq,
      contact,
      privacyPolicy,
      copyright2512021Al,
      spanText,
      spanText2,
      InvalidCode,
      fypsoundslogoProps,
      aboutProps,
      fypsoundslogo2Props,
    } = this.props;

    return (
        <LoadingOverlay
      active={this.state.loading}
      spinner={<HashLoader color={"#f24b76"} size={100}/>}
    >
      <div className="verificationin">
        <div className="container-center-horizontal">
          <div className="nexticon">
            <div className="check-your-email-for montserrat-semi-bold-torch-red-25px">{checkYourEmailFor}</div>
            <div className="overlap-group">
              <img className="rectangle-NaDWhO" src={rectangle} />
              <input
              id="verificationCode"
                className="text-verif-ation-code montserrat-light-mountain-mist-14px"
                name={inputName}
                placeholder={inputPlaceholder}
                type={inputType}
                required={inputRequired}
                onChange={this.handleFieldChange.bind(this)}
              />
            </div>
            <div className="overlap-group1" onClick={this.verify.bind(this)}>
              <img className="rectangle-3cn1mj" src={rectangle2} />
              <div className="confirm montserrat-semi-bold-white-20px">{confirm}</div>
            </div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <h1 className="ud83dudd75ufe0f applecoloremoji-normal-white-45px">{Ud83DUdd75Ufe0F}</h1>
        </div>
        <div className="container-center-horizontal">
          <Header/>
        </div>
        <div className="container-center-horizontal">
          <Footer/>
        </div>
        <div className="container-center-horizontal">
          <p className="didnu2019t-ceive-clic montserrat-light-gravel-14px">
            <span className="span1-LBLLyx">{spanText}</span>
            <span className="span2-LBLLyx" onClick={this.verify.bind(this)}>{spanText2}</span>
          </p>
        </div>
        {this.state.isInvalidCode ?
        <div className="container-center-horizontal">
          <div className="invalid-code montserrat-light-red-14px">{InvalidCode}</div>
        </div>
         : null }
      </div>
      </LoadingOverlay>
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



