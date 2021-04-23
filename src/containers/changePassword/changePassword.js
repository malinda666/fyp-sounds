import React from "react";
import './changePassword.css';
import { Link } from 'react-router-dom';
import config from "../../config/index";
import userManagementService from '../../services/userManagementService';
import ProfileManagementService from "../../services/profileManagementService";
import HashLoader from 'react-spinners/HashLoader'
import LoadingOverlay from "react-loading-overlay";
import { IconContext } from "react-icons";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { Popover } from 'react-tiny-popover'
import Cookies from "js-cookie";

const popOverTriggerStyles = {
    position:"absolute",
    top:"140px",
    left:"108px ",
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
    fontSize:"13px"
}

const popOverTextColor = "rgba(255, 0, 70, 1)";

export default class Password extends React.Component {

  constructor(props){
    super(props);
   this.state = {
      email:'',
      loading: false,
      confirmationCode:'',
      password:'',
      confirmPassword:'',
      invalidCode: false,
      errorMessage:'',
      successMessage:'',
      isPopoverOpen:false,
      passwordPolicy: Object.assign({}, props.passwordPolicy),
      passwordValidation: {
        hasUpperCase: popOverTextColor,
        hasLowerCase: popOverTextColor,
        hasNumeric: popOverTextColor,
        hasSpecialCharacter: popOverTextColor,
        hasCorrectLength: popOverTextColor,
        isSuccess: false,
      },
    }
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {
    this.setState({successMessage : 'verification code sent to ' + this.props.location.state.email});
    this.getPasswordPolicy();
  }

  handleFieldChange(event){
    
    if(event){

       this.setState({
        [event.target.id]: event.target.value,
      });
    }
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
   validateVerifyForm() {
    console.log(this.state.confirmationCode)
    if (!this.state.confirmationCode || this.state.confirmationCode == '') {
     this.setState({errorMessage : 'confirmation code required', successMessage: ''});
      return false;
    }

    // if (this.state.confirmPassword != this.state.password) {
    //   this.setState({errorMessage : 'those passwords didn’t match. Try again.', successMessage: ''});
    //   return false;
    // }

    if (!this.state.passwordValidation.isSuccess) {
      this.setState({errorMessage : 'a strong password is required', successMessage: ''});
      return false;
    }
    console.log(this.state.errorMessage)
    return true;
  }
  verify (){
    if (this.validateVerifyForm()) {
      console.log('verified')
      this.setState({ loading: true});

      let authObject = {
        ConfirmationCode: this.state.confirmationCode,
        Username: this.props.location.state.email,
        ClientId: config.CLIENT_ID,
        Password: this.state.confirmPassword,
      };

      userManagementService
        .resetPassword(authObject)
        .then((res) => {
          if (res.status == 200) {
            ProfileManagementService
            .get(this.props.location.state.email)
              .then((result) => {
                if (result.status == 200) {
                  if (result.data.Item != null) {
                    userManagementService
                      .signIn(this.props.location.state.email, this.state.confirmPassword)
                      .then((res) => {
                        if (res.status == 200) {
                          if (res.data.code != null) {
                            if (res.data.code == 'NotAuthorizedException') {
                               this.setState({errorMessage : 'Invalid Email/Password', successMessage: ''});
                            } else {
                              this.setState({errorMessage :'Invalid Email/Password', successMessage: ''});
                            }
                             this.setState({ loading: false});                       
                          } else {
                            let auth = {
                              //refreshtoken : res.data.refreshToken,
                              //access_token : res.data.accessToken,
                              //id_token : res.data.idToken.jwtToken,
                              user_dir : result.data.Item.user_dir,
                              email : this.props.location.state.email
                            }
                            localStorage.setItem('auth', JSON.stringify(auth) );
                            Cookies.set("id_token", res.data.idToken.jwtToken, {expires : 1});
                      Cookies.set("refreshtoken", res.data.refreshToken, {expires : 1 });
                            this.props.userHasAuthenticated(true);
                             this.props.history.push('/dashboard');
                          }
                          this.setState({ loading: false });
                        } else {
                           this.setState({errorMessage :'Login failed, please contact administrator', successMessage: ''});
                          this.setState({ loading: false });
                        }
                      });
                    }else {               
                      this.setState({errorMessage :'No account found under this email', successMessage: ''});
                      this.setState({loading:false})
                    }
      
                  } else{
                     this.setState({errorMessage :'Login failed, please contact administrator', successMessage: ''});
                    this.setState({loading:false})
                  }
                }).catch((err) => {
                    this.setState({errorMessage :'Login failed, please contact administrator', successMessage: ''});
                    this.setState({ loading: false });
                  });
          } else {
            this.setState({ loading: false });
            //toast.error('Unable to reset password \n' + res);
          }
        })
        .catch((err) => {
          
            this.setState({ loading: false });
          //toast.error('Unable to reset password \n' + err);
        });
    }else{
      console.log('unverified')
    }
  };

  reSend() {
    this.setState({ loading: true });
    userManagementService
      .resendConfirmationCode(this.props.location.state.email)
      .then((res) => {
        if (res.status === 200) {
          this.setState({successMessage : 'verification code sent to ' + this.props.location.state.email, errorMessage : ''})
          //toast.success('Verification code sent to ' + this.state.email.trim());
        } else {
          this.setState({errorMessage : 'unable to send verification code', successMessage: ''})
         // toast.error('Unable to send verification code');
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        this.setState({errorMessage : 'unable to send verification code', successMessage: ''})
        this.setState({ loading: false });
        //toast.error('Unable to send verification code');
      });
  }

  render() {
    const {
      password,
      nextIcon,
      save,
      backChevron,
      spanText,
      spanText2,
      spanText3,
      spanText4,
      spanText5,
      IncorrectCodeChe,
      clearCacheCopyProps,
      clearCacheCopy2Props,
      clearCacheCopy3Props,
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
                                  should include atleast one upper case
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
                                  should include atleast one lower case
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
                                  should include atlease one number
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
                                  should include atleast one special character
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
      <form className="password" name="form1" action="form1" method="post">
        <div className="top-bar">
            <Link to="/forgotPassword">
              <div className="back-icon">
                <img className="back-chevron" src={backChevron} />
              </div>
            </Link>
            <h1 className="password montserrat-bold-rose-pearl-24px">{password}</h1>
          </div>
            <div onClick={()=>this.verify()} className="nexticon" style={{ backgroundImage: `url(${nextIcon})` }}>
              <div className="save montserrat-semi-bold-white-20px">{save}</div>
            </div>
        <div className="field-wrapper">
            <ClearCacheCopy {...{...clearCacheCopyProps,handleFieldChange : event => this._validateJoinPassword(event), id : 'password'}} />
            <ClearCacheCopy {...{...clearCacheCopy2Props,handleFieldChange : event => this._validateJoinPassword(event), id : 'confirmPassword'}} className="clear-cache-copy-2" />
            <ClearCacheCopy {...{...clearCacheCopy3Props,handleFieldChange : event => this.handleFieldChange(event), id : 'confirmationCode'}} className="clear-cache-copy-3" />
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

        </div>
       
        <div className="container-center-horizontal">
          <p className="didnu2019t-ceive-clic montserrat-light-gravel-14px">
            <span className="span1-LBLLyx">{spanText4}</span>
            <span className="span2-LBLLyx" onClick={()=>this.reSend()}>{spanText5}</span>
          </p>
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
      </form>
      </LoadingOverlay>
    );
  }
}


class ClearCacheCopy extends React.Component {
  render() {
    const { oldPassword, inputName, inputType, inputPlaceholder, inputRequired, className } = this.props;

    return (
        <div className={`clear-cache-copy ${className || ""}`}>
          <div className="old-password sfprodisplay-regular-normal-granite-gray-20px">{oldPassword}</div>
          <input
            id={this.props.id}
            className="text"
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
