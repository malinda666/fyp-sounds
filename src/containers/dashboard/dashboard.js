import React, { Component } from "react";
import './dashboard.css'
import Footer from '../../components/footer'
import {
    PasswordRectangle2x,
    TrendsPath3,
    EarningsPath3,
    SoundsNewUserOval52x,
    EarningsNewUserShape2x,
    EarningsNewUserPath2x,
    TrendsNewUserShape2x,
    SoundsNewUserShape
} from '../../assets/img/index'


export default class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render(){
      return(
          <div class="dashboard anima-screen">
      <div class="auto-flex-C61RwL">
        <div class="overlap-group-fhuxN3">
          <a href="edit.html"> <div class="sound-5-copy-m4FBGj anima-smart-layers-pointers"></div></a>
          <div class="upload-your-first-so-m4FBGj">
            <span class="span1-MxP9HX">upload your first sound &amp; make</span><span class="span2-MxP9HX">💰</span>
          </div>
        </div>
        <a href="edit.html"> <div class="sound-5-fhuxN3 anima-smart-layers-pointers"></div></a>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="buttons-C61RwL">
          <div class="sounds-Gt7Q7B">
            <div class="ud83cudfb5-EiSkUu applecoloremoji-normal-granite-gray-30px">🎵</div>
            <div class="sounds-EiSkUu">sounds</div>
            <div class="rectangle-3-EiSkUu"></div>
          </div>
          <a href="trendsnewuser.html">
            <div class="trends-Gt7Q7B anima-smart-layers-pointers">
              <div class="trends-45jQMT">trends</div>
              <div class="ud83dudd25-45jQMT applecoloremoji-normal-granite-gray-30px">🔥</div>
            </div></a
          >
          <a href="earningsnewuser.html">
            <div class="earnings-Gt7Q7B anima-smart-layers-pointers">
              <div class="earnings-pxqN5N">earnings</div>
              <div class="ud83dudcb0-pxqN5N applecoloremoji-normal-granite-gray-30px">💰</div>
            </div></a
          >
        </div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="new-sound-button-C61RwL anima-animate-enter26 anima-smart-layers-pointers">
          <img class="rectangle-eomfES" src={PasswordRectangle2x} alt=""/>
          <div class="new-sound-eomfES montserrat-semi-bold-white-20px">+ new sound</div>
        </div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="group-C61RwL">
          <img class="path-3-NOXmfT" src={TrendsPath3} alt="" />
          <img class="path-3-copy-NOXmfT" src={EarningsPath3} alt="" />
          <img class="oval-5-NOXmfT" src={SoundsNewUserOval52x} alt="" />
          <div class="upload-NOXmfT anima-smart-layers-pointers">
            <img class="shape-uBeRw7" src={SoundsNewUserShape} alt=""/>
            <img class="shape-vFHiyd" src={EarningsNewUserShape2x} alt="" />
            <img class="path-uBeRw7" src={EarningsNewUserPath2x} alt=""/>
          </div>
          <a href="settings.html">
            <div class="settingiconwhite-NOXmfT">
              <div class="settingiconwhite-u3qPnF">
                <img class="shape-nrx20a" src={TrendsNewUserShape2x} alt=""/>
                <div class="rectangle-10-nrx20a anima-hidden"></div>
              </div></div></a>
        </div>
      </div>
      <div class="anima-container-center-horizontal">
          <Footer/>
      </div>
      </div>
      )
  }
}