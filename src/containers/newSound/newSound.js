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
          zoom: 1.4,
          aspect: 1,
          croppedAreaPixels: {},
          rotation:0,
          croppedImage : null

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

      showCroppedImage = async () => {
        const { croppedAreaPixels , rotation , coverImageSignedURL} = this.state;
          try {
            const croppedImage = await getCroppedImg(
              coverImageSignedURL,
              croppedAreaPixels,
              rotation
            )
            console.log('donee', { croppedImage })
            this.setState({ croppedImage})
            this.image.src = croppedImage;
            this.image.style.display = 'block';
            this.image.style.zIndex = 10;
          } catch (e) {
            console.error(e)
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



        this.setState({errorMessage : 'Title field is required'});



        return false;



      }



      if(!this.state.coverImageURL || this.state.coverImageURL === ''){



        this.setState({errorMessage : 'Please upload album cover image'});



        return false;



      }



      return true;



    }







  uploadCoverImage = () => {

      this.setState({ loading: false });

  console.log(this.uploadInput.files[0]);



  let file = this.uploadInput.files[0]



  var re = /(?:\.([^.]+))?$/;



  var ext = re.exec(file.name);



  let s3Path = this.state.auth.user_dir + '/creative/coverImage/' + uuid_v4()+'.' +ext[1];







  



  fileManagementService



      .uploadFile(s3Path, file.type)



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
              this.setState({coverImageURL : url, loading : false, s3Path : s3Path},() => this.setCoverImageSignedURL());



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



    this.setState({loading : true})



    // let filename = this.state.coverImageURL.replace(/^.*[\\\/]/, "");



    this.getSignedURL(this.state.s3Path).then(



      (result) => {



        this.setState({ coverImageSignedURL: result });



         this.setState({loading : false})



      }



    ) .catch((err) => {



        this.setState({ loading: false });



      });



  }







  getSignedURL(filepath) {



    return fileManagementService



      .downloadFile(filepath)



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



        data.title = this.state.title







        localStorage.setItem('data', JSON.stringify(data));



        this.props.history.push('/soundStep1');



      }



      else {



        let data = {



          type : 'sound',



          coverImageURL : this.state.coverImageURL,



          albumcover: this.state.s3Path,



          title : this.state.title



       



        }



        localStorage.setItem('data', JSON.stringify(data));



        this.props.history.push('/soundStep1');



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







        localStorage.setItem('data', JSON.stringify(data));



        this.props.history.push('/soundStep1');



      }



      else{



        let data = {



          type :'song',



          coverImageURL :this.state.coverImageURL,



          albumcover: this.state.s3Path,



          title : this.state.title



        }







        localStorage.setItem('data', JSON.stringify(data));



        this.props.history.push('/soundStep1');



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



      const { coverImageSignedURL, croppedAreaPixels, crop, zoom, aspect , croppedImage} = this.state;



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



            <div className="nexticon animate-enter smart-layers-pointers" onClick={this.navigateToSoundPage.bind(this)}>



              <img className="rectangle-bKk8JK" src={rectangle} />



              



                <img className="rectangle-bKk8JK" src={rectangle2} />



              



              <div className="sound montserrat-semi-bold-white-20px">{sound}</div>



            </div>



            <div className="nexticon-copy animate-enter smart-layers-pointers " onClick={this.navigateToSongPage.bind(this)} >



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



            <label for="fileChoose">



             {this.state.s3Path ?



              <>

{/*  */}
{/*  */}
{/*               <LoadingProgress */}
{/*  */}
{/*  */}
{/*  */}
{/*                 visualOnly */}
{/*  */}
{/*  */}
{/*  */}
{/*                 useSpinner */}
{/*  */}
{/*  */}
{/*  */}
{/*                 active={true} */}
{/*  */}
{/*  */}
{/*  */}
{/*                 total={1} */}
{/*  */}
{/*  */}
{/*  */}
{/*                 title="profileImage" */}
{/*  */}
{/*  */}
{/*  */}
{/*                 current={this.state.profileSignedURL} */}
{/*  */}
{/*  */}
{/*  */}
{/*                 showCompact        */}
{/*  */}
{/*  */}
{/*  */}
{/*               /> */}



{/*              <img style={{width:'244px', height: '233px',display: 'none'}} */}
{/*  */}
{/*  */}
{/*  */}
{/*              className="oval-5" */}
{/*  */}
{/*  */}
{/*  */}
{/*                     src={this.state.coverImageSignedURL} */}
{/*  */}
{/*  */}
{/*  */}
{/*                     alt="" */}
{/*  */}
{/*  */}
{/*  */}
{/*                      */}
{/*  */}
{/*  */}
{/*  */}
{/*                   /> */}
            <img 
              ref={imageRef => this.image = imageRef}
              id="source"
              style={{width:'100%', height: '100%',display: 'none'}}
              className="oval-5"
              src={this.state.coverImageSignedURL} />
            <canvas
              ref={canvas => {
                this.canvas = canvas;
                canvas && (this.ctx = canvas.getContext('2d'))
              }}
              width={croppedAreaPixels.width}
              height={croppedAreaPixels.height}
            />
            <Cropper
              image={coverImageSignedURL}
              crop={crop}
              zoom={zoom}
              aspect={aspect}
              showGrid={false}
              onCropChange={this.onCropChange}
              onCropComplete={this.onCropComplete}
              onZoomChange={this.onZoomChange}
            />

                  </>



                   :

            
            // <img src={croppedImage}/>

            <div className="rectangle-2"></div>  }
           


            {!this.state.s3Path ?



            <div className="upload smart-layers-pointers ">



              



                <img className="shape-rlzqmL" src={shape} />



                <img className="shape-UPUXXo" src={shape2} />



                <img className="path" src={path} />



              



              



            </div> : null }



            



            



           </label>            



          </div>



          



          <input 



                id="fileChoose"



                className="dropzone"



                              type='file'



                              name='img_logo'



                              ref={(ref) => {



                                this.uploadInput = ref;



                              }}



                              onChange={this.uploadCoverImage.bind(this)}



                              accept=".png, .jpg, .jpeg"



                            />  



        </div>



        <div className="container-center-horizontal">



          <div className="upload-a-cover-image sofiapro-normal-white-30px">{uploadACoverImage}</div>



        </div>



        <div className="container-center-horizontal">



          <div className="audio-title sofiapro-normal-white-30px">{audioTitle}</div>          



        </div>



        <div className="container-center-horizontal">



          <div className="tik-tok-au-io-submiss montserrat-medium-white-20px">{tiktokAudioSubmiss}</div>



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



