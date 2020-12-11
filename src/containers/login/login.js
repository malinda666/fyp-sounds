import React, { Component } from "react";
import './login.css'
import {LoginEmailAlreadyExistsRectangle, 
        LoginEmailAlreadyExistsRectangle2x,
        LoginRectangle2x
      } from '../../assets/img/index'
import Footer from '../../components/footer'
import Header from "../../components/header";
import userManagementService from '../../services/userManagementService'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default class Login extends Component {
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
  }

  validateForm() {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!this.state.email || this.state.email === '') {
     toast.error('Email required');
      return false;
    }

    if(!re.test(this.state.email)){
      toast.error('Invalid email format');
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


   signUp = () => {
      if (this.validateForm()) {
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
               toast.error('Signup process failed');
               this.setState({errorMessage : 'Signup process failed'});
               }
            } else {
              this.setState({
                deliveryEmail: result.data.CodeDeliveryDetails.Destination,
                newUser: result.data,
              });
            }
            this.setState({ loading: false });
          } else {
            this.setState({ loading: false, errorMessage : 'Signup process failed' });
            toast.error('Signup process failed');
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
          toast.error('Signup process failed');
        });
      }

   }

   verifyUser = () =>{
    this.setState({ loading: true});
    userManagementService
      .confirmUser(this.state.email.trim(), this.state.verificationCode)
      .then((res) => {
        if (res.status === 200) {
          userManagementService
            .signIn(this.state.email.trim(), this.state.password)
            .then((res) => {
              if(res.status === 200){
              localStorage.setItem('refreshtoken', res.data.refreshToken);
              localStorage.setItem('access_token', res.data.accessToken);
              localStorage.setItem('id_token', res.data.idToken.jwtToken);
              
              // userAPI
              //   .getUserByEmail(this.state.email)
              //   .then((result) => {
              //     if (result.status == 200) {
              //       if (result.data.data.User.length === 0) {
              //         userAPI
              //           .CreateUser(
              //             this.state.fullname,
              //             this.state.email,
              //             date_of_birth,
              //             this.state.country.label,
              //             this.state.role
              //           )
              //           .then((response) => {
              //             if (response.status == 200) {
              //               this.handleUpload(
              //                 response.data.data.CreateUser.full_name,
              //                 response.data.data.CreateUser.country,
              //                 response.data.data.CreateUser.role,
              //                 response.data.data.CreateUser.user_dir
              //               );
              //             }
              //           })
              //           .catch((err) => {
              //             this.setState({
              //               loading: false,
              //               verifyButtonText: 'Verify',
              //             });
              //             toast.error('unable to create user');
              //           });
              
                   // } else {
                     toast.success('User verified Successfully');
                      this.setState({ loading: false });
                      this.props.history.push("/dashboard");
                      // this.props.history.push(ROUTES.form);
                   // }
                  //}
                // })
                // .catch((err) => {
                //   this.setState({ loading: false});
                //   //toast.error('unable to create user');
                // });
              }
              else{
                this.setState({ loading: false});
                toast.error('unable to signin, please contact administrator');
              }
            })
            .catch((err) => {
              this.setState({ loading: false});
              toast.error('unable to signin, please contact administrator');
            });
        } else {
          this.setState({ loading: false});
          toast.error('unable to verify user');
        }
      })
      .catch((err) => {
        this.setState({ loading: false});
        if (err.response.data.includes('UsernameExistsException')) 
        {
          this.setState({isInvalidCode : true})
        }
        else
          toast.error('unable to verify user, contact administrator');
      });
  }

  reSend= () => {
    userManagementService
      .resendConfirmationCode(this.state.email.trim())
      .then((res) => {
        if (res.status === 200) {
          toast.success('Verification code sent to ' + this.state.email.trim());
        } else {
          toast.error('Unable to send verification code');
        }
      })
      .catch((err) => {
        toast.error('Unable to send verification code');
      });
  }


   handleFieldChange(event){
     this.setState({
      [event.target.id]: event.target.value,
    });
   }

   renderForm() {
    return (
       <div>
      <div class="anima-container-center-horizontal">
        <div class="bar-C61RwL"></div>
      </div>
      <div class="anima-container-center-horizontal">
        <form class="nexticon-copy-C61RwL" name="form7" action="form7" method="post">
          <input type="text" name="trapit" value="" style={{display : 'none'}} />
          <div class="or-q2VZwF">or</div>
          <div class="overlap-group-q2VZwF">
            <img
              class="rectangle-ZtaLEy"
              src={LoginEmailAlreadyExistsRectangle}
              alt=""
            />
            <input
              class="text-email-ZtaLEy montserrat-light-mountain-mist-14px"
              name="textemail"
              placeholder="email"
              type="email"
              required
            />
          </div>
          <div class="overlap-group1-q2VZwF">
            <div class="rectangle-Vg8Dgr border-class-1"></div>
            <input
              class="text-Vg8Dgr montserrat-light-mountain-mist-14px"
              name="text"
              placeholder="***********"
              type="password"
              required
            />
          </div>
          <div class="overlap-group2-q2VZwF">
           
              <img
                class="rectangle-zlebQ8"
                src={LoginEmailAlreadyExistsRectangle2x}
                alt=""
            />
            <div class="login-zlebQ8">login</div>
          </div>
        </form>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="bar-C61RwL"></div>
      </div>
      <div class="anima-container-center-horizontal">
        <form class="nexticon-copy-VMr6Om" name="none" action="none" method="post">
          <input type="text" name="trapit" value="" style={{display : 'none'}} />
          <div class="or-7M0e6D">or</div>
          <div class="overlap-group3-7M0e6D">
            <img
              class="rectangle-z2N0p4"
              src={LoginEmailAlreadyExistsRectangle}
              alt=""
            />
            <input
              class="text-email-z2N0p4 montserrat-light-mountain-mist-14px"
              name="textemail"
              placeholder="email"
              type="email"
              required
            />
          </div>
          <div class="overlap-group4-7M0e6D">
            <div class="rectangle-G8qwHz border-class-1"></div>
            <input
              class="text-G8qwHz montserrat-light-mountain-mist-14px"
              name="text"
              placeholder="***********"
              type="password"
              required
            />
          </div>
          <div class="overlap-group5-7M0e6D">
            <a href="sounds.html"
              ><img
                class="rectangle-HEidus"
                src={LoginEmailAlreadyExistsRectangle2x}
                alt=""
            /></a>
            <div class="login-HEidus">login</div>
          </div>
        </form>
      </div>
      <div class="anima-container-center-horizontal">
          <div class="forgot-your-access-C61RwL montserrat-light-gravel-14px">
            <span class="span1-VhPCr0">forgot your access? no worries, click </span
            ><span class="span2-VhPCr0"><a href="/forgotPassword">here</a></span>
          </div>
      </div>
      <div class="anima-container-center-horizontal">
        <form class="nexticon-C61RwL-Join" name="form8" action="form8" method="post" >
          <input type="text" name="trapit" value="" style={{display : 'none'}} />
          <div class="overlap-group6-rGr1Cp">
            <img
              class="rectangle-JHJaxP"
              src={LoginEmailAlreadyExistsRectangle}
              alt=""
            />
            <input
              id="email"
              class="text-email-JHJaxP montserrat-light-mountain-mist-14px"
              name="textemail"
              placeholder="email"
              type="email"
              required
              onChange={this.handleFieldChange.bind(this)}
            />
          </div>
          <div class="overlap-group7-rGr1Cp">
            <div class="rectangle-nf2t0w border-class-1"></div>
            <input
              id = "password"
              class="text-nf2t0w montserrat-light-mountain-mist-14px"
              name="text"
              placeholder="***********"
              type="password"
              required
              onChange={this.handleFieldChange.bind(this)}
            />
          </div>
          <div class="overlap-group8-rGr1Cp"  onClick={this.signUp.bind(this)}>            
              <img class="rectangle-SB4sVT" src={LoginRectangle2x} alt=""
            />
            <div class="join-SB4sVT">join</div>
          </div>
        </form>
      </div>
</div>
    )
   }

   renderConfirmationForm() {
    return (
         <div>
      <div class="anima-container-center-horizontal">
        <div class="nexticon-C61RwL">
          <div class="check-your-email-for-rGr1Cp">check your email for</div>
          <div class="overlap-group-rGr1Cp">
            <img
              class="rectangle-NaDWhO"
              src={LoginEmailAlreadyExistsRectangle}
              alt=""
            />
            <input
              id="verificationCode"
              class="text-verif-ation-code-NaDWhO montserrat-light-mountain-mist-14px"
              name="textverificationcode"
              placeholder="verification code"
              type="number"
              onChange={this.handleFieldChange.bind(this)}
              required
            />
          </div>
          <div class="overlap-group1-rGr1Cp">
            <img class="rectangle-3cn1mj" src={LoginRectangle2x} alt="" onClick={this.verifyUser.bind(this)} />
            <div class="confirm-3cn1mj montserrat-semi-bold-white-20px">confirm</div>
          </div>
        </div>
      </div>
      <div class="anima-container-center-horizontal"><div class="ud83dudd75ufe0f-C61RwL">🕵️</div></div>
       <div class="anima-container-center-horizontal">
        <div class="didnu2019t-ceive-clic-C61RwL montserrat-light-gravel-14px">
          <span class="span1-LBLLyx">didn’t receive? click here to </span><span class="span2-LBLLyx" onClick={this.reSend.bind(this)}>re-send</span>
        </div>
      </div>
      {
        this.state.isInvalidCode ? 
         <div class="anima-container-center-horizontal">
        <a href="/forgotPassword" class="anima-full-height-a"><div class="invalid-code-C61RwL">*invalid code</div></a>
      </div> : null
      }
     
      </div>
    )
   }

   render() {
    return (  
      
       <div class="login anima-screen">
          <ToastContainer />
      {
      this.state.newUser === null
          ? this.renderForm()
          : 
          this.renderConfirmationForm()
           }   

     <Header/>
      <div class="anima-container-center-horizontal">
        <Footer/>       
      </div>
    </div>
    )
   }

}