import s from './ForgotPasswordPage.module.css'

import LoginHeader from '../LoginHeader'

import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import CTAButton from '../CTAButton'

const ForgotPasswordPage = () => {

	const history = useHistory()
	const [errors, setErrors] = useState([])
	useEffect(() => {
		let _errors = [...errors];
		_errors.push("this is an error");
		setErrors(_errors)
	}, [])


	const eventHandler = ( ) => {
		history.push("/verifypage")
	}

	return (
		<div className={s.container}>
			<LoginHeader/>
			<div className={s.emoji}>🤦‍♀️</div>
			<div className={s.para}>forgot your access?</div>
			<input 
				type="email" 
				name="email" 
				id="email" 
				placeholder="email" 
				className={s.email} required 
			/>
			<CTAButton 
					eventHandler={eventHandler} 
					bgColor="rgba(245, 55, 124, 1)"  
					btnText="send"
				/>
			<div className={s.err}>
				{errors.map((err)=>
					(
						<>
							<p>{`* ${err}`}</p>
						</>
						)
					)}
			</div>
		</div>
	)
}

export default ForgotPasswordPage