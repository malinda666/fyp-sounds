import React, { Component } from "react";
import './forgotPassword.css'
import {LoginEmailAlreadyExistsRectangle,
        LoginRectangle2x,
        EditBackChevron
      } from '../../assets/img/index'
import Footer from '../../components/footer'
import Header from "../../components/header";


export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
        confirmationCodeSent: false
    };
  }

   renderForm() {
    return (
        <div class="recovery anima-screen">
            <div class="anima-container-center-horizontal">
        <div class="nexticon-C61RwL">
          <div class="forgot-your-access-rGr1Cp">forgot your access?</div>
          <div class="overlap-group-rGr1Cp">
            <img
              class="rectangle-NaDWhO"
              src={LoginEmailAlreadyExistsRectangle}
              alt=""
            />
            <input
              class="text-email-NaDWhO montserrat-light-mountain-mist-14px"
              name="textemail"
              placeholder="email"
              type="email"
              required
            />
          </div>
        <div class="anima-container-center-horizontal">
        <a class="anima-full-height-a"
          ><div class="no-account-found-un-C61RwL">*no account found under this email. <br /></div
        ></a>
      </div>
      <div class="anima-container-center-horizontal">
        <a href="login.html" class="anima-full-height-a"
          ><div class="new-user-join-here-C61RwL montserrat-light-gravel-14px">
            <span class="span1-vTI2Tg"><br /><br />new user? join</span><span class="span2-vTI2Tg"> here</span>
          </div></a
        >
      </div>
          <div class="overlap-group1-rGr1Cp">
            <img class="rectangle-3cn1mj" src={LoginRectangle2x} alt=""/>
            <div class="send-3cn1mj montserrat-semi-bold-white-20px">send</div>
          </div>
        </div>
      </div>
      <div class="anima-container-center-horizontal"><div class="ud83eudd26-u2640ufe0f-C61RwL">🤦🏾‍♀️</div>
      </div>
<Header/>
       <div class="anima-container-center-horizontal">
           <Footer/>
       </div>
      </div>
    )
   }

   renderConfirmationForm() {
    return (
            <div class="anima-container-center-horizontal">
      <form class="password anima-screen" name="form9" action="form9" method="post">
        <div class="auto-flex-C61RwL">
          <div class="top-bar-fhuxN3">
            <div class="back-icon-msdVCT">
              <img
                class="back-chevron-S8W5J0"
                src={EditBackChevron}
                alt=""
              />
            </div>
          </div>
          <div class="password-fhuxN3 montserrat-bold-rose-pearl-24px">password</div>
        </div>
        <div class="clear-cache-copy-C61RwL">
          <div class="old-password-z9wHcl sfprodisplay-regular-normal-granite-gray-20px">Old Password</div>
          <input
            class="text-z9wHcl sfprodisplay-regular-normal-pink-swan-15px"
            name="text"
            placeholder=""
            type="password"
            required
          />
        </div>
        <div class="clear-cache-copy-2-C61RwL">
          <div class="new-password-R3TVeF sfprodisplay-regular-normal-granite-gray-20px">New Password</div>
          <input
            class="text-R3TVeF sfprodisplay-regular-normal-pink-swan-15px"
            name="text"
            placeholder=""
            type="password"
            required
          />
        </div>
       
          <div class="nexticon-C61RwL"><div class="save-rGr1Cp montserrat-semi-bold-white-20px">save</div></div>
        
      </form>
    </div>
    )
   }

  render(){
      return(
    <div >
       {
       this.state.confirmationCodeSent
          ? 
          this.renderConfirmationForm()
          : 
         this.renderForm()
          }
      
       </div>
      )
  }

}
