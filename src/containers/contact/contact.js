import React, { Component } from "react";
import './contact.css'
import {      
        LoginEmailAlreadyExistsRectangle,
        LoginEmailAlreadyExistsRectangle2x
      } from '../../assets/img/index'
import Footer from '../../components/footer'
import Header from "../../components/header";


export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
        
    };
  }

  render(){
      return(
          <div class="contact anima-screen">
      <div class="anima-container-center-horizontal">
        <div class="bar-C61RwL"></div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="contact-C61RwL montserrat-bold-rose-pearl-24px">contact</div>
      </div>
      <div class="anima-container-center-horizontal">
        <a href="mailto:contact@fypsounds.com" class="anima-full-height-a"
          ><div class="or-shoot-us-an-email-C61RwL montserrat-light-gravel-14px">
            <span class="span1-YPZk8k">or shoot us an email at </span
            ><span class="span2-YPZk8k">contact@fypsounds.com</span>
          </div></a>
      </div>
      <div class="anima-container-center-horizontal">
        <form class="nexticon-copy-C61RwL" name="form2" action="form2" method="post">
          <input type="text" name="trapit" value="" style={{display: "none"}} />
          <div class="overlap-group1-q2VZwF">
            <img
              class="rectangle-copy-Vg8Dgr"
              src={LoginEmailAlreadyExistsRectangle}
              alt=""
            />
            <input
              class="text-name-Vg8Dgr montserrat-light-mountain-mist-14px"
              name="textname"
              placeholder=""
              type="text"
              required
            />
          </div>
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
          <div class="overlap-group2-q2VZwF">
            <div class="rectangle-zlebQ8 border-class-1"></div>
            <textarea
              class="text-type-here-zlebQ8 montserrat-light-mountain-mist-14px"
              name="texttypehere"
              placeholder=""
              type="text"
              required
            ></textarea>
          </div>
          <div class="overlap-group3-q2VZwF">
           <img
                class="rectangle-c5djvB"
                src={LoginEmailAlreadyExistsRectangle2x}
                alt=""
            />
            <img
                class="rectangle-copy-2-c5djvB"
                src={LoginEmailAlreadyExistsRectangle2x}
                alt=""
            />
            <div class="send-c5djvB">send</div>
          </div>
        </form>
      </div>
    <Header/>
      <div class="anima-container-center-horizontal">
          <Footer/>
      </div>
      </div>
      )
  }
}