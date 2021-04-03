import React from "react";
import './soundStep3.css';
import Select from 'react-select';
import fileManagementService from "../../services/fileManagementService";
import uploadManagementService from "../../services/uploadManagementService";
import creativeManagementService from '../../services/creativeManagementService';
import { v4 as uuid_v4 } from "uuid";
import HashLoader from 'react-spinners/HashLoader'
import LoadingOverlay from "react-loading-overlay";
import removeEmojis from '../../utils/removeemoji'

export default class SoundForm2b extends React.Component {
   constructor(props) {     
    super(props);
    this.options = [
      {label : "category", value : "category"},
      {label : "comedy", value : "comedy"},
      {label : "animal sounds", value : "animal sounds"},
      {label : "inspirational", value : "inspirational"},
      {label : "anime", value : "anime"},
      {label : "sound effects", value : "sound effects"},
      {label : "vocal", value : "vocal"}
    ]
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
      coverURL :'',
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
        this.setState({creativeURL : data.creativeURL, fileName : data.fileName ? data.fileName : '', s3Path : data.audiofile, name : data.name, status : data.status, coverURL : data.albumcover, finalImage : data.finalImage, thumbnailImage : data.thumbnailImage}, () => {
            let selectedCategory = this.options.filter(item => item.value == data.category);
            if(selectedCategory.length >0)
            this.setState({category: selectedCategory[0]});
        });
      }

    }
   showOpenFileDlg = () => {
        this.inputOpenFileRef.current.click()
    }
  
    validateForm =() =>{
      if(!this.state.name || this.state.name === ''){
        this.setState({errorMessage : 'creator name field is required'});
        return false;
      }else if (!this.state.s3Path || this.state.s3Path === ''){
        this.setState({errorMessage : 'please upload creative file'});
        return false;
      }else if (!this.state.category || this.state.category.value === 'category'){
        this.setState({errorMessage : 'category field required'});
        return false;
      }
      if(removeEmojis(this.state.name)){
        this.setState({errorMessage : 'sorry emojis are not allowed'});
        return false;
      }
      return true;
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
  let s3Path = this.state.auth.user_dir + '/creative/sound/' + uuid_v4()+'.' +ext[1];
  this.setState({fileName : file.name});
  fileManagementService
      .uploadCreative(s3Path, file.type)
      .then((response) => {
        if(response.status === 200){
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
              this.setState({creativeURL : url, loading: false, s3Path: s3Path })
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

  navigateToNextPage(){
    this.setState({errorMessage : ''});
    if(this.validateForm()){
    this.setState({loading : true});
    if(localStorage.getItem('data')){
                  let data = JSON.parse(localStorage.getItem('data'));
                  data.name = this.state.name;
                  data.creator = this.state.name;
                  data.creativeURL = this.state.creativeURL;
                  data.fileName = this.state.fileName;
                  data.category = this.state.category ? this.state.category.value : '';
                  data.content = data.status == 'yes' ? 'Explicit' : 'NonExplicit';
                  data.stores = 'social media'
                  data.audiofile = this.state.s3Path;
                  localStorage.setItem('data', JSON.stringify(data));
                  data.fyp_status = 'draft';
                  data.dashgo_status = 'draft';
                  data.email = this.state.auth.email;
                  data.audioFileURL = this.state.s3Path;
                  data.coverURL = this.state.coverURL;
                  data.finalImage = this.state.finalImage;
                  data.thumbnailImage = this.state.thumbnailImage;
                  if(data.id != '' && data.id != null && data.id != undefined){
                       creativeManagementService.updateCreative( data, 'soundUpdate')
                        .then(res => {
                          if(res.status === 200){
                            this.setState({loading : false});  
                            this.props.history.push('/soundReview');  
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
                       this.props.history.push('/soundReview');     
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
      isThisContentExpl,
      oval4,
      yes,
      areYouTheOwnerOf,
      creatorName,
      uploadAudioFile,
      rectangle,
      rectangle2,
      next,
      no,
      rectangle3,
      rectangle4,
      upload,
      inputName,
      inputType,
      inputPlaceholder,
      inputRequired,
      wavOrMp3Format,
      rectangle5,
      category,
      backChevron,
      fypsoundslogoProps,
    } = this.props;

    return (
      <LoadingOverlay
          active={this.state.loading}
          spinner={<HashLoader color={"#f24b76"} size={100}/>}
        >
      <div className="soundform2b">
        <div className="overlap-group-C61RwL">
          <img className="oval-4eduM0" src={oval} />
          <img className="oval-BJQsbv" src={oval2} />
          <img className="oval-6sb1qn" src={oval3} />
          
          <img className="oval-ovOecM" src={oval4} />
         
          
          </div>
          
        <div className="container-center-horizontal">
         
        </div>
        <div className="container-center-horizontal step4-container">
            <Fypsoundslogo {...fypsoundslogoProps} />

            <div className="owner">
              <h1 className="are-you-the-owner-of sofiapro-normal-white-30px">{areYouTheOwnerOf}</h1>
              <div className="yes montserrat-light-white-20px">{yes}</div>
            </div>
             

            <div className="explicit">
              <h1 className="is-this-content-expl sofiapro-normal-white-30px">{isThisContentExpl}</h1>
              <div className="yes montserrat-light-white-20px">{this.state.status}</div>
            </div>
            
              
              <Select 
              options={this.state.options}
              value={this.state.category}
              onChange={this.changeCategoryHandler}
              classNamePrefix="react-select"
              className='react-select-container'
                        />

              <div className="creator">
                <div className="creator-name sofiapro-normal-white-30px">{creatorName}</div>
                <input
                  id='name'
                    className="text-type montserrat-light-mountain-mist-20px"
                    name={inputName}
                    placeholder={inputPlaceholder}
                    type={inputType}
                    required={inputRequired}
                    value={this.state.name}
                    onChange={this.handleFieldChange.bind(this)}
                  />
                  <img className="rectangle-BJQsbv" src={rectangle4} />
              </div>
              
              <div className="upload-container">
                <div className="upload-audio-file sofiapro-normal-white-30px">{uploadAudioFile}</div>
                <div className="nexticon-copy-8">
                  <img className="rectangle-4eduM0" src={rectangle3} />
                    <label for="fileChoose">
                      
                    {this.state.fileName != '' ? <span className ="filename montserrat-light-mountain-mist-20px">{this.state.fileName}</span> :  <img className="upload" src={upload} />}
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

                </div>
                 <p className="wav-or-mp3-format montserrat-light-gravel-14px">{wavOrMp3Format}</p>
              </div>
              
              <div className="nexticon-4eduM0" onClick={this.navigateToNextPage.bind(this)}>
                <img className="rectangle-f4xscB" src={rectangle} />
                <img className="rectangle-JuxZGf" src={rectangle2} />
                <div className="next montserrat-semi-bold-white-20px">{next}</div>
                <div>
            {this.state.errorMessage != '' ? <span className="error-message montserrat-light-red-14px">{this.state.errorMessage}</span> : null}
            </div>
              </div>
              <div className="nexticon-copy-2">
                <div className="no montserrat-light-white-20px">{this.props.location?.state?.status}</div>
              </div>
              
          
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


