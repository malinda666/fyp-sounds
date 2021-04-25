import s from './Login.module.css'
import LoginHeader from '../LoginHeader'
import LoginPara from '../LoginPara'
import LoginTextFields from '../LoginTextFields'
import LoginSubmit from '../LoginSubmit'

import { useHistory } from 'react-router-dom';


const LoginPage = () => {

	const history = useHistory()

	const handleLogin = () => {
		history.push('/newSubmission')
	}

	return (
		<div className={s.container}>
			<LoginHeader isLogin/>
			<LoginPara/>
			<LoginTextFields isLogin/>
			<LoginSubmit 
				bgColor="rgba(0, 242, 234, 1)" 
				btnText="login" 
				eventHandler={handleLogin} 
				link="/joinpage" 
				linkText="join"
				text="new user?click here to"
			/>
		</div>
	)
}

export default LoginPage