import React from "react";
import './verification.css';
import config from "../../config/index";
import userManagementService from '../../services/userManagementService';
import ProfileManagementService from "../../services/profileManagementService";
import HashLoader from 'react-spinners/HashLoader'
import LoadingOverlay from "react-loading-overlay";


export default class Password extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      email:'',
      loading: false,
      confirmationCode:'',
      password:'12',
      confirmPassword:'',
      invalidCode: false
    }
  }
  componentDidMount(){
    Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
    
  }
  
   handleFieldChange(event){
    this.setState({password:'1235'})
     if(event){
     this.setState({
      [event.target.id]: event.target.value,
    });
  }
   }

   validateVerifyForm() {
    if (!this.state.confirmationCode || this.state.confirmationCode == '') {
     // toast.error('Confirmation code required');
      return false;
    }

    if (this.state.confirmPassword != this.state.password) {
     // toast.error('Your password and confirmation password do not match');
      return false;
    }

    // if (!this.state.passwordValidation.isSuccess) {
    //   toast.error(
    //     'For your safety, a strong password is required. Please set a password that meets policy requirements.'
    //   );
    //   return false;
    // }

    return true;
  }
  verify (){
    if (this.validateVerifyForm()) {
      this.setState({ loading: true});

      let authObject = {
        ConfirmationCode: this.state.confirmationCode,
        Username: this.props.location.state.email,
        ClientId: config.CLIENT_ID,
        Password: this.state.password,
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
                      .signIn(this.props.location.state.email, this.state.password)
                      .then((res) => {
                        if (res.status == 200) {
                          if (res.data.code != null) {
                            if (res.data.code == 'NotAuthorizedException') {
                               this.setState({errorMessage : 'Invalid Email/Password'});
                            } else {
                              this.setState({errorMessage :'Invalid Email/Password'});
                            }
                             this.setState({ loading: false});                       
                          } else {
                            let auth = {
                              refreshtoken : res.data.refreshToken,
                              access_token : res.data.accessToken,
                              id_token : res.data.idToken.jwtToken,
                              user_dir : result.data.Item.user_dir,
                              email : this.props.location.state.email
                            }
                            localStorage.setItem('auth', JSON.stringify(auth) );
                             this.props.history.push('/dashboard');
                          }
                          this.setState({ loading: false });
                        } else {
                           this.setState({errorMessage :'Login failed, please contact administrator'});
                          this.setState({ loading: false });
                        }
                      });
                    }else {               
                      this.setState({errorMessage :'No account found under this email'});
                      this.setState({loading:false})
                    }
      
                  } else{
                     this.setState({errorMessage :'Login failed, please contact administrator'});
                    this.setState({loading:false})
                  }
                }).catch((err) => {
                    this.setState({errorMessage :'Login failed, please contact administrator'});
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
    }
  };


  render() {
    const {
      backChevron,
      password,
      spanText,
      spanText2,
      spanText3,
      nextIcon,
      save,
      spanText4,
      spanText5,
      IncorrectCodeChe,
      clearCacheCopyProps,
      clearCacheCopy2Props,
      clearCacheCopy3Props,
    } = this.props;

    return (
      <LoadingOverlay
          active={this.state.loading}
          spinner={<HashLoader color={"#f24b76"} size={100}/>}
        >

      <div className="verification">
        <div className="auto-flex-C61RwL">
          <div className="top-bar" onClick={()=>{this.props.history.push('/settigns')}}>
            <img className="back-chevron" src={backChevron} />
          </div>
          <h1 className="password-heading montserrat-bold-rose-pearl-24px">{password}</h1>
        </div>

        <div className="field-wrapper">
          <ClearCacheCopy {...{...clearCacheCopyProps, handleFieldChange: (event)=> this.handleFieldChange(event), id:'password'}} />
          <ClearCacheCopy {...{...clearCacheCopy2Props, handleFieldChange: (event)=> this.handleFieldChange(event), id:'confirmPassword'}} />
        
        </div>

        <div className="nexticon" style={{ backgroundImage: `url(${nextIcon})` }}  onClick={this.verify.bind(this)}>
            <div className="save montserrat-semi-bold-white-20px">{save}</div>
          </div>
       {this.state.invalidCode ? 
        <div className="overlap-group1-C61RwL">
          {/* <p className="didnt-receive-clic montserrat-light-gravel-14px">
            <span className="span1-DPz9jc">{spanText4}</span>
            <span className="span2-DPz9jc">{spanText5}</span>
          </p> */}
          <p className="incorrect-code-che montserrat-light-red-14px">{IncorrectCodeChe}</p>
        </div> : null }
      </div>
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


