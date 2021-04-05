import React from "react";
import { render } from 'react-dom';
import './newSound.css';
import { v4 as uuid_v4 } from "uuid";
import fileManagementService from "../../services/fileManagementService";
import uploadManagementService from "../../services/uploadManagementService";
import HashLoader from 'react-spinners/HashLoader';
import LoadingOverlay from "react-loading-overlay";
import LoadingProgress from 'react-js-loading-progress-bar';
import LazyLoad from 'react-lazyload';
import Cropper from 'react-easy-crop'
import getCroppedImg from '../../utils/cropImage'
import removeEmojis from '../../utils/removeemoji'

const CONTAINER_HEIGHT = 200;

export default class NewSound extends React.Component {

  constructor(props) {
  super(props);
     this.inputOpenFileRef = React.createRef()
             this.state = {
          loading : false,
          coverImageSignedURL:'',
          coverImageURL:'', 
          title:'',
          s3Path:'',                    
          auth:null,
          type:'', 
          errorMessage:'',
          crop: { x: 0, y: 0 },
          zoom: 1,
          aspect: 1,
          croppedAreaPixels: {},
          rotation:0,
          croppedImage : null,
          finalImage:'',
          thumbnailImage:'',
          imagePreviewUrl: '',
          cropedImageFile:''

        }
    }

      drawImage = () => {
        const { croppedAreaPixels } = this.state;
        this.ctx.drawImage(this.image, croppedAreaPixels.x, croppedAreaPixels.y, croppedAreaPixels.width, croppedAreaPixels.height, 0, 0, croppedAreaPixels.width, croppedAreaPixels.height);
      }

      onCropChange = crop => {
        this.setState({ crop })
      }

      onCropComplete = (croppedArea, croppedAreaPixels) => {
        this.setState({
          croppedAreaPixels
        }, () =>{
          this.drawImage();
        })

      }

      onZoomChange = zoom => {
        this.setState({ zoom })
      }

      dataURLtoFile(dataurl, filename) {
 
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
        
        return new File([u8arr], filename, {type:mime});
    }
      
      showCroppedImage = async () => {
        const { croppedAreaPixels , imagePreviewUrl} = this.state;
          try {
            const croppedImage = await getCroppedImg(
              imagePreviewUrl,
              croppedAreaPixels
            )
            console.log('done', { croppedImage })
            // this.setState({ croppedImage})
            this.image.src = croppedImage;
            this.image.style.display = 'block';
            this.image.style.zIndex = 10;
            this.setState({cropedImageFile : this.dataURLtoFile(croppedImage, "cover.jpeg")});
            
          } catch (e) {
            console.error(e)
          } finally{
            this.image.addEventListener('click',(e)=>{
                this.image.style.display = 'none';
                  this.image.style.zIndex = 0;
            })
          }
        }

      componentDidMount(){
       if(localStorage.getItem('auth')){
        this.setState({auth : JSON.parse(localStorage.getItem('auth'))});
      }
      if(localStorage.getItem('data')){
        let data = JSON.parse(localStorage.getItem('data'));
        this.setState({s3Path : data.albumcover, title : data.title, coverImageURL : data.coverImageURL, type : data.type },()=>{
          this.setCoverImageSignedURL();
        });
      }
    }

    validateForm =() =>{
      if(!this.state.title || this.state.title === ''){
        this.setState({errorMessage : 'title field is required'});
        return false;
      }
      if(!this.state.coverImageURL || this.state.coverImageURL === ''){
        this.setState({errorMessage : 'please upload album cover image'});
        return false;
      }
      if(removeEmojis(this.state.title)){
        this.setState({errorMessage : 'sorry emojis are not allowed'});
        return false;
      }
      return true;
    }

readUploadedFile = (e) => {
  let reader = new FileReader();
  let file = e.target.files[0];

  reader.onloadend = () => {
    this.setState({
      imagePreviewUrl: reader.result
    });
  }

  reader.readAsDataURL(file)
}

  uploadCoverImage = (type) => {
      this.setState({ loading: true });
  console.log(this.state.cropedImageFile);
  let file = this.state.cropedImageFile;
  var re = /(?:\.([^.]+))?$/;
if(file == null || file == undefined){
  return  
}

  var ext = re.exec(file.name);

  let newFileName = uuid_v4();
  let s3Path = this.state.auth.user_dir + '/creative/coverImage/' + newFileName+'.' +ext[1];
  let finalImage = this.state.auth.user_dir + '/creative/coverImage/large/' + newFileName+'.jpg';
  let thumbnailImage = this.state.auth.user_dir + '/creative/coverImage/thumbnail/' + newFileName+'.jpg';



  fileManagementService
      .uploadCoverImage(s3Path, file.type)
      .then((response) => {
        if(response.status === 200){  
        var signedRequest = response.data.signedRequest;
        var url = response.data.url;
        // this.setState({url: url})
        console.log('Recieved a signed request ' + signedRequest);
        // Put the fileType in the headers for the upload
        uploadManagementService
          .upload(signedRequest, file, file.type)
          .then((result) => {
            console.log('Response from s3');
            if (result.status == 200) {
             this.setState({coverImageURL : url, loading : false, s3Path : s3Path, thumbnailImage : thumbnailImage, finalImage : finalImage}, () => {
               if(type === 'song'){
                 this.navigateToSongPage();
               }
               else{
                 this.navigateToSoundPage();
               }
             });

            } else {
              this.setState({ loading: false });
             // toast.error('Unable to upload cover photo');
            }
          })
          .catch((error) => {
           this.setState({ loading: false });
          // toast.error('Unable to upload cover photo');
          });
        }
        else {
         // toast.error('Unable to upload cover photo');
          this.setState({ loading: false });
        }  
      })
      .catch((error) => {
        this.setState({ loading: false });
       // toast.error('Unable to upload cover photo');
      });
  }


