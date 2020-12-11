import React, { Component } from "react";
import './home.css'
import Footer from '../../components/footer'
import {
 LandingOval1,
 LandingOval2,
 LandingOval3,
 LandingOval4,
 LoginRectangle2x,
 MusicForm5bRectangle
} from '../../assets/img/index'

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      email: "",
      password: "",
      newUser: null
    };
  }

   render() {
    return ( 
        <div class="landing anima-animate-enter12 anima-screen" anima-show-on-scroll>
      <div class="anima-container-center-horizontal">
        <div class="rectangle-C61RwL anima-animate-enter8" anima-show-on-scroll>
          <video
            src='https://anima-uploads.s3.amazonaws.com/projects/5f77aacbd0b4690151d39ead/files/fyp-bg-video.mov'
            loop
            autoplay="autoplay"
            playsinline
            muted
          ></video>
        </div>
      </div>
      <div class="anima-container-center-horizontal">
        <img class="oval-C61RwL" src={LandingOval1} alt="" />
      </div>
      <div class="anima-container-center-horizontal">
        <img class="oval-VMr6Om" src={LandingOval2} alt="" />
      </div>
      <div class="anima-container-center-horizontal">
        <img class="oval-mzXdH9" src={LandingOval3} alt="" />
      </div>
      <div class="anima-container-center-horizontal">
        <img class="oval-QxM5SU" src={LandingOval4} alt="" />
      </div>
      <div class="anima-container-center-horizontal">
        <div class="fypsoundslogo-C61RwL anima-animate-enter9"></div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="anything-can-go-vira-C61RwL anima-animate-enter10" anima-show-on-scroll>anything can go viral.</div>
      </div>
      <div class="anima-container-center-horizontal">
        <div class="create-tik-tok-sounds-C61RwL anima-animate-enter11" anima-show-on-scroll>
          <span class="span1-t2xaPz">create TikTok sounds &amp; make</span><span class="span2-t2xaPz">💰</span>
        </div>
      </div>
       <div class="anima-container-center-horizontal">
        <a href="/login" class="anima-full-height-a">
          <div class="nexticon-C61RwL anima-smart-layers-pointers">
            <img
              class="rectangle-rGr1Cp"
              src={MusicForm5bRectangle}
              alt=""
            />           
              <img class="rectangle-xd37is" src={LoginRectangle2x} alt=""
            />
            <div class="upload-sounds-rGr1Cp">upload sounds</div>
          </div></a
        >
      </div>
      <div class="anima-container-center-horizontal">
          <Footer/>
       </div> 
    </div>
    )
   }

}