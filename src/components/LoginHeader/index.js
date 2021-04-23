import React from 'react'
import FYPLogo from '../../assets/img/fyp-logo-new.png'

import s from './LoginHeader.module.css'

const LoginHeader = () => {
	return (
		<div className={s.container}>
			<div className={s.left__sidebar}>
				<div></div>
				<div></div>
				<div></div>
			</div>
			<div className={s.image__container}><img src={FYPLogo} alt="logo"/></div>
		</div>
	)
}

export default LoginHeader