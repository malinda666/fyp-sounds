import React, { Component } from "react";
import './login.css'
import {LoginEmailAlreadyExistsRectangle, 
        LoginEmailAlreadyExistsRectangle2x,
        VerificationOvel,
        LoginEmailAlreadyExistsOval,
        LoginRectangle2x
      } from '../../assets/img/index'
import Footer from '../../components/footer'


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      newUser: null
    };
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
        <a href="recovery.html" class="anima-full-height-a"
          ><div class="forgot-your-access-C61RwL montserrat-light-gravel-14px">
            <span class="span1-VhPCr0">forgot your access? no worries, click </span
            ><span class="span2-VhPCr0">here</span>
          </div></a>
      </div>
      <div class="anima-container-center-horizontal">
        <form class="nexticon-C61RwL-Join" name="form8" action="form8" method="post">
          <input type="text" name="trapit" value="" style={{display : 'none'}} />
          <div class="overlap-group6-rGr1Cp">
            <img
              class="rectangle-JHJaxP"
              src={LoginEmailAlreadyExistsRectangle}
              alt=""
            />
            <input
              class="text-email-JHJaxP montserrat-light-mountain-mist-14px"
              name="textemail"
              placeholder="email"
              type="email"
              required
            />
          </div>
          <div class="overlap-group7-rGr1Cp">
            <div class="rectangle-nf2t0w border-class-1"></div>
            <input
              class="text-nf2t0w montserrat-light-mountain-mist-14px"
              name="text"
              placeholder="***********"
              type="password"
              required
            />
          </div>
          <div class="overlap-group8-rGr1Cp">
            <a href="soundsnewuser.html"
              ><img class="rectangle-SB4sVT" src={LoginRectangle2x} alt=""
            /></a>
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
              class="text-verif-ation-code-NaDWhO montserrat-light-mountain-mist-14px"
              name="textverificationcode"
              placeholder="verification code"
              type="number"
              required
            />
          </div>
          <div class="overlap-group1-rGr1Cp">
            <img class="rectangle-3cn1mj" src={LoginRectangle2x} alt="" />
            <div class="confirm-3cn1mj montserrat-semi-bold-white-20px">confirm</div>
          </div>
        </div>
      </div>
      <div class="anima-container-center-horizontal"><div class="ud83dudd75ufe0f-C61RwL">🕵️</div></div>
       <div class="anima-container-center-horizontal">
        <div class="didnu2019t-ceive-clic-C61RwL montserrat-light-gravel-14px">
          <span class="span1-LBLLyx">didn’t receive? click here to </span><span class="span2-LBLLyx">re-send</span>
        </div>
      </div>
      <div class="anima-container-center-horizontal">
        <a href="recovery.html" class="anima-full-height-a"><div class="invalid-code-C61RwL">*invalid code</div></a>
      </div>
      </div>
    )
   }

   render() {
    return (  
       <div class="login anima-screen">
      {
      this.state.newUser === null
          ? this.renderForm()
          : 
          this.renderConfirmationForm()
           }   

      <div class="anima-container-center-horizontal">
        <form class="group-C61RwL" name="none" action="none" method="post">
          <input type="text" name="trapit" value="" style={{display : 'none'}}/><img
            class="oval-NOXmfT"
            src={VerificationOvel}
            alt=""
          />
          <img class="oval-E582nk" src={LoginEmailAlreadyExistsOval} alt="" />
          <div class="fypsoundslogo-NOXmfT"></div>
        </form>
      </div>
      <div class="anima-container-center-horizontal">
        <Footer/>       
      </div>
    </div>
    )
   }

}