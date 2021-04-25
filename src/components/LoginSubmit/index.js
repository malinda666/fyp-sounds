import s from './LoginSubmit.module.css'

import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'


const LoginSubmit = ({bgColor, btnText, eventHandler,link,linkText,text}) => {

	const [errors, setErrors] = useState([])

	useEffect(() => {
		let _errors = [...errors];
		_errors.push("this is an error");
		setErrors(_errors)
	}, [])


	return (
		<div className={s.container}>
			<div 
				className={s.btn} 
				style={{backgroundColor:`${bgColor}`}}
				onClick={eventHandler}
				>{btnText}
			</div>

			<div className={s.redir}>
				{<p>{text}<Link to={link}><span>{` ${linkText}`}</span></Link></p>}
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

export default LoginSubmit