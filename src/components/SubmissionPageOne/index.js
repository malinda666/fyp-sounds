import s from './NewSubmission.module.css'

import Select from 'react-select'
import { useHistory } from 'react-router-dom';

import LoginHeader from '../LoginHeader'
import CTAButton from '../CTAButton'

const langOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]
const typeOptions = [
  { value: 'song', label: 'Song' },
  { value: 'sound', label: 'Sound' },
]

const SubmissionPageOne = () => {

	const history = useHistory()

	const handleButtonClick = () =>{
		history.push('/newSubmission2')
	}

	return (
		<div className={s.container}>
			<LoginHeader/>
			<div className={s.form}>
				<div className={s.image__upload}>
					<label for="image">+ add cover photo 📷</label>
					<input name="image" type="file"  accept="image/*" />
				</div>
				<input type="text" className={s.audio__title} name="audio__title" placeholder="audio title" required/>
				<input type="text" className={s.creator__name} name="creator__name" placeholder="creator name" required/>
				<div className={s.drop}>
					<Select 
						placeholder="language" 
						isSearchable={false} 
						options={langOptions} 
					/>
				</div>
				<div className={s.drop}>
					<Select 
						placeholder="type" 
						isSearchable={false} 
						options={typeOptions} 
					/>
				</div>
				<div className={s.audio__upload}>
					<label for="audio">+ add audio file 🎵</label>
					<input name="audio" type="file" accept=".mp3,audio/*" required/>
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

export default SubmissionPageOne