import s from './LoginSubmit.module.css'

import { useState , useEffect} from 'react'
import { Link , useLocation} from 'react-router-dom'

import CTAButton from '../CTAButton'


const LoginSubmit = ({ eventHandler,link,linkText,text}) => {

	const [errors, setErrors] = useState([])
	const location = useLocation()

	useEffect(() => {
		let _errors = [...errors];
		_errors.push("this is an error");
		setErrors(_errors)
	}, [])


	return (
		<div className={s.container}>
			<CTAButton 
					eventHandler={eventHandler} 
					bgColor={location.pathname==="/loginpage" ?"rgba(0, 242, 234, 1)" : "rgba(245, 55, 124, 1)" }   
					btnText={location.pathname==="/loginpage"?"login":"join"}
				/>

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