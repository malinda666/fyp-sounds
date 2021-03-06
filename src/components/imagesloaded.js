import React from 'react'
import ImagesLoaded from 'react-images-loaded';

const Imagesloaded = ({url,children}) => {
	  const handleOnAlways = instance => {};
 
	  const handleOnProgress = (instance, image) => {
	  	console.log(instance,image)
	  };
	 
	  const handleOnFail = instance => {
	  	console.log("failed to load image")
	  };
	 
	  const handleDone = instance => {
	  	console.log("updated image")
	  };
	return (
		<ImagesLoaded
	        elementType={"div"} // defaults to 'div'
	        className={'your-container-class'} // defaults to 'images-loaded-container'
	        onAlways={handleOnAlways}
	        onProgress={handleOnProgress}
	        onFail={handleOnFail}
	        done={handleDone}
	        background=".image" // true or child selector
	      >
	        {children}
	      </ImagesLoaded>
	)
}

export default Imagesloaded