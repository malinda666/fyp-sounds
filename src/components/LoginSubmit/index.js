import s from './LoginSubmit.module.css'

import { useState , useEffect} from 'react'
import { Link } from 'react-router-dom'


const LoginSubmit = ({isLogin}) => {

	const [errors, setErrors] = useState([])

	let bgColor = isLogin ? "rgba(0, 242, 234, 1)" : "rgba(245, 55, 124, 1)";
	let text = isLogin ? "login" : "join"

	const handleLogin = () => {
		window.alert('login')
	}

	const handleJoin = () => {
		window.alert('join')
	}

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
				onClick={isLogin?handleLogin:handleJoin}
				>{text}
			</div>

			<div className={s.redir}>
				{
					isLogin ? 
					<p>new user?click here to <Link to="/joinpage"><span>join</span></Link></p>
					:
					<p>already a user?click here to <Link to="/loginpage"><span>login</span></Link></p>
					}
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