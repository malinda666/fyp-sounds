import React from "react";
import './login.css';
import userManagementService from '../../services/userManagementService'
import ProfileManagementService from "../../services/profileManagementService";

export default class Login extends React.Component {
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
      isInvalidCode: false
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  validateForm(formType) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!this.state.email || this.state.email === '') {
      
      if(formType === 'join'){
        this.setState({isJoinEmailRequired : true});
      }

      return false;
    }

    if (!this.state.password || this.state.password === '') {
      
      if(formType === 'join'){
        this.setState({isJoinPasswordRequired : true});
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
     if (this.validateForm()) {
      this.setState({ loading: true });
      ProfileManagementService
      .get(this.state.email)
        .then((result) => {
          if (result.status == 200) {
            if (result.data.Item != null) {
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
              }else {
                this.setState({loading:false})
              }

            } else{
              this.setState({loading:false})
            }
          }).catch((err) => {
              // this.setState({
              //   lvrgLoginErrorMessage: notification.UNAUTHORIZED_ACCESS,
              // });
              this.setState({ loading: false });
            });
            } else {
              // this.setState({
              //   lvrgLoginErrorMessage: notification.UNAUTHORIZED_ACCESS,
              // });
              this.setState({ loading: false });
            }
        
    };

  render() {
    const {
      spanText,
      spanText2,
      rectangle,
      join,
      rectangle2,
      login,
      oval,
      oval2,
      oval3,
      label1,
      faq,
      contact,
      privacyPolicy,
      copyright2512021Al,
      or,
      overlapgroupProps,
      overlapgroup1Props,
      overlapgroup2Props,
      overlapgroup12Props,
      fypsoundslogoProps,
      aboutProps,
      fypsoundslogo2Props,
      AnEmailIsRequireJoin,
      AnEmailIsRequireLogin,
      AnEmailIsRequire,
      APasswordIsRequi
    } = this.props;

    return (
      <div className="login">
        <div className="container-center-horizontal">
          <div className="bar"></div>
        </div>
        <div className="container-center-horizontal">
          <p className="forgot-your-access montserrat-light-gravel-14px">
            <span className="span1-VhPCr0">{spanText}</span>
            <span className="span2-VhPCr0" onClick = {() => this.props.history("/forgotPassword")}>{spanText2}</span>
          </p>
        </div>
        <div className="container-center-horizontal">
          <form className="nexticon-C61RwL" name="form1" action="form1" method="post">
            <Overlapgroup {... {...overlapgroupProps, handleFieldChange : event => this.handleFieldChange(event)}}  />
            <div className="container-center-horizontal">
        <p className="an-email-is-require montserrat-light-red-14px">{AnEmailIsRequireJoin}</p>
      </div>
            <Overlapgroup1 {... {...overlapgroup1Props, handleFieldChange : event => this.handleFieldChange(event)}} />
            <div className="overlap-group-CzwooT" onClick={this.signUp.bind(this)}>
              <img className="rectangle-zF71vY" src={rectangle} />              
                <div className="join montserrat-bold-white-20px">{join}</div>              
            </div>
          </form>
        </div>
        <div className="container-center-horizontal">
          <form className="nexticon-VMr6Om" name="form2" action="form2" method="post">
            <Overlapgroup {...{...overlapgroup2Props, handleFieldChange : event => this.handleFieldChange(event)}}/>
<div className="container-center-horizontal">
        <p className="an-email-is-require montserrat-light-red-14px">{AnEmailIsRequireLogin}</p>
      </div>
            <Overlapgroup1 {...{...overlapgroup12Props, handleFieldChange : event => this.handleFieldChange(event)}} />
            <div className="overlap-group-CzwooT" onClick={this.login.bind(this)}>
              <img className="rectangle-zF71vY" src={rectangle2} />
             
                <div className="montserrat-bold-white-20px">{login}</div>
             
            </div>
          </form>
        </div>
        <div className="container-center-horizontal">
          <form className="group" name="none" action="none" method="post">
            <img className="oval-NOXmfT" src={oval} />
            <img className="oval-E582nk" src={oval2} />
            <Fypsoundslogo {...fypsoundslogoProps} />
          </form>
        </div>
        <div className="container-center-horizontal">
          <form className="footer" name="none" action="none" method="post">
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
          </form>
        </div>
         {this.state.isJoinEmailRequired ? 
         <div className="container-center-horizontal">
        <p className="an-email-is-require montserrat-light-red-14px">{AnEmailIsRequire}</p>
        </div> : null }
        {this.state.isJoinPasswordRequired ? 
        <div className="container-center-horizontal">
        <p className="a-password-is-requi montserrat-light-red-14px">{APasswordIsRequi}</p>
        </div> : null }
        <div className="container-center-horizontal">
          <h1 className="or sofiapro-normal-torch-red-25px">{or}</h1>
        </div>
      </div>
    );
  }
}


class Overlapgroup extends React.Component {
  render() {
    const { rectangle, inputName, inputType, inputPlaceholder, inputRequired} = this.props;

    return (
      <div className="overlap-group">
        <img className="rectangle-NaDWhO" src={rectangle} />
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
        <div className="rectangle-3cn1mj border-class-1"></div>
        <input
        id ="password"
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
          <a href="/about">
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
