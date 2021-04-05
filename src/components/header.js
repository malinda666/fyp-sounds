import React from 'react';
import {EarningsFypcopy,
        LoginEmailAlreadyExistsOval,
        LandingOval3
      } from '../assets/img/index'

import s from './header.module.css'
const Header = ({headerImg}) => {
  return (
        <div className={s.wrapper}>
          <div className={s.imageOne}>
            <img src={LoginEmailAlreadyExistsOval} alt="imageOne"/>
          </div>
          <div className={s.imageTwo}>
            <img src={LandingOval3} alt="imageTwo"/>
          </div>
          <div className={s.logo}>
            <img src={headerImg?headerImg : EarningsFypcopy} alt="logo"/>
          </div>
        </div>
  )
}


export default Header;
