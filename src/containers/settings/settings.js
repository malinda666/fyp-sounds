import React from "react";
import './settings.css'
import profileManagementService from "../../services/profileManagementService";

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
          payPal:''
        }
    }
  
  componentDidMount(){
     if(localStorage.getItem('user_dir')){
        this.setState({user_dir : localStorage.getItem('user_dir')});
      }
      this.getUserProfile();
  }

      getUserProfile() {
    profileManagementService
      .get(this.props.location?.state?.email)
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
      .updateProfile(this.props.location.state.email, this.state.name, this.state.dateOfBirth, this.state.payPal, this.state.tikTokUser)
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
        });
   }

   logout(){
     localStorage.clear();
     this.props.history.push('/login')
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
      <form className="settings" name="form1" action="form1" method="post">
        <div className="auto-flex-C61RwL">
          <div className="top-bar">
            <div className="back-icon" onClick={ () => { this.props.history.push({
                    pathname: '/dashboard',
                    state: { email: this.props.location.state.email}
                      })}}>
              <img className="back-chevron-S8W5J0" src={backChevron}  />
            </div>
          </div>
          <h1 className="settings montserrat-bold-rose-pearl-24px">{settings}</h1>
        </div>
        <div className="clear-cache-copy-C61RwL">
          <div className="name sfprodisplay-regular-normal-granite-gray-20px">{name}</div>
          <input type="text" id="name" name="name" className="name-input"
            value={this.state.name}
            onChange={this.handleFieldChange.bind(this)}></input>
          {/* <div className="charlie-du-019-amelio sfprodisplay-regular-normal-pink-swan-15px">{this.state.name}</div> */}
        </div>
        <div className="clear-cache-copy-VMr6Om">
          <div className="birthday sfprodisplay-regular-normal-granite-gray-20px">{birthday}</div>
          <input type="date" id="dateOfBirth" name="dateOfBirth" className="birthday-input"
            value={this.state.dateOfBirth}
            defaultValue={defaultDate}
            onChange={this.handleFieldChange.bind(this)}></input>
        </div>
        <ClearCacheCopy {...{...clearCacheCopyProps, handleFieldChange : event => this.handleFieldChange(event), value : this.props.location?.state?.email, id : 'email', readOnly: true}} />
        <ClearCacheCopy {...{...clearCacheCopy2Props, handleFieldChange : event => this.handleFieldChange(event), value : this.state.tikTokUser, id:'tikTokUser', readOnly: false}} />
        <div className="clear-cache-copy-Brk1wZ">
          <div className="password-wrap sfprodisplay-regular-normal-granite-gray-20px">{password}</div>
          <input
            className="text-9XXxfm sfprodisplay-regular-normal-pink-swan-15px password-input"
            name={inputName4}
            placeholder={inputPlaceholder4}
            type='password'
            required={inputRequired4}
            readOnly
          />
        </div>
        <div className="clear-cache">
          <div className="rectangle-19-copy"></div>
          <div className="rectangle-19-copy"></div>
          <div className="paypal sfprodisplay-regular-normal-granite-gray-20px">{paypal}</div>
            <input type="text" id="name" name="name"
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
          <img className="shape" src={shape} />
        </div>
        <div className="clear-cache">
          <div className="rectangle-19-copy"></div>
          <div className="rectangle-19-copy"></div>
          <div className="logout sfprodisplay-regular-normal-granite-gray-20px">{logout}</div>
          <a >
            <div className="group" onClick={this.logout.bind(this)}>
              <img className="back-chevron-1VxUKx" src={backChevron2} />
              <div className="rectangle-10 hidden "></div>
            </div>
          </a>
        </div>
       
          <div className="nexticon" style={{ backgroundImage: `url(${nextIcon})` }} onClick ={this.save.bind(this)}>
            <div className="save montserrat-semi-bold-white-20px">{save}</div>
          </div>
      
      </form>
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


