import React from "react";
import './home.css'
import LazyLoad from 'react-lazyload';

export default class Landing extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      routePath: ''
    }
  }

  render() {
    const {
      oval,
      oval2,
      oval3,
      anythingCanGoVira,
      spanText,
      spanText2,
      oval4,
      label1,
      faq,
      contact,
      privacyPolicy,
      copyright2512021Al,
      rectangle,
      rectangle2,
      uploadSounds,
      ovalProps,
      fypcopyProps,
      aboutProps,
    } = this.props;

    return (
      <div className="landing animate-enter4">
        <div className="container-center-horizontal">
          <div className="rectangle-C61RwL animate-enter">
            <LazyLoad height={200}>
            <video
              src="https://anima-uploads.s3.amazonaws.com/projects/5f77aacbd0b4690151d39ead/files/fyp-bg-video.mov"
              loop
              autoplay="autoplay"
              playsinline
              muted
            ></video>
            </LazyLoad>
          </div>
        </div>
        <div className="container-center-horizontal">
          <img className="oval-C61RwL" src={oval} />
        </div>
        <div className="container-center-horizontal">
          <img className="oval-VMr6Om" src={oval2} />
        </div>
        <div className="container-center-horizontal">
          <img className="oval-mzXdH9" src={oval3} />
        </div>
        <Oval {...ovalProps} />
        <Fypcopy {...fypcopyProps} />
        <div className="container-center-horizontal">
          <h1 className="anything-can-go-vira sofiapro-normal-white-25px animate-enter2">{anythingCanGoVira}</h1>
        </div>
        <div className="container-center-horizontal">
          <div className="create-tik-tok-sounds sofiapro-normal-white-25px animate-enter3">
            <span className="span1-t2xaPz">{spanText}</span>
            <span className="span2-t2xaPz">{spanText2}</span>
          </div>
        </div>
        <div className="container-center-horizontal">
          
          <div className="footer">
            <div className="overlap-group">
              <img className="oval-4K0abD" src={oval4} />
              <div className="group-5">
                <About {...aboutProps} />
                <div className="container-center-horizontal footer-items">
                  <p className="footer-items-devider">|</p>
                  <a href="/faq">
                  <div className="montserrat-semi-bold-white-14px">{faq}</div>
                  </a>
                </div>
                <div className="container-center-horizontal footer-items">
                < p className="footer-items-devider">|</p>
                  <a href="/contact">
                  <div className="montserrat-semi-bold-white-14px">{contact}</div>
                  </a>
                </div>
                <div className="container-center-horizontal footer-items">
                  <p className="footer-items-devider">|</p>
                   <a href="/policy">
                <div className="montserrat-semi-bold-white-14px">{privacyPolicy}</div>
                </a>
                </div>
              </div>
            </div>
            <div className="container-center-horizontal">
              <p className="copyright--51-2021-al montserrat-normal-white-13px">{copyright2512021Al}</p>
            </div>
          </div>

        </div>
        <div className="container-center-horizontal" onClick={()=> this.props.history.push('/login')}>
           
          <div className="nexticon smart-layers-pointers ">
            
            <img className="rectangle-rGr1Cp" src={rectangle} />
           
              <img className="rectangle-xd37is" src={rectangle2} />
        
            <div className="upload-sounds montserrat-bold-white-20px">{uploadSounds}</div>
            
          </div>
              
        </div>
      </div>
    );
  }
}


class Oval extends React.Component {
  render() {
    const { oval } = this.props;

    return (
      <div className="container-center-horizontal">
        <img className="oval-QxM5SU" src={oval} />
      </div>
    );
  }
}


class Fypcopy extends React.Component {
  render() {
    const { fypsoundsLogo } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="fypsoundslogo animate-enter4" style={{ backgroundImage: `url(${fypsoundsLogo})` }}></div>
      </div>
    );
  }
}


class About extends React.Component {
  render() {
    const { about } = this.props;

    return (
      <div className="container-center-horizontal footer-items">
          <a href="/about">
            <div className="montserrat-semi-bold-white-14px">{about}</div>
          </a>
      </div>
    );
  }
}

