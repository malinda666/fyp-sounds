import s from './Join.module.css'
import LoginHeader from '../LoginHeader'
import LoginPara from '../LoginPara'
import LoginTextFields from '../LoginTextFields'
import LoginSubmit from '../LoginSubmit'


const JoinPage = () => {

	const handleJoin = () => {
		window.alert('join')
	}
	return (
		<div className={s.container}>
			<LoginHeader isLogin/>
			<LoginPara/>
			<LoginTextFields/>
			<LoginSubmit 
				eventHandler={handleJoin} 
				link="/loginpage" 
				linkText="login"
				text="already a user?click here to"
			/>
		</div>
	)
}

export default JoinPage