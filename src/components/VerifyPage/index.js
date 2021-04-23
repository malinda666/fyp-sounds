import s from './VerifyPage.module.css'
import LoginHeader from '../LoginHeader'

import { useState, useEffect } from 'react';


const VerifyPage = () => {

	const [errors, setErrors] = useState([])
	useEffect(() => {
		let _errors = [...errors];
		_errors.push("this is an error");
		setErrors(_errors)
	}, [])

	return (
		<div className={s.container}>
			<LoginHeader/>
			<div className={s.emoji}>🕵️‍♀️</div>
			<div className={s.para}>check your email for a verification code</div>
			<input 
				type="number" 
				name="verificationCode" 
				id="verificationCode" 
				placeholder="verification code" 
				className={s.v__code} required 
			/>
			<div className={s.btn}>verify</div>
			<div className={s.resend}>
				didn't recieved a code?click 
				<span 
					// onClick={resendcode}
					> here </span>
				to resend
			</div>
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

export default VerifyPage