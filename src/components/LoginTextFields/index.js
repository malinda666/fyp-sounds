import { useState, useRef} from 'react'
import s from './LoginTextFields.module.css'
import { Link } from 'react-router-dom'

const LoginTextFields = ({isLogin}) => {
	return (
		<div className={s.container}>
			<input
	          name="email"
	          placeholder="email address"
	          type="email"
	          required
	           // onChange={this.handleEmailFieldChange}
	        /><br/>
	        <input
	          name="password"
	          placeholder="password"
	          type="password"
	          required
	           // onChange={this.handlePasswordFieldChange}
	        />
	        {
	        	isLogin && 
	        		<Link to="/forgotPasswordPage"><p className={s.forgot__pwd}>forgot password?</p></Link>
	        	}
		</div>
	)
}

export default LoginTextFields