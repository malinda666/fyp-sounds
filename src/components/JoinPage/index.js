import s from './Join.module.css'
import LoginHeader from '../LoginHeader'
import LoginPara from '../LoginPara'
import LoginTextFields from '../LoginTextFields'
import LoginSubmit from '../LoginSubmit'


const JoinPage = () => {
	return (
		<div className={s.container}>
			<LoginHeader/>
			<LoginPara/>
			<LoginTextFields/>
			<LoginSubmit/>
		</div>
	)
}

export default JoinPage