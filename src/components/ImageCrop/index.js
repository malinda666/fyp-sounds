import s from './ImageCrop.module.css'

import LoginHeader from '../LoginHeader'
import CTAButton from '../CTAButton'

const ImageCrop = () => {

	const eventHandler = ( ) => {

	}

	return (
		<div className={s.container}>
			<LoginHeader/>
			
			<CTAButton 
					eventHandler={eventHandler} 
					bgColor="rgba(0, 242, 234, 1)"   
					btnText="next"
				/>

		</div>
	)
}

export default ImageCrop