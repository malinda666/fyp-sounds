import React from "react";
import './settings.css'
import profileManagementService from "../../services/profileManagementService";
import userManagementService from '../../services/userManagementService';
import HashLoader from 'react-spinners/HashLoader';
import LoadingOverlay from "react-loading-overlay";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from "../../config/index";
import {Link} from 'react-router-dom'
import Cookies from "js-cookie";

export default class Settings extends React.Component {

  constructor() {
        super({})
        this.state = {
          loading : false,
          profileURL:'',
          user_dir:'',
          name: '',
          dateOfBirth: '',
          tikTokUser:'',
          payPal:'',
          auth: null
        }
    }
  
  componentDidMount(){
     Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
     if(localStorage.getItem('auth')){
        this.setState({auth : JSON.parse(localStorage.getItem('auth'))}, () =>  this.getUserProfile());
      }

  }

      getUserProfile() {
    profileManagementService
      .get(this.state.auth.email)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.Item != null){
          this.setState({
            profileURL: res.data.Item.profileImagePath,
            name : res.data.Item.name,
            dateOfBirth: res.data.Item.dateOfBirth,
            tikTokUser: res.data.Item.tikTokUser,
            payPal : res.data.Item.payPal
          });
          this.setState({ loading: false });
        }
        } else {
         // toast.error("Unable to get user information");
          this.setState({ loading: false });
        }
      })
      .catch((err) => {
        console.log(err);
        //toast.error("Unable to get user information");
        this.setState({ loading: false });
      });
  }

  handleFieldChange(event){
     if(event){
     this.setState({
      [event.target.id]: event.target.value,
    });
  }
   }

   save = () => {
     this.setState({ loading: true });
      profileManagementService
      .updateProfile(this.state.auth.email, this.state.name, this.state.dateOfBirth, this.state.payPal, this.state.tikTokUser)
        .then((result) => {
          if (result.status === 200) {
            if (result.data.Item != null) {
              this.getUserProfile();
               this.setState({ loading: false });

            }
            else{
               this.setState({ loading: false });
            }
          }
          else{
             this.setState({ loading: false });
             
          }
        }).catch((err) => {
              this.setState({ loading: false });
              window.alert('somethin went wrong')
        }).finally(()=>{
        });
   }

   logout(){
     localStorage.clear();
     Cookies.set("id_token", '');
     Cookies.set("refreshtoken", '');
     this.props.userHasAuthenticated(false);
     this.props.history.push('/login')
   }

   changePassword(){
      this.setState({
        loading: true
      });
      let authObject = {
        ClientId: config.CLIENT_ID,
        Username: this.state.auth.email,
      };
           userManagementService
              .changePassword(authObject)
              .then((res) => {
                if (res.status === 200) {
                  if (res.data.CodeDeliveryDetails == null) {
                    this.setState({ loading: false, errorMessage: res.code });
                  } else {

                    this.props.history.push({
                          pathname: '/verifyPassword',
                          state: { email: this.state.auth.email}
                            });
                    this.setState({ loading: false });
                    toast.success('Confirmation code sent to ' + this.state.auth.email);
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

  render() {
    const {
      backChevron,
      settings,
      name,
      charlieDU2019Amelio,
      birthday,
      inputName,
      inputType,
      inputPlaceholder,
      inputRequired,
      inputName2,
      inputType2,
      inputPlaceholder2,
      inputRequired2,
      inputName3,
      inputType3,
      inputPlaceholder3,
      inputRequired3,
      password,
      inputName4,
      inputType4,
      inputPlaceholder4,
      inputRequired4,
      paypal,
      inputName5,
      inputType5,
      inputPlaceholder5,
      inputRequired5,
      shape,
      logout,
      backChevron2,
      nextIcon,
      save,
      clearCacheCopyProps,
      clearCacheCopy2Props,
    } = this.props;

    let defaultDate= new Date();

    return (
       <LoadingOverlay
          active={this.state.loading}
          spinner={<HashLoader color={"#f24b76"} size={100}/>}
        >
      <form className="settings" name="form1" action="form1" method="post">
        <div className="auto-flex-C61RwL">
          <div className="top-bar">
            <Link to="/dashboard" className="back-icon">
              <img className="back-chevron-S8W5J0" src={backChevron}  />
            </Link>
          </div>
          <h1 className="settings-header montserrat-bold-rose-pearl-24px">{settings}</h1>
        </div>
        <div className="field clear-cache-copy-C61RwL">
          <div className="name sfprodisplay-regular-normal-granite-gray-20px">{name}</div>
          <input type="text" id="name" name="name" className="name-input sfprodisplay-regular-normal-pink-swan-15px" placeholder={this.state.name?this.state.name:"Your Name"}
            value={this.state.name}
            onChange={this.handleFieldChange.bind(this)}></input>
          {/* <div className="charlie-du-019-amelio sfprodisplay-regular-normal-pink-swan-15px">{this.state.name}</div> */}
        </div>
        <div className="field clear-cache-copy-VMr6Om">
          <div className="birthday sfprodisplay-regular-normal-granite-gray-20px">{birthday}</div>
          <input type="date" id="dateOfBirth" name="dateOfBirth" className="birthday-input sfprodisplay-regular-normal-pink-swan-15px"
            value={this.state.dateOfBirth}
            defaultValue={defaultDate}
            onChange={this.handleFieldChange.bind(this)}></input>
        </div>
        <ClearCacheCopy {...{...clearCacheCopyProps, handleFieldChange : event => this.handleFieldChange(event), value : this.state.auth? this.state.auth.email?this.state.auth.email:"" : '', id : 'email', readOnly: true}} />
        {/* <ClearCacheCopy {...{...clearCacheCopy2Props, handleFieldChange : event => this.handleFieldChange(event), value : this.state.tikTokUser?this.state.tikTokUser:"" , id:'tikTokUser', readOnly: false,inputPlaceholder:this.state.tikTokUser?this.state.tikTokUser:"Your TikTok Id"}} /> */}
         <div className="field clear-cache-copy-Brk1wZ">
          <div className="email sfprodisplay-regular-normal-granite-gray-20px">TikTok User</div>
            <input type="text" id="tikTokUser" name="textcharlidamelio" className="text-email emailcom sfprodisplay-regular-normal-pink-swan-15px" placeholder={this.state.tikTokUser?this.state.tikTokUser:"Your TikTok Id"}
            value={this.state.tikTokUser}
            onChange={this.handleFieldChange.bind(this)}></input>
        </div>
        <div className="field clear-cache">
          <div className="password-wrap sfprodisplay-regular-normal-granite-gray-20px">Change Password</div>
           <a >
            <div className="group" onClick={this.changePassword.bind(this)}>
              <img className="back-chevron-1VxUKy" src={backChevron2} />
              <div className="rectangle-10 hidden "></div>
            </div>
          </a>
        </div>
        <div className="field clear-cache-copy-Brk1wZ">
          <div className="email sfprodisplay-regular-normal-granite-gray-20px">{paypal}</div>
            <input type="text" id="payPal" name="payPal" className="text-email emailcom sfprodisplay-regular-normal-pink-swan-15px" placeholder={this.state.payPal?this.state.payPal:"Your PayPal Acc"}
            value={this.state.payPal}
            onChange={this.handleFieldChange.bind(this)}></input>
          {/* <input
          id='payPal'
            className="text sfprodisplay-regular-normal-pink-swan-15px"
            name={inputName5}
            placeholder={inputPlaceholder5}
            type={inputType5}
            required={inputRequired5}
            value={this.state.payPal}
          /> */}
          {/* <img className="shape" src={shape} /> */}
        </div>
        <div className="field clear-cache">
          <div className="logout sfprodisplay-regular-normal-granite-gray-20px">{logout}</div>
          <a >
            <div className="group" onClick={this.logout.bind(this)}>
              <img className="back-chevron-1VxUKx" src={backChevron2} />
            </div>
          </a>
        </div>
       
          <Link to="/dashboard"className="nexticon" style={{ backgroundImage: `url(${nextIcon})` }} onClick ={this.save.bind(this)}>
            <div className="save montserrat-semi-bold-white-20px">{save}</div>
          </Link>
      
      </form>
      </LoadingOverlay>
    );
  }
}


class ClearCacheCopy extends React.Component {
  render() {
    const { email, inputName, inputType, inputPlaceholder, inputRequired } = this.props;

    return (
      <div className="clear-cache-copy-Brk1wZ">
        <div className="email sfprodisplay-regular-normal-granite-gray-20px">{email}</div>
        <input
          id={this.props.id}
          className="text-email emailcom sfprodisplay-regular-normal-pink-swan-15px"
          name={inputName}
          placeholder={inputPlaceholder}
          type={inputType}
          required={inputRequired}
          value={this.props.value}
          onChange={this.props.handleFieldChange}
          readOnly={this.props.readOnly}
        />
      </div>
    );
  }
}