  showOpenFileDlg = () => {
        this.inputOpenFileRef.current.click()
    }

  setCoverImageSignedURL() {
    let current = this;
    this.setState({loading : true})
    // let filename = this.state.coverImageURL.replace(/^.*[\\\/]/, "");
    this.getSignedURL(this.state.s3Path).then(
      (result) => {
        this.setState({ coverImageSignedURL: result }, () => {
          this.toDataURL(result, function(dataUrl) {
            current.setState({imagePreviewUrl : dataUrl, cropedImageFile : current.dataURLtoFile(dataUrl, "cover.jpeg")})
          })
        });
         this.setState({loading : false})
      }
    ) .catch((err) => {
        this.setState({ loading: false });
      });
  }

  toDataURL(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onload = function() {
      var reader = new FileReader();
      reader.onloadend = function() {
        callback(reader.result);
      }
      reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
  }

  getSignedURL(filepath) {
    return fileManagementService
      .downloadCoverImage(filepath)
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  handleFieldChange(event){
     if(event){
     this.setState({
      [event.target.id]: event.target.value,
    });
  }
}
   
navigateToSoundPage(){
     this.setState({errorMessage : ''});
          if(this.validateForm()){
      if(localStorage.getItem('data')){
        let data = JSON.parse(localStorage.getItem('data'));
        data.type = 'sound';
        data.coverImageURL = this.state.coverImageURL;
        data.albumcover= this.state.s3Path;
        data.title = this.state.title;
        data.finalImage = this.state.finalImage;
        data.thumbnailImage = this.state.thumbnailImage;
        localStorage.setItem('data', JSON.stringify(data));
        this.props.history.push('/sound1');
      }
      else {
        let data = {
          type : 'sound',
          coverImageURL : this.state.coverImageURL,
          albumcover: this.state.s3Path,
          title : this.state.title,          
        finalImage :this.state.finalImage,
        thumbnailImage : this.state.thumbnailImage, 
    }
        localStorage.setItem('data', JSON.stringify(data));
        this.props.history.push('/sound1');
      }
    }
  }

   navigateToSongPage(){
    this.setState({errorMessage : ''});
    if(this.validateForm()){
     if(localStorage.getItem('data')){
        let data = JSON.parse(localStorage.getItem('data'));
        data.type = 'song';
        data.coverImageURL = this.state.coverImageURL;
        data.albumcover= this.state.s3Path;
        data.title = this.state.title        
        data.finalImage = this.state.finalImage;
        data.thumbnailImage = this.state.thumbnailImage;
        localStorage.setItem('data', JSON.stringify(data));
        this.props.history.push('/sound1');
      }
      else{
        let data = {
          type :'song',
          coverImageURL :this.state.coverImageURL,
          albumcover: this.state.s3Path,
          title : this.state.title,          
        finalImage : this.state.finalImage,
        thumbnailImage : this.state.thumbnailImage
        }
        localStorage.setItem('data', JSON.stringify(data));
        this.props.history.push('/sound1');
      }
    }
   }

  render() {
    const {
      newSound,
      oval,
      oval2,
      oval3,
      oval4,
      isYourAudioA,
      rectangle,
      rectangle2,
      sound,
      rectangle3,
      rectangle4,
      song,
      shape,
      shape2,
      path,
      uploadACoverImage,
      audioTitle,
      tiktokAudioSubmiss,
      rectangle5,
      inputName,
      inputType,
      inputPlaceholder,
      inputRequired,
      ArtworkCanU2019TInclu,
      fypsoundslogoProps,
    } = this.props;

      const { imagePreviewUrl, croppedAreaPixels, crop, zoom, aspect , croppedImage} = this.state;

    return (

       <LoadingOverlay
          active={this.state.loading}
          spinner={<HashLoader color={"#f24b76"} size={100}/>}
        >

      <div className="newsound">
        <div className="bg-image-wrap">
          <div className="bg-image1" style={{ backgroundImage: `url(${oval})` }} ></div>
          <div className="bg-image2" style={{ backgroundImage: `url(${oval2})` }} ></div>
          <div className="bg-image3" style={{ backgroundImage: `url(${oval3})` }}></div>
          <div className="bg-image4" style={{ backgroundImage: `url(${oval4})` }}></div>
        </div>

        <div className="container-center-horizontal">
          <h1 className="is-your-audio-a sofiapro-normal-white-30px">{isYourAudioA}</h1>
        </div>

        <div className="container-center-horizontal">
          <div className="group">
            <div className="nexticon animate-enter smart-layers-pointers" onClick={() => this.uploadCoverImage('sound')}>
              <img className="rectangle-bKk8JK" src={rectangle} />       
                <img className="rectangle-bKk8JK" src={rectangle2} />        
              <div className="sound montserrat-semi-bold-white-20px">{sound}</div>
            </div>
            <div className="nexticon-copy animate-enter smart-layers-pointers " onClick={() =>this.uploadCoverImage('song')} >
              <img className="rectangle-bKk8JK" src={rectangle3} />         
                <img className="rectangle-bKk8JK" src={rectangle4} />   

          <div className="song montserrat-semi-bold-white-20px">{song}</div>
            </div>
            <div>
            {this.state.errorMessage != '' ? <span className="error-message montserrat-light-red-14px">{this.state.errorMessage}</span> : null}
            </div>
          </div>
        </div>
         <div className="container-center-horizontal">   
          <div className="group-2-copy">
          
             {this.state.imagePreviewUrl ?
               <>
            <img 
              ref={imageRef => this.image = imageRef}
              id="source"
              style={{width:'100%', height: '100%',display: 'none'}}
              className="oval-5"
              src={this.state.imagePreviewUrl} />
            <canvas
              ref={canvas => {
                this.canvas = canvas;
                canvas && (this.ctx = canvas.getContext('2d'))
              }}
              width={croppedAreaPixels.width}
              height={croppedAreaPixels.height}
            />
            <Cropper
              image={imagePreviewUrl}
              crop={crop}
              zoom={zoom}
              aspect={1}
              showGrid={false}
              cropShape="rect"
              cropSize={{width:200,height:200}}
              onCropChange={this.onCropChange}
              onCropComplete={this.onCropComplete}
              onZoomChange={this.onZoomChange}
              onMediaLoaded={(mediaSize) => {
                this.onZoomChange(mediaSize.naturalWidth / mediaSize.naturalHeight)
                console.log(CONTAINER_HEIGHT/ mediaSize.naturalHeight)
              }}
            />
                  </>
                   :            
            // <img src={croppedImage}/>
            <div className="rectangle-2"></div>  }      
            {!this.state.imagePreviewUrl ?
            <div className="upload smart-layers-pointers ">        
                <img className="shape-rlzqmL" src={shape} />
                <img className="shape-UPUXXo" src={shape2} />
                <img className="path" src={path} />       
            </div> : null }  
          </div>    
          {/* <div className="nexticon animate-enter smart-layers-pointers"> */}
          {/* <label for="fileChoose"> */}
          {/*     <img className="upload-div" src={rectangle} />        */}
          {/*       <img className="upload-div" src={rectangle2} />         */}
          {/*     <div className="upload-button montserrat-semi-bold-white-20px">Upload Cover Image</div> */}
          {/*     </label> */}
          {/*   </div> */}
          <input 
                id="fileChoose"
                className="dropzone"
                type='file'
                name='img_logo'
                accept='image/*'
                ref={(ref) => {
                this.uploadInput = ref;
                }}
                 onChange={(e)=>this.readUploadedFile(e)}
                              accept=".png, .jpg, .gif"
                            /> 
        </div>


        <div className="container-center-horizontal">
          <div className="upload-a-cover-image sofiapro-normal-white-30px">{uploadACoverImage}</div>
        </div>

        <div className="container-center-horizontal">
          <div className="audio-title sofiapro-normal-white-30px">{audioTitle}</div>      
        </div>
        
          <div className="container-center-horizontal">
            
           <div className="upload-button animate-enter smart-layers-pointers " onClick={() =>this.uploadCoverImage('song')} >
              <label for="fileChoose">
              <img className="rectangle-bKk8JK" src={rectangle3} />         
              <img className="rectangle-bKk8JK" src={rectangle4} />   
            <div className="song montserrat-semi-bold-white-20px">upload</div>
          </label>
          </div>
            
        </div>
      
        
         


        <div className="container-center-horizontal">
          <div className="bar">
            <Fypsoundslogo {...fypsoundslogoProps} />       
            <div className="overlap-group1">   
              <img className="rectangle" src={rectangle5} />
              <input
              id="title"
                className="text-type-here montserrat-light-mountain-mist-20px animate-enter"
                name={inputName}
                placeholder={inputPlaceholder}
                type={inputType}
                required={inputRequired}
                value={this.state.title}
                onChange={this.handleFieldChange.bind(this)}
                onFocus={this.showCroppedImage}
              />      
          </div>
        </div>

      </div>

        <div className="container-center-horizontal">
          <p className="artwork-ca-019t-inclu montserrat-light-gravel-14px">{ArtworkCanU2019TInclu}</p>
        </div>
      </div>
      </LoadingOverlay>
    );
  }
}

class Fypsoundslogo extends React.Component {
  render() {
    const { fypsoundsLogo } = this.props;
    return <div className="fypsoundslogo" style={{ backgroundImage: `url(${fypsoundsLogo})` }}></div>;
  }
}



