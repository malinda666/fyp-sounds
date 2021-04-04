import React from 'react';
import {Link } from 'react-router-dom'
import {FaqOvalfrom,EarningsFypcopy} from '../assets/img/index'
import s from './footer.module.css'

const Footer = () => {
  return (
    // <form className="footer-C61RwL" name="none" action="none" method="post">
    //       <input type="text" name="trapit" value="" style={{display : 'none'}} />
    //       <div className="overlap-group9-iPe1yZ">
    //         <img className="oval-iFLr8c" src={LandingOval1} alt=""/>
    //         <div className="group-5-iFLr8c">
    //           <div className="anima-container-center-horizontal">
    //             <a href="/forgotPassword" className="anima-full-height-a">
    //               <div className="x-pHGZZ8 montserrat-semi-bold-white-14px">
    //                 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //                 |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //                 |&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    //                 |
    //               </div></a>
    //           </div>
    //           <div className="anima-container-center-horizontal">
    //             {/* <a href="about.html" className="anima-full-height-a"> */}
    //               <div className="about-pHGZZ8">
    //                 <a href="/about"
    //                   ><div className="about-tmGEPR montserrat-semi-bold-white-14px">About</div></a>
    //               </div>
    //           </div>
    //           <div className="anima-container-center-horizontal">
    //             <a href="/faq" className="anima-full-height-a"
    //               ><div className="faq-pHGZZ8 montserrat-semi-bold-white-14px">FAQ</div></a>
    //           </div>
    //           <div className="anima-container-center-horizontal">
    //             <a href="/contact" className="anima-full-height-a"
    //               ><div className="contact-pHGZZ8 montserrat-semi-bold-white-14px">Contact</div></a>
    //           </div>
    //           <a href="/policy"
    //             ><div className="privacy-policy-pHGZZ8 montserrat-semi-bold-white-14px">Privacy Policy</div></a>
    //         </div>
    //       </div>
    //       <div className="anima-container-center-horizontal">
    //         <div className="fypsoundslogo-iPe1yZ"></div>
    //       </div>
    //       <div className="anima-container-center-horizontal">
    //         <div className="copyright--51-2021-al-iPe1yZ montserrat-normal-white-13px">
    //           Copyright © 2021. All Rights Reserved By Emuq Tech Inc.
    //         </div>
    //       </div> 
    //     </form>
        <div className={s.footer}>
          <div className={s.footerImg}>
            <img src={FaqOvalfrom} alt=""/>
          </div>
          <Link to="/">
              <div className={s.footerLogo}>
                <img src={EarningsFypcopy} alt=""/>
              </div>
          </Link>
          <div className={s.footerLinks}>
            <Link to="/about"><span className="montserrat-semi-bold-white-14px">About</span></Link>
            <Link to="/contact"><span className="montserrat-semi-bold-white-14px">Contact</span></Link>
            <Link to="/policy"><span className="montserrat-semi-bold-white-14px">Privacy Policy</span></Link>
          </div>
          <div className={s.copyrightNotice}>
            <span className="montserrat-normal-white-13px">Copyright © 2021. All Rights Reserved By Emuq Tech Inc.</span>
          </div>
        </div>
  );
};

export default Footer;