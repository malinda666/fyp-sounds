import React from "react";
import './dashboard.css';
import { v4 as uuid_v4 } from "uuid";
import fileManagementService from "../../services/fileManagementService";
import uploadManagementService from "../../services/uploadManagementService";
import profileManagementService from "../../services/profileManagementService";
import creativeManagementService from "../../services/creativeManagementService";
import HashLoader from 'react-spinners/HashLoader'
import LoadingOverlay from "react-loading-overlay";

export default class Soundsnewuser extends React.Component {

   constructor() {
        super({})
        this.inputOpenFileRef = React.createRef()
        this.onlineImage = 'https://anima-uploads.s3.amazonaws.com/projects/5fa9b05f2e946f434f245a4f/releases/5fa9c2ee225cce9e6c83ed86/img/sounds-shape-0F2FDFDC-9F3F-482B-A7B4-821C123911EA@2x.png';
        this.draftImage = 'https://anima-uploads.s3.amazonaws.com/projects/5fa9b05f2e946f434f245a4f/releases/5fa9c2ee225cce9e6c83ed86/img/sounds-shape-copy-2-1185B937-BA8C-4D90-86C0-62F3200611D4@2x.png';
        this.pendingImage = 'https://anima-uploads.s3.amazonaws.com/projects/5fa9b05f2e946f434f245a4f/releases/5fa9c2ee225cce9e6c83ed86/img/sounds-shape-copy-3-8E8AA722-0998-4B16-94EF-03E6DE1AD589@2x.png';
        this.offline = 'https://anima-uploads.s3.amazonaws.com/projects/5fa9b05f2e946f434f245a4f/releases/5fa9c2ee225cce9e6c83ed86/img/sounds-shape-copy-8A9A750C-FA9A-484D-A680-F96B57FD3A24@2x.png';
        this.state = {
          loading : false,          
          overlayText: 'Uploading your file ...',
          profileSignedURL:'',
          profileURL:'',
          user_dir:'',
          auth: null,
          creativeList:[]
        }
    }

    componentDidMount(){
       if(localStorage.getItem('auth')){
        this.setState({auth : JSON.parse(localStorage.getItem('auth'))}, () => {
          this.getDashboardItems();
          this.getUserProfile();
          localStorage.setItem('data','');
        });
      }
      if(localStorage.getItem('user_dir')){
        this.setState({user_dir : localStorage.getItem('user_dir')});
      }
      
    }

    showOpenFileDlg = () => {
        this.inputOpenFileRef.current.click()
    }

    getDashboardItems(){
       this.setState({ loading: true });
      creativeManagementService
        .get(this.state.auth.email)
        .then(async (res) => {
          if(res.status === 200){
            if(res.data.Items != null && res.data.Items.length > 0){             
              let updatedList =  await this.setCreativeSignedURL(res.data.Items);
              Promise.all(updatedList)
              .then(result => {
                this.setState({creativeList :result});
                  this.setState({ loading: false});
              }).catch(e => {
                  this.setState({ loading: false});
              })
             }
            else
                  this.setState({ loading: false});     
          }
          else {
         // toast.error("Unable to get user information");
          this.setState({ loading: false });
        }

        }).catch((err) => {
        console.log(err);
        //toast.error("Unable to get user information");
        this.setState({ loading: false });
      });
    }

   async setCreativeSignedURL(data){
     let index = 0;
     return data.map(async item => {
      
                item.index = ++index;
                item.signedCoverURL = await this.getSignedURL(item.coverURL);
                if(item.fyp_status === 'draft'){
                  item.statusImageURL = this.draftImage;
                }
                else if(item.fyp_status === 'online'){
                   item.statusImageURL = this.onlineImage;
                }
                else if(item.fyp_status === 'offline'){
                   item.statusImageURL = this.offline;
                  
                }else if(item.fyp_status === 'pending'){
                   item.statusImageURL = this.pendingImage;
                }
              
                return item;
              })


    }


