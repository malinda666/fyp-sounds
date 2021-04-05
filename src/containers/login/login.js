import React from "react";
import './login.css'
import userManagementService from '../../services/userManagementService'
import ProfileManagementService from "../../services/profileManagementService";
import HashLoader from 'react-spinners/HashLoader'
import LoadingOverlay from "react-loading-overlay";
import Header from '../../components/header'
import Footer from '../../components/footer'
import { IconContext } from "react-icons";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Popover } from 'react-tiny-popover'
import Cookies from "js-cookie";

const popOverTriggerStyles = {
    position:"absolute",
    top:"50px",
    right:"-25px ",
    padding: "1px",
    borderRadius: "50%",
    margin: "0 0 0 0",
}

const popOverStyles = {
    backgroundColor: "#fff",
    padding: "8px",
    border: "1px solid rgba(150, 150, 150, 1)",
    borderRadius: "8px",
    margin:"0 4px",
    fontFamily:' "Montserrat", Helvetica, Arial, serif',
    fontSize:"11px"
}

export default class LoginErrorMessages extends React.Component { 

    constructor(props) {
    super(props);

    this.state = {
      loading: false,
      joinEmail: "", 
      joinPassword: "",
      loginEmail: "", 
      loginPassword: "",
      newUser: null,
      deliveryEmail:'',
      errorMessage:'',
      verificationCode:'',
      isInvalidCode: false,
      isJoinEmailRequired: false,
      isJoinPasswordRequired: false,
      isLoginEmailRequired: false,
      isLoginPasswordRequired: false,
      joinErrorMessage:'',
      isPopoverOpen:false,
      passwordPolicy: Object.assign({}, props.passwordPolicy),
      passwordValidation: {
        hasUpperCase: "rgba(255, 0, 80, 1)",
        hasLowerCase: "rgba(255, 0, 80, 1)",
        hasNumeric: "rgba(255, 0, 80, 1)",
        hasSpecialCharacter: "rgba(255, 0, 80, 1)",
        hasCorrectLength: "rgba(255, 0, 80, 1)",
        isSuccess: false,
      },
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {
    this.getPasswordPolicy();
  }
  validateLoginForm() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!this.state.loginEmail || this.state.loginEmail === '') {
      
      this.setState({isLoginEmailRequired : true});
      return false;
    }

    if (!this.state.loginPassword || this.state.loginPassword === '') {
      
      this.setState({isLoginPasswordRequired: true});      
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

  getPasswordPolicy() {
    this.setState({ loading: true });
    userManagementService
      .userPoolData()
      .then((res) => {
        if (res.status == 200) {
          this.setState({ loading: false });
          if (res.data.UserPool.Policies.PasswordPolicy != null) {
            this.setState({
              passwordPolicy: res.data.UserPool.Policies.PasswordPolicy,
            });
          } else {
            this.setState({ loading: false });
          }
        } else {
          this.setState({ loading: false });
        }
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }


  validateJoinForm(formType) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!this.state.joinEmail || this.state.joinEmail === '') {
      this.setState({isJoinEmailRequired : true});
      return false;
    }

    if (!this.state.joinPassword || this.state.joinPassword === '') {
      this.setState({isJoinPasswordRequired : true});
      return false;
    }

    if (!this.state.passwordValidation.isSuccess) {
      this.setState({isJoinPasswordRequired : true});
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

  _validateJoinPassword = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });

    this.setState((prevState) => ({
      passwordValidation: {
        ...prevState.passwordValidation,
        hasCorrectLength: 'red',
        hasLowerCase: 'red',
        hasNumeric: 'red',
        hasSpecialCharacter: 'red',
        hasUpperCase: 'red',
        isSuccess: false,
      },
    }));

    let password = event.target.value;
    var anUpperCase = /[A-Z]/;
    var aLowerCase = /[a-z]/;
    var aNumber = /[0-9]/;
    var aSpecial = /[!|@|#|$|%|^|&|*|(|)|-|_]/;

    if (password.length > this.state.passwordPolicy.MinimumLength) {
      this.setState((prevState) => ({
        passwordValidation: {
          ...prevState.passwordValidation,
          hasCorrectLength: 'green',
        },
      }));
    }

    var numUpper = 0;
    var numLower = 0;
    var numNums = 0;
    var numSpecials = 0;

    let passUpper = 0;
    let passLower = 0;
    let passNums = 0;
    let passSpecials = 0;

    for (var i = 0; i < password.length; i++) {
      if (anUpperCase.test(password[i])) numUpper++;
      else if (aLowerCase.test(password[i])) numLower++;
      else if (aNumber.test(password[i])) numNums++;
      else if (aSpecial.test(password[i])) numSpecials++;
    }

    if (numUpper >= 1) {
      this.setState((prevState) => ({
        passwordValidation: {
          ...prevState.passwordValidation,
          hasUpperCase: 'green',
        },
      }));
    }

    if (numLower >= 1) {
      this.setState((prevState) => ({
        passwordValidation: {
          ...prevState.passwordValidation,
          hasLowerCase: 'green',
        },
      }));
    }

    if (numNums >= 1) {
      this.setState((prevState) => ({
        passwordValidation: {
          ...prevState.passwordValidation,
          hasNumeric: 'green',
        },
      }));
    }

    if (numSpecials >= 1) {
      this.setState((prevState) => ({
        passwordValidation: {
          ...prevState.passwordValidation,
          hasSpecialCharacter: 'green',
        },
      }));
    }

    if (this.state.passwordPolicy.RequireUppercase) {
      if (numUpper >= 1) {
        passUpper = true;
      } else {
        passUpper = false;
      }
    } else {
      passUpper = true;
    }

    if (this.state.passwordPolicy.RequireLowercase) {
      if (numLower >= 1) {
        passLower = true;
      } else {
        passLower = false;
      }
    } else {
      passLower = true;
    }

    if (this.state.passwordPolicy.RequireNumbers) {
      if (numNums >= 1) {
        passNums = true;
      } else {
        passNums = false;
      }
    } else {
      passNums = true;
    }

    if (this.state.passwordPolicy.RequireSymbols) {
      if (numSpecials >= 1) {
        passSpecials = true;
      } else {
        passSpecials = false;
      }
    } else {
      passSpecials = true;
    }

    if (
      passUpper &&
      passLower &&
      passNums &&
      passSpecials &&
      password.length > this.state.passwordPolicy.MinimumLength
    ) {
      this.setState((prevState) => ({
        passwordValidation: {
          ...prevState.passwordValidation,
          isSuccess: true,
        },
      }));
    }
  };

   signUp = () => {
         this.setState({isJoinEmailRequired : false, isJoinPasswordRequired : false});
      if (this.validateJoinForm()) {
        this.setState({ loading: true });
        userManagementService.signUp(this.state.joinEmail, this.state.joinPassword)
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
               this.setState({loading: false, joinErrorMessage : 'username aleady exists'});
               }
            } else {
               this.props.history.push({
                    pathname: '/verify',
                    state: { email: this.state.joinEmail,
                            password: this.state.joinPassword }
                      });
            }
            this.setState({ loading: false });
          } else {
            this.setState({ loading: false, joinErrorMessage : 'signup process failed, please contact administrator' });
            //toast.error('Signup process failed');
          }
        })
        .catch((err) => {
          if (err.response.data.code === 'UsernameExistsException') 
          {
              this.setState({ loading: false, joinErrorMessage : 'username aleady exists' });
          }
          else{
              this.setState({ loading: false, joinErrorMessage : 'signup process failed, please contact administrator' });
          }
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

   handleAboutClick(event){
     if(event){
         this.props.history.push('/about');
     }
    }

    login = () => {
      this.setState({isLoginEmailRequired : false, isLoginPasswordRequired : false});
     if (this.validateLoginForm()) {
      this.setState({ loading: true });
      ProfileManagementService
      .get(this.state.loginEmail)
        .then((result) => {
          if (result.status === 200) {
            if (result.data.Item != null) {
              userManagementService
                .signIn(this.state.loginEmail, this.state.loginPassword)
                .then((res) => {
                  if (res.status === 200) {
                    if (res.data.code != null) {
                      if (res.data.code === 'NotAuthorizedException') {
                         this.setState({errorMessage : 'invalid Email/Password'});
                      } else {
                        this.setState({errorMessage :'invalid Email/Password'});
                      }
                       this.setState({ loading: false});                       
                    } else {
                      let auth = {
                        refreshtoken : res.data.refreshToken,
                        access_token : res.data.accessToken,
                        id_token : res.data.idToken.jwtToken,
                        user_dir : result.data.Item.user_dir,
                        email : this.state.loginEmail
                      }
                      localStorage.setItem('auth', JSON.stringify(auth) );
                      let inFiftyMinutes = new Date(new Date().getTime() + 50 *60* 100);
                      Cookies.set("id_token", res.data.idToken.jwtToken, {expires : inFiftyMinutes});
                      Cookies.set("refreshtoken", res.data.refreshToken, {expires : 1 });
                      this.props.userHasAuthenticated(true);
                    
                       this.props.history.push('/dashboard');
                    }
                    this.setState({ loading: false });
                  } else {
                     this.setState({errorMessage :'login failed, please contact administrator'});
                    this.setState({ loading: false });
                  }
                });
              }else {               
                this.setState({errorMessage :'no account found under this email'});
                this.setState({loading:false})
              }

            } else{
               this.setState({errorMessage :'login failed, please contact administrator'});
              this.setState({loading:false})
            }
          }).catch((err) => {
              this.setState({errorMessage :'login failed, please contact administrator'});
              this.setState({ loading: false });
            });
            } else {
              this.setState({errorMessage :'login failed, please contact administrator'});
              this.setState({ loading: false });
            }
        
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
        const { isPopoverOpen } = this.state;
    const popover = (
        <div style={popOverStyles}>
                          <span style={{ display: 'block' }}>
                           
                            <ul>
                              {this.state.passwordPolicy.RequireUppercase ? (
                                <li
                                  style={{
                                    fontSize: '80%',
                                    color: this.state.passwordValidation
                                      .hasUpperCase,
                                  }}
                                >
                                  should include at least one upper case
                                  character
                                </li>
                              ) : null}
                              {this.state.passwordPolicy.RequireLowercase ? (
                                <li
                                  style={{
                                    fontSize: '80%',
                                    color: this.state.passwordValidation
                                      .hasLowerCase,
                                  }}
                                >
                                  should include at least one lower case
                                  character
                                </li>
                              ) : null}
                              {this.state.passwordPolicy.RequireNumbers ? (
                                <li
                                  style={{
                                    fontSize: '80%',
                                    color: this.state.passwordValidation
                                      .hasNumeric,
                                  }}
                                >
                                  should include at least one number
                                </li>
                              ) : null}
                              {this.state.passwordPolicy.RequireSymbols ? (
                                <li
                                  style={{
                                    fontSize: '80%',
                                    color: this.state.passwordValidation
                                      .hasSpecialCharacter,
                                  }}
                                >
                                  should include at least one special character
                                </li>
                              ) : null}
                              {this.state.passwordPolicy.MinimumLength > 0 ? (
                                <li
                                  style={{
                                    fontSize: '80%',
                                    color: this.state.passwordValidation
                                      .hasCorrectLength,
                                  }}
                                >
                                  should include{' '}
                                  {this.state.passwordPolicy.MinimumLength}{' '}
                                  characters
                                </li>
                              ) : null}
                            </ul>
                          </span>
                        </div>
    );

    return (
       <LoadingOverlay
          active={this.state.loading}
          spinner={<HashLoader color={"#f24b76"} size={100}/>}
        >
<meta 
     name='viewport' 
     content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' 
/>
      <form className="loginerrormessages" name="form1" action="form1" method="post" >
        <div className="form-container">
          <div className="container-center-horizontal">
            <div className="nexticon-copy">
              <h1 className="or sofiapro-normal-torch-red-25px">{or}</h1>
              <Overlapgroup  {... {...overlapgroupProps, handleFieldChange : event => this.handleFieldChange(event), id : 'loginEmail'}} />
              <Overlapgroup1 {... {...overlapgroup1Props, handleFieldChange : event => this.handleFieldChange(event), id : 'loginPassword'}} />
              <div className="overlap-group-PVhVGJ"  onClick={this.login}>
                <img className="rectangle-JWSful" src={rectangle} />
                <div className="login montserrat-bold-white-20px">{login}</div>
              </div>
            </div>
          </div>

          <div className="container-center-horizontal">
            <p className="forgot-your-access montserrat-light-gravel-14px">
              <span className="span1-VhPCr0">{spanText}</span>
              <span className="span2-VhPCr0" onClick = {() => this.props.history.push("/forgotPassword")}>{spanText2}</span>
            </p>
          </div>

          <div className="container-center-horizontal">
            <div className="nexticon">
              <Overlapgroup {...{...overlapgroup2Props, handleFieldChange : event => this.handleFieldChange(event), id: 'joinEmail'}} className="overlap-group3" />
              <Overlapgroup1 {...{...overlapgroup12Props, handleFieldChange : event => this._validateJoinPassword(event), id: 'joinPassword'}} />
              
              <Popover
                  isOpen={isPopoverOpen}
                  padding={10}
                  positions={['top']}
                  content={popover}
                >
                <div style={popOverTriggerStyles}onClick={() => {
                            this.setState({ isPopoverOpen: !isPopoverOpen });
                          }}>
                          <IconContext.Provider value={{ color: "rgba(255, 0, 80, 1)",size:'1.3em' }}>
                             <BsFillInfoCircleFill/>
                          </IconContext.Provider>
                 
                </div>
              </Popover>
              <div className="overlap-group-PVhVGJ" onClick={this.signUp.bind(this)}>
                <img className="rectangle-JWSful" src={rectangle2} />
                <a href="javascript:SubmitForm('form1')">
                  <div className="join montserrat-bold-white-20px">{join}</div>
                </a>
              </div>
            </div>
          </div>

          
        </div>
        
        
        
        
        <div className="container-center-horizontal">
           <Header/>
        </div>
        <div className="container-center-horizontal">
          <Footer/>
        </div>
        {this.state.isLoginEmailRequired ? 
        <div className="container-center-horizontal">
          <p className="an-email-is-require-C61RwL montserrat-light-red-14px">{AnEmailIsRequire}</p>
        </div>
         : null}
         {this.state.isLoginPasswordRequired ?
        <div className="container-center-horizontal">
          <p className="a-password-is-requi-C61RwL montserrat-light-red-14px">{APasswordIsRequi}</p>
        </div> : null}
        {this.state.isJoinEmailRequired ? 
        <div className="container-center-horizontal">
          <p className="an-email-is-require-VMr6Om montserrat-light-red-14px">{AnEmailIsRequire2}</p>
        </div> : null }
        {this.state.isJoinPasswordRequired ? 
        <div className="container-center-horizontal">
          <p className="a-password-is-requi-VMr6Om montserrat-light-red-14px">{APasswordIsRequi2}</p>
        </div> : null }
           {this.state.errorMessage && this.state.errorMessage != '' ? 
        <div className="container-center-horizontal">
          <p className="an-error-VMr6Om montserrat-light-red-14px">{this.state.errorMessage}</p>
        </div> : null }
        {this.state.joinErrorMessage && this.state.joinErrorMessage != '' ? 
        <div className="container-center-horizontal">
          <p className="a-join-error montserrat-light-red-14px">{this.state.joinErrorMessage}</p>
        </div> : null }
      </form>
      </LoadingOverlay>
    );
  }
}


class Overlapgroup extends React.Component {
  render() {
    const { rectangle, inputName, inputType, inputPlaceholder, inputRequired, className } = this.props;

    return (
      <div className={`overlap-group ${className || ""}`}>
        <img className="rectangle-ZtaLEy" src={rectangle} />
        <input
         id={this.props.id}
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
          id={this.props.id}
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
      <div className="container-center-horizontal footer-items" onClick={this.props.handleAboutClick}>
          <div className="montserrat-semi-bold-white-14px">{about}</div>
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


