import s from "./LoginPara.module.css"

import fb from '../../assets/img/fb-logo.png'
import insta from '../../assets/img/insta-logo.png'
import spotify from '../../assets/img/spotify-logo.png'
import itunes from '../../assets/img/itunes-logo.png'
import tiktok from '../../assets/img/tiktok-logo.png'

const LoginPara = () => {
	return (
		<div className={s.container}>
			<div className={s.line}>
				<span>upload sounds and music to all <br/> streaming platforms for free !</span>
			</div>
			<div className={s.image__line}>
				<img src={tiktok} alt="tiktok"/>
				<img src={insta} alt="insta"/>
				<img src={fb} alt="fb"/>
				<img src={spotify} alt="spotify"/>
				<img src={itunes} alt="itunes"/>
			</div>
			<div className={s.line2}>
				<span>anything can go viral,<br/> 
				get 💰 making 
				<span>🎤</span>
				<span>🎸</span>
				<span>🔊</span>
				<span>🎹</span>
				<span>🎵</span>
				<span>📢</span>
				 </span>
			</div>
		</div>
	)
}

export default LoginPara