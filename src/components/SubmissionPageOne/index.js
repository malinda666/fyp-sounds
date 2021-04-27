import s from './NewSubmission.module.css'

import { useState, useRef ,useEffect ,useCallback} from 'react'
import Select from 'react-select'
import { useHistory } from 'react-router-dom';
import gsap from 'gsap';
import Cropper from 'react-easy-crop';
import { css } from "@emotion/core";
import PuffLoader from "react-spinners/ClipLoader";

import LoginHeader from '../LoginHeader'
import CTAButton from '../CTAButton'

import img from '../../assets/img/img.png'
import FYPLogo from '../../assets/img/fyp-logo-new.png'

import getCroppedImg from '../../utils/cropImage'

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

const override = css`
  display: block;
  margin: 0 auto;
  top: 50%;
`;

const SubmissionPageOne = () => {

	const imageRef = useRef();
	const imageContainerRef = useRef()

	// const [cropOpen, setCropOpen] = useState(false);
	const [imageURL, setImageURL] = useState();
	const [imagePreviewURL, setImagePreviewURL] = useState()

	const history = useHistory()

	const handleButtonClick = () =>{
		history.push('/newSubmission2')
	}

	const loadFile = (e) => {
		let _imageURL = URL.createObjectURL(e.target.files[0]);
		setImageURL(_imageURL)
		gsap.to(imageContainerRef.current,0.75,{y : '0%',opacity:1,ease:'expo.out',delay:0.5})
	}

	useEffect(() => {
		gsap.set(imageContainerRef.current,{y:"100%",opacity:0})
		console.log(imagePreviewURL)
	}, [])

	return (
		<>
			
		<div className={s.container}>
			<ImageCrop 
				imageRef={imageRef} 
				imageContainerRef={imageContainerRef} 
				imageURL={imageURL} 
				setImagePreviewURL={setImagePreviewURL}
			/>
			<LoginHeader/>
			<div className={s.form}>
				<div className={s.image__upload}>
					{!imagePreviewURL?
						<>
						<label for="image">+ add cover photo 📷</label>
										<input name="image" type="file"  accept="image/*" onChange={(e)=>loadFile(e)} />
										</>
										:
										<img className={s.c__img} src={imagePreviewURL} alt="cropper" ref={imageRef}/>
									}
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
		</>
	)
}


const ImageCrop = ({imageRef,imageContainerRef, imageURL,setImagePreviewURL}) => {

	const [crop, setCrop] = useState({ x: 0, y: 0 })
	const [rotation, setRotation] = useState(0)
	const [zoom, setZoom] = useState(1.1)
	const [croppedAreaPixels, setCroppedAreaPixels] = useState(null)
	const [croppedImage, setCroppedImage] = useState(null);
	let [loading, setLoading] = useState(false);

	const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
	    setCroppedAreaPixels(croppedAreaPixels)
	    
	  }, [])

	  const showCroppedImage = useCallback(async () => {
	  	setLoading(true)
	    try {
	      const croppedImage = await getCroppedImg(
	        imageURL,
	        croppedAreaPixels,
	        rotation
	      )
	      setLoading(false)
	      setCroppedImage(croppedImage)
	      setImagePreviewURL(croppedImage)
	      gsap.to(imageContainerRef.current,0.75,{y : '100%',opacity:0,ease:'expo.out',})
	    } catch (e) {
	      console.error(e)
	    }
	  }, [croppedAreaPixels, rotation])

	  const onClose = useCallback(() => {
	    setCroppedImage(null)
	  }, [])



	const handleCropperButtonClick = () => {
		//other logic goes here
		gsap.to(imageContainerRef.current,0.75,{y : '100%',opacity:0,ease:'expo.out',})
	}
	const handleCropperBackClick = () => {
		//other logic goes here
		gsap.to(imageContainerRef.current,0.75,{y : '100%',opacity:0,ease:'expo.out',})
	}


	return (
		<div className={s.c__container} ref={imageContainerRef}>
			<div className={s.c__header}>
				<div class={s.c__backbtn} onClick={handleCropperBackClick}>
					<svg height="44" width="44" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class={s.back}>
						<path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
							
						</path>
					</svg>
				</div>
				<div className={s.c__logo}><img src={FYPLogo} alt="logo"/></div>
			</div>
			<div className={s.c__cropper}>
				<div 
					className={s.c__loader} 
					style={{backgroundColor : `${loading?"rgba(255, 255, 251,0.95)":""}`, zIndex:`${loading?99:0}`}}>
					<PuffLoader color="rgba(145, 255, 251, 1)" loading={loading} css={override} size={100} />
				</div>
				<Cropper
		          image={imageURL}
		          crop={crop}
		          rotation={rotation}
		          zoom={zoom}
		          aspect={1}
		          onCropChange={setCrop}
		          onRotationChange={setRotation}
		          onCropComplete={onCropComplete}
		          onZoomChange={setZoom}
		          cropShape="rect"
              	  // cropSize={{width:200,height:200}}
              	//   onMediaLoaded={(mediaSize) => {
	              //   setZoom(mediaSize.naturalWidth / mediaSize.naturalHeight)
	              // }}
		        />
			</div>
			{/* <img className={s.c__img} alt="cropper" ref={imageRef}/> */}
			<CTAButton 
					eventHandler={showCroppedImage} 
					bgColor="rgba(0, 242, 234, 1)"  
					btnText="next"
				/>
		</div>
	)
}


export default SubmissionPageOne