import React, { Component } from "react";
import './faq.css'
import {
        VerificationOvel,
        LoginEmailAlreadyExistsOval        
      } from '../../assets/img/index'
import Footer from '../../components/footer'


export default class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    this.state = {
        confirmationCodeSent: false
    };
  }

  render(){
      return(
              <div class="faq anima-screen">
      <div class="anima-container-center-horizontal">
        <div class="bar-C61RwL"></div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="lorem-ipsum-dolor-si-C61RwL montserrat-light-mountain-mist-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at vestibulum erat, id interdum diam. Phasellus
          bibendum neque velit, eget consectetur urna cursus
        </div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="question-C61RwL montserrat-bold-rose-pearl-24px">question?</div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="lorem-ipsu-or-si-copy-C61RwL montserrat-light-mountain-mist-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at vestibulum erat, id interdum diam. Phasellus
          bibendum neque velit, eget consectetur urna cursus
        </div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="question-VMr6Om montserrat-bold-rose-pearl-24px">question?</div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="lorem-ipsu--si-copy-2-C61RwL montserrat-light-mountain-mist-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at vestibulum erat, id interdum diam. Phasellus
          bibendum neque velit, eget consectetur urna cursus
        </div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="question-mzXdH9 montserrat-bold-rose-pearl-24px">question?</div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="lorem-ipsu--si-copy-3-C61RwL montserrat-light-mountain-mist-14px">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at vestibulum erat, id interdum diam. Phasellus
          bibendum neque velit, eget consectetur urna cursus
        </div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="question-QxM5SU montserrat-bold-rose-pearl-24px">question?</div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="group-C61RwL">
          <img class="oval-NOXmfT" src={VerificationOvel} alt=""/>
          <img class="oval-E582nk" src={LoginEmailAlreadyExistsOval} alt=""/>
          <div class="fypsoundslogo-NOXmfT"></div>
        </div>
      </div>
      <div class="anima-container-center-horizontal">
          <Footer/>
      </div>
      </div>
      )
  }

}