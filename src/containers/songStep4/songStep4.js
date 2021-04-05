import React from "react";
import './songStep4.css'
import Select from 'react-select';
import fileManagementService from "../../services/fileManagementService";
import uploadManagementService from "../../services/uploadManagementService";
import creativeManagementService from '../../services/creativeManagementService';
import { v4 as uuid_v4 } from "uuid";
import HashLoader from 'react-spinners/HashLoader'
import LoadingOverlay from "react-loading-overlay";

export default class MusicForm5 extends React.Component {
  constructor(props) {
    super(props); 
    this.options = [
      {label : "category", value : "category"},
      {label : "brazilian", value : "brazilian"},
      {label : "pop", value : "pop"},
      {label : "blues", value : "blues"},
      {label : "classical", value : "classical"},
      {label : "world", value : "world"},
      {label : "vocal", value : "vocal"},
      {label : "r&b", value : "r&b"},
      {label : "childrens music", value : "childrens music"},
      {label : "international", value : "international"},      
      {label : "miscellaneous / experimental music", value : "miscellaneous / experimental music"},
      {label : "rock", value : "rock"},
      {label : "arabic", value : "arabic"},
      {label : "inspirational", value : "inspirational"},
      {label : "miscellaneous", value : "miscellaneous"},      
      {label : "holiday", value : "holiday"},
      {label : "hip hop/rap", value : "hip hop/rap"},
      {label : "electronic", value : "electronic"},
      {label : "instrumental", value : "instrumental"},
      {label : "chinese", value : "chinese"},       
      {label : "comedy", value : "comedy"},
      {label : "country", value : "country"},
      {label : "dance", value : "dance"},
      {label : "folk", value : "folk"},
      {label : "indian", value : "indian"},
      {label : "jazz", value : "jazz"}   
    ];
    this.inputOpenFileRef = React.createRef()
   this.state = {
     options: this.options,
     category: {
       value: 'category',
       label: 'category',
     },
     name:'',
     creativeURL:'',
     fileName:'',
     loading: false, 
     s3Path:'',
     auth: null,
     status:'',
     coverURL:'',
     errorMessage:'',
     finalImage :'',
     thumbnailImage :''
    
   }
  }

  componentDidMount(){
    if(localStorage.getItem('auth')){
      this.setState({auth : JSON.parse(localStorage.getItem('auth'))});
    }
     if(localStorage.getItem('data')){
        let data = JSON.parse(localStorage.getItem('data'));
        this.setState({creativeURL : data.creativeURL, fileName : data.fileName, s3Path : data.audiofile, name : data.name, status : data.status, coverURL :  data.albumcover, finalImage : data.finalImage, thumbnailImage : data.thumbnailImage}, () => {
            let selectedCategory = this.options.filter(item => item.value == data.category);
            if(selectedCategory.length >0)
            this.setState({category: selectedCategory[0]});
        });
      }
  }
 showOpenFileDlg = () => {
      this.inputOpenFileRef.current.click()
  }


 handleFieldChange(event){
   if(event){
   this.setState({
    [event.target.id]: event.target.value,
  });
}
 }

changeCategoryHandler = (value) => {
  this.setState({ category: value });
};

uploadCreative = () => {
this.setState({loading : true});
console.log(this.uploadInput.files[0]);
let file = this.uploadInput.files[0]
 if(file != null && file != undefined && file!= {} ) {
var re = /(?:\.([^.]+))?$/;
var ext = re.exec(file.name);
if(ext[1] === 'wav' || ext[1] === 'mp3' || ext[1] === 'm4a' || ext[1] === 'flac')
{
let s3Path = this.state.auth.user_dir + '/creative/song/' + uuid_v4()+'.' +ext[1];

fileManagementService
    .uploadCreative(s3Path, file.type)
    .then((response) => {
      if(response.status == 200){
        this.setState({
        loading: true
      });
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
            this.setState({creativeURL : url, loading: false, fileName : file.name, s3Path: s3Path })
          } else {
            this.setState({ loading: false });
            //toast.error('ERROR : Unable to upload document');
          }
        })
        .catch((error) => {
          this.setState({ loading: false });
         // toast.error('ERROR ' + JSON.stringify(error));
        });
      }
      else {
        this.setState({ loading: false });
      }
      
    })
    .catch((error) => {
      this.setState({ loading: false });
      //toast.error(JSON.stringify(error));
    });
  }
  else{
    // toast.error('ERROR ' + JSON.stringify(error));
  }
  }
  else this.setState({loading : false});


}

validateForm =() =>{
   if (!this.state.s3Path || this.state.s3Path === ''){
    this.setState({errorMessage : 'please upload creative file'});
    return false;
  }else if (!this.state.category || this.state.category.value === 'category'){
    this.setState({errorMessage : 'category field required'});
    return false;
  }

  return true;
}

