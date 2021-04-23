import s from './Login.module.css'
import LoginHeader from '../LoginHeader'
import LoginPara from '../LoginPara'
import LoginTextFields from '../LoginTextFields'
import LoginSubmit from '../LoginSubmit'


const LoginPage = () => {
	return (
		<div className={s.container}>
			<LoginHeader/>
			<LoginPara/>
			<LoginTextFields isLogin/>
			<LoginSubmit isLogin/>
		</div>
	)
}

export default LoginPage