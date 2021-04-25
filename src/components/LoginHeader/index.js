import React,{useState,useEffect} from 'react'
import FYPLogo from '../../assets/img/fyp-logo-new.png'

import s from './LoginHeader.module.css'

import { useHistory,useLocation } from 'react-router-dom';

const Modal = ({setShow,show}) => {

	const history = useHistory();
	
	const goback = () => {
		history.goBack()
	}

	return (
	    <div className={s.modal_wrapper} style={{visibility:`${show?"visible":"hidden"}`}}>
	    	<div className={s.modal}>
		    	<span></span>
		    	<span>are you sure you'd like <br/>to exit this page?</span>
		    	<div className={s.btn_container}>
		    		<button className={`${s.yes__btn} ${s.btn}`} onClick={()=>goback()}>yes</button>
		    		<button className={`${s.no__btn} ${s.btn}`} onClick={()=>setShow(false)}>no</button>
		    	</div>
		    </div>
	    </div>
	  );
}


const LoginHeader = ({isLogin}) => {

	const history = useHistory();
	let location = useLocation();
	const [modalShow, setModalShow] = useState(false);

	const handleBackClick = () => {
		if(location.pathname==="/newSubmission"){
			setModalShow(true)
		}else{
			history.goBack()
		}
		
	}
	return (
		<>
			<Modal setShow={setModalShow} show={modalShow}/>
		<div className={s.container}>
			
			{isLogin ? <div className={s.left__sidebar}>
							<div></div>
							<div></div>
							<div></div>
						</div> :
						<div class={s.backbtn} onClick={handleBackClick}>
							<svg height="44" width="44" viewBox="0 0 20 20" aria-hidden="true" focusable="false" class={s.back}>
								<path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z">
									
								</path>
							</svg>
						</div>
						}
			<div className={s.image__container}><img src={FYPLogo} alt="logo"/></div>
		</div>
		</>
	)
}

export default LoginHeader