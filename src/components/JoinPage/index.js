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
			<LoginHeader/>
			<LoginPara/>
			<LoginTextFields/>
			<LoginSubmit 
				bgColor="rgba(245, 55, 124, 1)" 
				btnText="join" 
				eventHandler={handleJoin} 
				link="/loginpage" 
				linkText="login"
				text="already a user?click here to"
			/>
		</div>
	)
}

export default JoinPage