import s from './CTAButton.module.css'

const CTAButton = ({eventHandler,bgColor,btnText}) => {
	return (
		<div className={s.outer} onClick={eventHandler}>
			<span  style={{backgroundColor:`${bgColor}`}}>{btnText} </span>
		</div>
	)
}

export default CTAButton