navigateToNextPage(){
  this.setState({errorMessage :''});
  if(this.validateForm()){
    this.setState({loading : true});
    if(localStorage.getItem('data')){
                  let data = JSON.parse(localStorage.getItem('data'));
                  data.name = this.state.name;
                  data.creator = this.state.name;
                  data.creativeURL = this.state.creativeURL;
                  data.fileName = this.state.fileName;
                  data.category = this.state.category ? this.state.category.value : '';
                  data.audiofile = this.state.s3Path;
                  localStorage.setItem('data', JSON.stringify(data));
                  data.fyp_status = 'draft';
                  data.dashgo_status = 'draft';
                  data.author = data.authorName;
                  data.producer = data.producerName;
                  data.featured_artist = data.featuringArtist;
                  data.email = this.state.auth.email;
                  data.audioFileURL = this.state.s3Path;
                  data.coverURL = this.state.coverURL;
                  data.finalImage = this.state.finalImage;
                  data.thumbnailImage = this.state.thumbnailImage;
                  if(data.id != '' && data.id != null && data.id != undefined){
                       creativeManagementService.updateCreative( data, 'songUpdate')
                        .then(res => {
                          if(res.status === 200){
                            this.setState({loading : false});  
                            this.props.history.push('/musicReview');  
                          }
                          else{
                              this.setState({ loading: false });
                            }
                        }).catch((error) => {
                        this.setState({ loading: false });
                      });      
                  }
                  else {
                  creativeManagementService.create(data).then((result) => {
                    if (result.status == 200) 
                    {   
                      
                       let data = JSON.parse(localStorage.getItem('data'));
                       data.id = result.data.creativeId;
                      localStorage.setItem('data', JSON.stringify(data));
                      this.setState({loading : false});  
                       this.props.history.push('/musicReview');     
                    }
                    else
                    {
                      //toast.error('ERROR : Unable to upload document');  
                      this.setState({ loading: false });
                    }
                }).catch((error) => {
                    this.setState({ loading: false });
                    //// toast.error('ERROR ' + JSON.stringify(error));
                  });
              }
                 
              }  
            }
  }

  render() {
    const {
      oval,
      oval2,
      oval3,
      oval4,
      yes,
      isThisContentExpl,
      rectangle,
      category,
      backChevron,
      rectangle2,
      upload,
      uploadAudioFile,
      rectangle3,
      rectangle4,
      next,
      wavOrMp3Format,
      fypcopyProps,
    } = this.props;

    return (
      <LoadingOverlay
      active={this.state.loading}
      spinner={<HashLoader color={"#f24b76"} size={100}/>}
    >
      <div className="musicform5">
        <div className="overlap-group-C61RwL">
          <img className="oval-4eduM0" src={oval} />
          <img className="oval-BJQsbv" src={oval2} />
          <img className="oval-6sb1qn" src={oval3} />
          <img className="oval-ovOecM" src={oval4} />
        </div>
          <div className="explicit">
            <h1 className="is-this-content-expl sofiapro-normal-white-30px">{isThisContentExpl}</h1>
            <div className="yes montserrat-light-white-20px">{this.state.status}</div>

        </div>
        <Fypcopy {...fypcopyProps} />
        <div className="category-wrapper">
          <div className="nexticon-C61RwL">
          <Select 
              options={this.state.options}
              value={this.state.category}
              onChange={this.changeCategoryHandler}
              classNamePrefix="react-select"
              className='react-select-container'
              isMenuOpen={true}
                        />
            <img className="back-chevron" src={backChevron} />
          </div>
        </div>

        <div className="upload-wrapper">
          <div className="upload-audio-file sofiapro-normal-white-30px">{uploadAudioFile}</div>
          <img className="rectangle-C61RwL" src={rectangle2} />
          <label for="fileChoose">
            {this.state.fileName  === undefined || this.state.fileName  === '' ? <img className="upload" src={upload}/>  : <span className ="filename montserrat-light-gravel-14px">{this.state.fileName}</span> }
          </label>
          <input 
                id="fileChoose"
                className="dropzone"
                              type='file'
                              name='creative_file' 
                              ref={(ref) => {
                                this.uploadInput = ref;
                              }}
                onChange={this.uploadCreative.bind(this)}
                accept={'.wav, .mp3, .m4a, .flac'}
                            />  
          
          <p className="wav-or-mp3-format montserrat-light-gravel-14px">{wavOrMp3Format}</p>
        </div>

        <div className="container-center-horizontal" onClick={this.navigateToNextPage.bind(this)}>
          <div className="nexticon-VMr6Om">
            <img className="rectangle-On3W7C" src={rectangle3} />
            <img className="rectangle-NnOCDr" src={rectangle4} />
            <div className="next montserrat-semi-bold-white-20px">{next}</div>
          </div>
          <div>
            {this.state.errorMessage != '' ? <span className="error-message montserrat-light-red-14px">{this.state.errorMessage}</span> : null}
            </div>
        </div>
        <div className="container-center-horizontal">
          
        </div>
      </div>
      </LoadingOverlay>
    );
  }
}


class Fypcopy extends React.Component {
  render() {
    const { fypsoundsLogo } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="fypsoundslogo" style={{ backgroundImage: `url(${fypsoundsLogo})` }}></div>
      </div>
    );
  }
}