    getUserProfile() {
    profileManagementService
      .get(this.state.auth.email)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.Item != null){
          this.setState({
            profileURL: res.data.Item.profileImagePath
          }, () => this.setProfileSignedURL());
        
          //this.setState({ loading: false });
        }
        } else {
         // toast.error("Unable to get user information");
         // this.setState({ loading: false });
        }
      })
      .catch((err) => {
        console.log(err);
        //toast.error("Unable to get user information");
       // this.setState({ loading: false });
      });
  }

  setProfileSignedURL() {
    this.getSignedURL(this.state.profileURL).then(
      (result) => {
        this.setState({ profileSignedURL: result });
      }
    );
  }

  async getSignedURL(filepath) {
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

  uploadProfileImage = () => {
  this.setState({ loading: true });
  console.log(this.uploadInput.files[0]);
  let file = this.uploadInput.files[0]
  var re = /(?:\.([^.]+))?$/;
  var ext = re.exec(file.name);
  let s3Path = this.state.auth.user_dir + '/profile/' + uuid_v4()+'.' +ext[1];
  
  fileManagementService
      .uploadFile(s3Path, file.type)
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
            if (result.status === 200) {
              profileManagementService
                .updateProfileImage(s3Path,this.state.auth.email)
                .then((profileUpdateResult) => {
                  if (profileUpdateResult.status == 200) {  
                    this.getUserProfile();               
                    this.setState({ loading: false });
                  } else {
                    this.setState({ loading: false });
                    //toast.error('ERROR : Unable to upload document');
                  }
                })
                .catch((error) => {
                  this.setState({ loading: false });
                 //// toast.error('ERROR ' + JSON.stringify(error));
                });
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

  onSettingsClick(){
     this.props.history.push('/settigns');
   }

  selectCreative(id, status) {
    if(status === 'draft'){
    this.setState({loading : true});
    creativeManagementService.getById(id)
    .then((res) => {
      if(res.status === 200){
         if(res.data.Items != null && res.data.Items.length > 0){ 
           let item = res.data.Items[0];
           let data = {
             id : item.SK,
             name : item.creator,
             title : item.title,
             category : item.category,
             content : item.content,
             stores : item.stores,
             audiofile : item.audioFileURL,
             albumcover : item.coverURL,
             type : item.type,
             authorName : item.author,
             producerName : item.producer,
             featuringArtist: item.featured_artist,
             fileName : item.fileName
           }

           localStorage.setItem('data',JSON.stringify(data));
           this.props.history.push('/newSound');
           this.setState({loading : false});

         }
         else
          this.setState({loading : true});
        }
        else
        this.setState({loading : true});
      
    }).catch((error) => {
        this.setState({ loading: false });
        //toast.error(JSON.stringify(error));
      });
    }
  }


  render() {
    const {
      Ud83CUdfb5,
      sounds,
      trends,
      Ud83DUdd25,
      earnings,
      Ud83DUdcb0,
      rectangle,
      NewSound,
      spanText,
      spanText2,
      path3,
      path3Copy,
      oval5,
      shape,
      shape2,
      path,
      oval,
      label1,
      faq,
      contact,
      privacyPolicy,
      copyright2512021Al,
      settingiconwhiteProps,
      aboutProps,
      fypsoundslogoProps,
    } = this.props;

    return (
       <LoadingOverlay
          active={this.state.loading}
          spinner={<HashLoader color={"#f24b76"} size={100}/>}
        >
      <div className="soundsnewuser">
        <div className="sound-5 smart-layers-pointers "></div>
        <div className="sound-5-copy smart-layers-pointers "></div>
        <div className="container-center-horizontal">
          <div className="buttons">
            <ul class="nav nav-tabs">
                <li class="active nav-item">
                  <a data-toggle="tab" href="#sounds">
                   <div className="sounds-Gt7Q7B">
                    <h1 className="ud83cudfb5 applecoloremoji-normal-granite-gray-30px">{Ud83CUdfb5}</h1>
                    <div className="sounds-EiSkUu sfprodisplay-normal-black-15px">{sounds}</div>
                    <div className="rectangle-3"></div>
                   </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-toggle="tab" href="#trends">
                     <div className="trends-Gt7Q7B smart-layers-pointers ">
                      <div className="trends-45jQMT sfprodisplay-regular-normal-mountain-mist-15px">{trends}</div>
                      <div className="ud83dudd25 applecoloremoji-normal-granite-gray-30px">{Ud83DUdd25}</div>
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-toggle="tab" href="#earnings">                    
                  <div className="earnings-Gt7Q7B smart-layers-pointers ">
                    <div className="earnings-pxqN5N sfprodisplay-regular-normal-mountain-mist-15px">{earnings}</div>
                    <div className="ud83dudcb0 applecoloremoji-normal-granite-gray-30px">{Ud83DUdcb0}</div>
                  </div> 
                  </a>
                </li>
            </ul>
            <div class="tab-content">
              <div id="sounds" class="tab-pane fade in active">
                <br/>
                 <div className="overlap-group3">
                  <div className="sound-5 smart-layers-pointers "></div>
                  <div className="sound-5-copy smart-layers-pointers "></div>
                  <div className="list animate-enter">
                    <div className="overlap-group1">
                      <div className="container">
                        <div className="row">                 
                      
                      {
                        this.state.creativeList.map((creative) => {
                      
                          return (
                            <div className="col sound-wrap" onClick={() => {
                                     this.selectCreative(creative.SK, creative.fyp_status);
                                 }}>
                              <div className={`sound-${creative.index} smart-layers-pointers sound-inner-wrap`} style={{ backgroundImage: `url(${creative.signedCoverURL})` }}>
                                <img className="shape-1" src={creative.statusImageURL} />
                              </div>
                            </div>
                          );
                        
                        })}
                        </div>
                      </div>
                    
                      {/* <div className="sound-2 smart-layers-pointers " style={{ backgroundImage: `url(${sound2})` }}>
                        <img className="shape-1" src={shapeCopy3} />
                      </div> */}
                    </div>
                      {/* <div className="sound-3 smart-layers-pointers " style={{ backgroundImage: `url(${sound3})` }}>
                        <img className="shape-1" src={shapeCopy2} />
                      </div>
                      <div className="sound-4 smart-layers-pointers " style={{ backgroundImage: `url(${sound4})` }}>
                        <img className="shape-1" src={shapeCopy} />
                      </div>
                      <div className="sound-5-1 smart-layers-pointers " style={{ backgroundImage: `url(${sound5})` }}></div>
                      <div className="sound-6 smart-layers-pointers " style={{ backgroundImage: `url(${sound6})` }}></div> */}
                    </div>
                  </div>
                   <div className="container-center-horizontal" onClick={() => {this.props.history.push('/newSound')}}>
          <div className="new-sound-button animate-enter smart-layers-pointers ">
            <img className="rectangle" src={rectangle} />
            <div className="new-sound montserrat-semi-bold-white-20px">{NewSound}</div>
          </div>
        </div>
              </div>
              <div id="trends" class="tab-pane fade">
                <br/>
                <div className="overlap-group3">
                   <div className="overlap-group1">
                  <p>trends</p>
                  <br/>
                
                </div>
                </div>
              
              </div>
              <div id="earnings" class="tab-pane fade">
                <br/>
                <div className="overlap-group3">
                    <div className="overlap-group1">
                  <p>earnings</p>
                  <br/>
                 
                </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
       
        {this.state.creativeList.length === 0 ?
        <div className="container-center-horizontal">
          <div className="upload-your-first-so montserrat-semi-bold-violet-red-25px">
            <span className="span1-SsBuiu">{spanText}</span>
            <span className="span2-SsBuiu">{spanText2}</span>
          </div>
        </div>
        : null}
        <div className="container-center-horizontal">
          <div className="group">
            <img className="path-3" src={path3} />
            <img className="path-3-copy" src={path3Copy} />
            <label for="fileChoose">
            {this.state.profileURL ?
             <img
             className="oval-5"
                    src={this.state.profileSignedURL}
                    alt=""
                    style={{
                      borderRadius: "100%",
                      width: "100px",
                      height: "100px",
                    }}
                  /> :
            <img className="oval-5" src={oval5} />  }
             
             {!this.state.profileURL ?
            <div className="upload smart-layers-pointers ">
           
              <img className="shape-uBeRw7" src={shape} />
              <img className="shape-vFHiyd" src={shape2} />
              <img className="path" src={path} />
           
                  
            </div> : null}
             </label>
            <Settingiconwhite {...{...settingiconwhiteProps , onSettingsClick : () => this.onSettingsClick()}}  />
          </div>
          <input 
                id="fileChoose"
                className="dropzone"
                              type='file'
                              name='img_logo'
                              ref={(ref) => {
                                this.uploadInput = ref;
                              }}
                              onChange={this.uploadProfileImage.bind(this)}
                            />           
        </div>
        <div className="container-center-horizontal">
          <div className="footer">
            <div className="overlap-group">
              <img className="oval" src={oval} />
              <div className="group-5">
                <About {...aboutProps} />
                <div className="container-center-horizontal footer-items">
                  <p className="footer-items-devider">|</p>
                  <div className="montserrat-semi-bold-white-14px">{faq}</div>
                </div>
                <div className="container-center-horizontal footer-items">
                  <p className="footer-items-devider">|</p>
                  <div className="montserrat-semi-bold-white-14px">{contact}</div>
                </div>
                <div className="container-center-horizontal footer-items">
                  <p className="footer-items-devider">|</p>
                  <div className="montserrat-semi-bold-white-14px">{privacyPolicy}</div>
                </div>
              </div>
            </div>
            <Fypsoundslogo {...fypsoundslogoProps} />
            <div className="container-center-horizontal">
              <p className="copyright--51-2021-al montserrat-normal-white-13px">{copyright2512021Al}</p>
            </div>
          </div>
        </div>
      </div>
      </LoadingOverlay>
    );
  }
}


class Settingiconwhite extends React.Component {
  render() {
    const { shape } = this.props;

    return (
      <div className="settingiconwhite-NOXmfT" onClick = {this.props.onSettingsClick}>
        <div className="settingiconwhite-u3qPnF">
          <img className="shape-nrx20a" src={shape} />
          <div className="rectangle-10 hidden "></div>
        </div>
      </div>
    );
  }
}


class About extends React.Component {
  render() {
    const { about } = this.props;

    return (
      <div className="container-center-horizontal footer-items">
          <a href="/about">
            <div className="montserrat-semi-bold-white-14px">{about}</div>
          </a>
      </div>
    );
  }
}


class Fypsoundslogo extends React.Component {
  render() {
    const { fypsoundsLogo } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="fypsoundslogo" style={{ backgroundImage: `url(${fypsoundsLogo})` }}></div>
      </div>
    );
  }
}
