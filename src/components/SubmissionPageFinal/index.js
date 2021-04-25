import s from "./SubmissionPageFinal.module.css"
import LoginHeader from '../LoginHeader'
import CTAButton from '../CTAButton'

import img from "../../assets/img/img.png"

import { useHistory } from 'react-router-dom';

const SubmissionPageFinal = () => {
	const history = useHistory()

	const handleButtonClick = () =>{
		window.alert('done')
	}

	return (
		<div className={s.container}>
			<LoginHeader/>
			<img src={img} alt="hero" className={s.hero__img}/>
			<div className={s.audio__title}>
				<span>audio name</span>
				<span>by <br/> creator name feat. featuring artist</span>
			</div>
			<div className={s.audio__file}>
				<span>▶</span>
				<span>filename.wav</span>
			</div>
			<div className={s.audio__details}>
				<div>
					<span>language</span>
					<span>{`- english`}</span>
				</div>
				<div>
					<span>publish to</span>
					<span>- all stores</span>
				</div>
				<div>
					<span>author</span>
					<span>- author name</span>
				</div>
				<div>
					<span>producer</span>
					<span>- producer name</span>
				</div>
			</div>
			<div className={s.agreement}>
				<div>
					<input type="checkbox" id="agree" name="agree"/>
					<label for="agree">by clicking this box you accept #fypsounds <a href="/terms">terms.</a></label>
					
					<span className={s.check__mark}></span>
  				</div>
			</div>
			<CTAButton 
					eventHandler={handleButtonClick} 
					bgColor="rgb(67, 203, 48)"  
					btnText="submit"
				/>
		</div>
	)
}

export default SubmissionPageFinal