import s from './Login.module.css'
import LoginHeader from '../LoginHeader'
import LoginPara from '../LoginPara'
import LoginTextFields from '../LoginTextFields'
import LoginSubmit from '../LoginSubmit'


const LoginPage = () => {

	const handleLogin = () => {
		window.alert('login')
	}

	return (
		<div className={s.container}>
			<LoginHeader/>
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