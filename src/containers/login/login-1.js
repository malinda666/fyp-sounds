import React from "react";
import './login.css'
import userManagementService from '../../services/userManagementService'

export default class LoginErrorMessages extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      email: "", 
      password: "",
      newUser: null,
      deliveryEmail:'',
      errorMessage:'',
      verificationCode:'',
      isInvalidCode: false,
      isShowJoinEmailValidation : false,
      isShowJoinPasswordValidation : false,
      isShowLoginEmailValidation : false,
      isShowLoginPasswordValidation : false
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

   validateForm(type) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!this.state.email || this.state.email === '') {
      if(type === 'join'){
        this.setState({isShowJoinEmailValidation : true})
      }
      else {
         this.setState({isShowLoginEmailValidation : true})
      }
      return false; 
    }

      if (!this.state.password || this.state.password === '') {
        if(type === 'join'){
        this.setState({isShowJoinPasswordValidation : true})
      }
      else {
         this.setState({isShowLoginPasswordValidation : true})
      }
      return false;
    }

    // if(!re.test(this.state.email)){
    //   return false;
    // }   

    // if (!this.state.passwordValidation.isSuccess) {
    //   toast.error(
    //     'For your safety, a strong password is required. Please set a password that meets policy requirements.'
    //   );
    //   return false;
    // }

    return true;
  }

  signUp = () => {
      if (this.validateForm('join')) {
        this.setState({ loading: true });
        userManagementService.signUp(this.state.email, this.state.password)
        .then((result) => {
          if (result.status === 200) {
            if (result.data.CodeDeliveryDetails === null) {
              //this.setState({errorMessage : res.data}) //toster message
              if (result.data.includes('UsernameExistsException')) {
              //   userAPI.getUserByEmail(this.state.email).then((res) => {
              //     if (res.status == 200) {
              //       if (res.data.data.User[0] != null) {
              //         this.setState({ openNavModal: true });
              //       } else {
              //         this.setState({ isResendButtonEnable: true, open: true });
              //       }
              //     }
              //   });
              // } else {
               //toast.error('Signup process failed');
               this.setState({errorMessage : 'Signup process failed'});
               }
            } else {
               this.props.history.push({
                    pathname: '/verify',
                    state: { email: this.state.email,
                            password: this.state.password }
                      });
            }
            this.setState({ loading: false });
          } else {
            this.setState({ loading: false, errorMessage : 'Signup process failed' });
            //toast.error('Signup process failed');
          }
        })
        .catch((err) => {
          // if (err.response.data.includes('UsernameExistsException')) {
          //   userAPI.getUserByEmail(this.state.email).then((res) => {
          //     if (res.status == 200) {
          //       if (res.data.data.User[0] != null) {
          //         this.setState({ openNavModal: true });
          //       } else {
          //         this.setState({ isResendButtonEnable: true, open: true });
          //       }
          //     }
          //   });
          // } else {
          //   toast.error(err.response.data);
          // }
          this.setState({ loading: false, errorMessage : 'Signup process failed' });
          //toast.error('Signup process failed');
        });
      }

   }

   handleFieldChange(event){
     if(event){
     this.setState({
      [event.target.id]: event.target.value,
    });
  }
   }

   login = () => {
     if (this.validateForm('login')) {
      this.setState({ loading: true });
      // userAPI
      //   .getUserByEmail(this.state.username)
      //   .then((result) => {
      //     if (result.status == 200) {
      //       if (result.data.data.User[0] != null) {
              userManagementService
                .signIn(this.state.email, this.state.password)
                .then((res) => {
                  if (res.status == 200) {
                    if (res.data.code != null) {
                      if (res.data.code == 'NotAuthorizedException') {
                        // this.setState({
                        //   lvrgLoginErrorMessage:
                        //     notification.UNAUTHORIZED_ACCESS,
                        // });
                      } else {
                        // this.setState({
                        //   lvrgLoginErrorMessage:
                        //     notification.UNAUTHORIZED_ACCESS,
                        // });
                      }
                    } else {
                      localStorage.setItem(
                        'refreshtoken',
                        res.data.refreshToken
                      );
                      localStorage.setItem(
                        'access_token',
                        res.data.accessToken
                      );
                      localStorage.setItem(
                        'id_token',
                        res.data.idToken.jwtToken
                      );
                      this.props.history.push('/dashboard');
                    }
                    this.setState({ loading: false });
                  } else {
                    // this.setState({
                    //   lvrgLoginErrorMessage: notification.UNAUTHORIZED_ACCESS,
                    // });
                    this.setState({ loading: false });
                  }
                });
            } else {
              // this.setState({
              //   lvrgLoginErrorMessage: notification.UNAUTHORIZED_ACCESS,
              // });
              this.setState({ loading: false });
            }
          // }
        // })
        // .catch((err) => {
        //   this.setState({
        //     lvrgLoginErrorMessage: notification.UNAUTHORIZED_ACCESS,
        //   });
        //   this.setState({ loading: false });
        // });
    };

  render() {
    const {
      or,
      rectangle,
      login,
      spanText,
      spanText2,
      rectangle2,
      join,
      oval,
      oval2,
      oval3,
      label1,
      faq,
      contact,
      privacyPolicy,
      copyright2512021Al,
      AnEmailIsRequire,
      APasswordIsRequi,
      AnEmailIsRequire2,
      APasswordIsRequi2,
      overlapgroupProps,
      overlapgroup1Props,
      overlapgroup2Props,
      overlapgroup12Props,
      fypsoundslogoProps,
      aboutProps,
      fypsoundslogo2Props,
    } = this.props;

    return (
      <form className="loginerrormessages" name="form1" action="form1" method="post">
        <div className="container-center-horizontal">
          <div className="nexticon-copy">
            <h1 className="or sofiapro-normal-torch-red-25px">{or}</h1>
            <Overlapgroup {... {...overlapgroupProps, handleFieldChange : event => this.handleFieldChange(event)}} />
            <Overlapgroup1  {... {...overlapgroup1Props, handleFieldChange : event => this.handleFieldChange(event)}}/>
            <div className="overlap-group-PVhVGJ" onClick={this.login.bind(this)}>
              <img className="rectangle-JWSful" src={rectangle} />
              <div className="login montserrat-bold-white-20px">{login}</div>
            </div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="bar"></div>
        </div>
        <div className="container-center-horizontal">
          <p className="forgot-your-access montserrat-light-gravel-14px">
            <span className="span1-VhPCr0">{spanText}</span>
            <span className="span2-VhPCr0">{spanText2}</span>
          </p>
        </div>
        <div className="container-center-horizontal">
          <div className="nexticon">
            <Overlapgroup  {... {...overlapgroupProps, handleFieldChange : event => this.handleFieldChange(event)}} className="overlap-group3" />
            <Overlapgroup1  {... {...overlapgroup1Props, handleFieldChange : event => this.handleFieldChange(event)}} />
            <div className="overlap-group-PVhVGJ"  onClick={this.signUp.bind(this)}>
              <img className="rectangle-JWSful" src={rectangle2} />
              <a href="javascript:SubmitForm('form1')">
                <div className="join montserrat-bold-white-20px">{join}</div>
              </a>
            </div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="group">
            <img className="oval-NOXmfT" src={oval} />
            <img className="oval-E582nk" src={oval2} />
            <Fypsoundslogo {...fypsoundslogoProps} />
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="footer">
            <div className="overlap-group6">
              <img className="oval-ipjwHu" src={oval3} />
              <div className="group-5">
                <div className="container-center-horizontal">
                  <p className="x montserrat-semi-bold-white-14px">{label1}</p>
                </div>
                <About {...aboutProps} />
                <div className="container-center-horizontal">
                  <div className="faq montserrat-semi-bold-white-14px">{faq}</div>
                </div>
                <div className="container-center-horizontal">
                  <div className="contact montserrat-semi-bold-white-14px">{contact}</div>
                </div>
                <div className="privacy-policy montserrat-semi-bold-white-14px">{privacyPolicy}</div>
              </div>
            </div>
            <Fypsoundslogo2 {...fypsoundslogo2Props} />
            <div className="container-center-horizontal">
              <p className="copyright--51-2021-al montserrat-normal-white-13px">{copyright2512021Al}</p>
            </div>
          </div>
        </div>
        {this.state.isShowJoinEmailValidation ? 
        <div className="container-center-horizontal">
          <p className="an-email-is-require-C61RwL montserrat-light-red-14px">{AnEmailIsRequire}</p>
        </div> 
        :
        null}
        {
          this.state.isShowJoinPasswordValidation ?
           <div className="container-center-horizontal">
          <p className="a-password-is-requi-C61RwL montserrat-light-red-14px">{APasswordIsRequi}</p>
        </div>
        :
        null
        }
       {this.state.isShowLoginEmailValidation ? 
       <div className="container-center-horizontal">
          <p className="an-email-is-require-VMr6Om montserrat-light-red-14px">{AnEmailIsRequire2}</p>
        </div>
        :
        null
        }
        {this.state.isShowLoginPasswordValidation ? 
        <div className="container-center-horizontal">
          <p className="a-password-is-requi-VMr6Om montserrat-light-red-14px">{APasswordIsRequi2}</p>
        </div>
        : 
        null
        }
        
      </form>
    );
  }
}

class Overlapgroup extends React.Component {
  render() {
     
      const { rectangle, inputName, inputType, inputPlaceholder, inputRequired, className } = this.props 
    
    return (
      
<div className={`overlap-group`}>
    <img className="rectangle-ZtaLEy" src={rectangle}/>
<input 
id="email"
className="text montserrat-light-mountain-mist-14px"
name={inputName}  
            placeholder={inputPlaceholder}   
            type={inputType}  
            required={inputRequired}
             onChange={this.props.handleFieldChange}
/>
</div>
);
  }
}



class Overlapgroup1 extends React.Component {
  render() {
    const { inputName, inputType, inputPlaceholder, inputRequired } = this.props;

    return (
      <div className="overlap-group1">
        <div className="rectangle-Vg8Dgr border-class-1"></div>
        <input
        id="password"
          className="text montserrat-light-mountain-mist-14px"
          name={inputName}
          placeholder={inputPlaceholder}
          type={inputType}
          required={inputRequired}
           onChange={this.props.handleFieldChange}
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
      <div className="container-center-horizontal">
        <div className="about-7pmZoB">
          <a >
            <div className="about-rVE2UT montserrat-semi-bold-white-14px">{about}</div>
          </a>
        </div>
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

