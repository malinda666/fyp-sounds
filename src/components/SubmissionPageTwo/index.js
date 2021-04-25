import LoginHeader from '../LoginHeader'
import CTAButton from '../CTAButton'

import s from './SubmissionPageTwo.module.css'

import Select from 'react-select'
import { useHistory } from 'react-router-dom';
import { useState } from 'react';


const typeOptions = [
  { value: 'song', label: 'Song' },
  { value: 'sound', label: 'Sound' },
]
const explicitOptions = [
  { value: 'explicit', label: 'explicit' },
  { value: 'non-explicit', label: 'non-explicit' },
]

const SubmissionPageTwo = () => {
	const history = useHistory();
	const [open, setOpen] = useState(false)

	const handleButtonClick = () =>{
		history.push('/newSubmissionFinal')
	}

	const openCheck = () => {
		setOpen(!open);
	}
	return (
		<div className={s.container}>
			<LoginHeader/>
			<div className={s.form}>
				<input type="text" className={s.author__name} name="author__name" placeholder="author name" required/>
				<input type="text" className={s.producer__name} name="producer__name" placeholder="producer name" required/>
				<input type="text" className={s.featuring__artist} name="featuring__artist" placeholder="featuring artist" required/>
				
				<div className={s.drop}>
					<Select 
						placeholder="type" 
						isSearchable={false} 
						options={typeOptions} 
						// menuIsOpen={true} 
						className="react-select"
					/>
				</div>
				<div className={s.drop}>
					<Select 
						placeholder="explicit" 
						isSearchable={false} 
						options={explicitOptions} 
					/>
				</div>
				<div className={s.check__container}>
					<div className={s.check}onClick={openCheck}>
						<span>send to</span>
						<div >
							<svg  height="20" width="20" viewBox="0 0 20 20" aria-hidden="true" focusable="false">
								<path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
							</svg>
						</div>
					</div>
					<div className={s.check__expand} style={{visibility: `${open?"visible":"hidden"}`}}>
						<div>
							<label for="social media">social media</label>
							<input type="checkbox" id="social media" name="social media"/>
							<span className={s.check__mark}></span>
  							
						</div>
						<div>
							<label for="all stores">all stores</label>
							<input type="checkbox" id="all stores" name="all stores"/>
							<span className={s.check__mark}></span>
  							
						</div>
						<div>
							<label for="facebook / instagram">facebook / instagram</label>
							<input type="checkbox" id="facebook / instagram" name="facebook / instagram"/>
							<span className={s.check__mark}></span>
  							
						</div>
						<div>
							<label for="tiktok">tiktok</label>
							<input type="checkbox" id="tiktok" name="tiktok"/>
							<span className={s.check__mark}></span>
  							
						</div>
						<div>
							<label for="youtube">youtube</label>
							<input type="checkbox" id="youtube" name="youtube"/>
							<span className={s.check__mark}></span>
  							
						</div>
						<div>
							<label for="spotify">spotify</label>
							<input type="checkbox" id="spotify" name="spotify"/>
							<span className={s.check__mark}></span>
  							
						</div>
					</div>
				</div>
				<CTAButton 
					eventHandler={handleButtonClick} 
					bgColor="rgba(0, 242, 234, 1)"  
					btnText="next"
				/>
			</div>
			
			<div className={s.error}>
				<span>*fill out every field to continue</span>
			</div>
			
		</div>
	)
}

export default SubmissionPageTwo