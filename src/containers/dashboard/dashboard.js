import React from "react";
import './dashboard.css';
import { v4 as uuid_v4 } from "uuid";
import fileManagementService from "../../services/fileManagementService";
import uploadManagementService from "../../services/uploadManagementService";
import profileManagementService from "../../services/profileManagementService";
import creativeManagementService from "../../services/creativeManagementService";
import earningManagementService from "../../services/erningManagementService";
import HashLoader from 'react-spinners/HashLoader'
import LoadingOverlay from "react-loading-overlay";
import ReactApexCharts from 'react-apexcharts';
import {isMobile} from '../../utils/isMobile';
import placeHolderImage from '../../assets/img/music-form-5b-upload-EDE27472-10E7-4344-A151-5922502B697A@2x.png'
import Header from '../../components/header'
import Footer from '../../components/footer'
import Imagesloaded from '../../components/imagesloaded'
import LoadingProgress from 'react-js-loading-progress-bar';
import LazyLoad from 'react-lazyload';
import {Link} from 'react-router-dom'


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
          creativeList:[],
          earningList :[],
          series:[],
          series1:[42, 47, 52, 58, 65],
          series2: [{
              data: ["13%", "45%", "44%", "1%", "80%"]
            }],
            series3: [{
              data: ["23%", "5%", "94%", "15%", "80%"]
            }],
          payPal:'',
          // options: {
          //     chart: {
          //       type: 'polarArea',
          //       height: "100%",
          //       width: "100%"
          //     },
          //     labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
          //     plotOptions: {
          //       bar: {
          //         borderRadius: 15,
          //         horizontal: true,
          //       }
          //     },
          //     dataLabels: {
          //       enabled: true
          //     },
          //     xaxis: {
          //       categories: [],
          //     },
          //     grid: {
          //       xaxis: {
          //         lines: {
          //           show: true
          //         }
          //       }
          //     },
          //     yaxis: {
          //       reversed: true,
          //       axisTicks: {
          //         show: true
          //       }
          //     }
          //   },
            options1: {
              chart: {
                width: 380,
                type: 'polarArea'
              },
              labels: ['Rose A', 'Rose B', 'Rose C', 'Rose D', 'Rose E'],
              fill: {
                opacity: 1
              },
              stroke: {
                width: 1,
                colors: undefined
              },
              yaxis: {
                show: false
              },
              legend: {
                show:isMobile?false:true
              },
              plotOptions: {
                polarArea: {
                  rings: {
                    strokeWidth: 0
                  }
                }
              },
              theme: {
                monochrome: {
                  enabled: true,
                  shadeTo: 'light',
                  shadeIntensity: 0.6
                }
              },
            },
        options2: {
              chart: {
                type: 'bar',
                width: 350,
                offsetY: -15,
                toolbar:{
                  show:false
                }
              },
              
              plotOptions: {
                bar: {
                  borderRadius: 15,
                  horizontal: true,
                }
              },
              dataLabels: {
                show:false
              },
              stroke: {
                show:false
              },
              xaxis: {
                categories: ['USA', 'Mexico', 'UK', 'Canada', 'Others'],
                labels:{
                  show:false
                }
              },
              yaxis: {
                labels:{
                  show:true
                }
              },
              grid:{
                show:false
              },
              theme: {
                palette: 'palette6'
              },
              stroke:{
                show:false
              }
      },
      options3: {
              chart: {
                width: 250,
                type: 'bar',
                toolbar:{
                  show:false
                }
              },
              labels: ['Others', 'Tik-Tok', 'FB/IG', 'Soptify', 'Deezer'],
              fill: {
                opacity: 1
              },
              stroke: {
                show:false
              },
              xaxis: {
                show:false,
              },
              yaxis: {
                labels:{
                  show:false
                }
              },
              grid:{
                show:false
              },
              legend: {
                show:true,
                position: 'bottom',
                horizontalAlign: 'right', 
              },
              plotOptions: {
                bar: {
                  borderRadius: 15,
                  horizontal: false,
                }
              },
              theme: {
                palette: 'palette0'
              }
        },
     
    }
}
    componentDidMount(){
       if(localStorage.getItem('auth')){
        this.setState({auth : JSON.parse(localStorage.getItem('auth'))}, () => {
          this.getDashboardItems();
          this.getUserProfile();
          this.getUserEarnings();
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
                this.setState({creativeList :result.reverse()});
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
            profileURL: res.data.Item.profileImagePath, payPal :res.data.Item.payPal 
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

  getUserEarnings() {
    earningManagementService
      .get(this.state.auth.email)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.Items != null){
            let data =[];
            let categories =[];
            res.data.Items.forEach(element => {
              data.push(element.amount);
              categories.push(("0" + element.month).slice(-2) + '/' + element.year);              
            });
            
          this.setState(({series}) => ({
              series: [
                  ...series.slice(0,1),
                  {
                      ...series[1],
                      data: data,
                  },
                  ...series.slice(2)
              ]
          }));
          this.updateCategories(categories);
          this.setState({
            earningList: res.data.Items
          });
        
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

  updateCategories(list){
  const newObj = { ...this.state.options, xaxis: {categories : list}  } // create a new object by spreading in the this.state.car and overriding features with our new array 
  this.setState({ options: newObj }) // set this.state.car to our new object
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
                  window.alert(s3Path)
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

  onPaymentRequest(){
    if(this.state.payPal === undefined || this.state.payPal === ''){
      this.props.history.push('/warn3');
    }
    else {
       this.props.history.push('/warn7');
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
      rectangle21Copy,
      rectangle2Copy,
      paid,
      period,
      amount,
      group3,
      status,
      request,
      songsEarning,
      profileImage
    } = this.props;

    return (
      <>
       
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
                    <div className="sounds-EiSkUu sfprodisplay-regular-normal-mountain-mist-15px">{sounds}</div>
                    {/* <div className="rectangle-3"></div> */}
                   </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-toggle="tab" href="#trends">
                     <div className="trends-Gt7Q7B ">
                      <div className="trends-45jQMT sfprodisplay-regular-normal-mountain-mist-15px">{trends}</div>
                      <div className="ud83dudd25 applecoloremoji-normal-granite-gray-30px">{Ud83DUdd25}</div>
                      {/* <div className="rectangle-4"></div> */}
                    </div>
                  </a>
                </li>
                <li className="nav-item">
                  <a data-toggle="tab" href="#earnings">                    
                  <div className="earnings-Gt7Q7B ">
                    <div className="earnings-pxqN5N sfprodisplay-regular-normal-mountain-mist-15px">{earnings}</div>
                    <div className="ud83dudcb0 applecoloremoji-normal-granite-gray-30px">{Ud83DUdcb0}</div>
                    {/* <div className="rectangle-5"></div> */}
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
                              <div className={`sound-${creative.index} smart-layers-pointers sound-inner-wrap`} style={{ backgroundImage: `url(${creative.signedCoverURL?creative.signedCoverURL:placeHolderImage})` }}>
                                  <LazyLoad height="100%">                              
                                <img className="shape-1" src={creative.statusImageURL} />
                                </LazyLoad> 
                              </div>
                            </div>
                          );
                        
                        })}
                        </div>
                      </div>
                    
                      {/* <div className="sound smart-layers-pointers " style={{ backgroundImage: `url(${sound2})` }}>
                        <img className="shape-1" src={shapeCopy3} />
                      </div> */}
                    </div>
                      {/* <div className="sound smart-layers-pointers " style={{ backgroundImage: `url(${sound3})` }}>
                        <img className="shape-1" src={shapeCopy2} />
                      </div>
                      <div className="sound smart-layers-pointers " style={{ backgroundImage: `url(${sound4})` }}>
                        <img className="shape-1" src={shapeCopy} />
                      </div>
                      <div className="sound smart-layers-pointers " style={{ backgroundImage: `url(${sound5})` }}></div>
                      <div className="sound smart-layers-pointers " style={{ backgroundImage: `url(${sound6})` }}></div> */}
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
                {this.state.creativeList.length > 0 ?
                <div className="overlap-group3">
                  <div className="group-30">
                    <div className="overlap-group1">
                      <div className="songs-Ernings" style={{ backgroundImage: `url(${songsEarning})` }}>
                        <div className="bar-chart">
                          <div id="chart" style={{position: 'relative', width: '100%', height:"100%"}}>                           
                              <ReactApexCharts options={this.state.options1} series={this.state.series1} type="polarArea" height="100%" />
                          </div>                   
    
                        </div>
                      </div>
                      <div className="songs-Ernings" style={{ backgroundImage: `url(${songsEarning})` }}>
                        <div className="bar-chart">
                          <div id="chart" style={{position: 'relative', width: '100%', height:"100%"}}>                           
                              <ReactApexCharts options={this.state.options2} series={this.state.series2} type="bar" height="100%" />
                          </div>                   
    
                        </div>
                      </div>
                      <div className="songs-Ernings" style={{ backgroundImage: `url(${songsEarning})` }}>
                        <div className="bar-chart">
                          <div id="chart" style={{position: 'relative', width: '100%', height:"100%"}}>                           
                              <ReactApexCharts options={this.state.options3} series={this.state.series3} type="bar" height="100%" />
                          </div>                   
    
                        </div>
                      </div>
                    </div>
                  </div>                
                </div>
               : null}
              </div>
              <div id="earnings" class="tab-pane fade">
                <br/>
                {this.state.creativeList.length > 0 ?
                  <>
                <div className="overlap-group3">
                  <div className="group-3" style={{ backgroundImage: `url(${group3})` }}>
                     <table class="table borderless">
                      <thead>
                        <tr>
                          <th scope="col" className="status sfprodisplay-italic-normal-black-15px" >{status}</th>
                          <th scope="col" className="period sfprodisplay-italic-normal-black-15px">{period}</th>
                          <th scope="col" className="amount sfprodisplay-italic-normal-black-15px">{amount}</th>
                        </tr>
                      </thead>
                      <tbody>
                     
                    {
                       this.state.earningList.map((earning) => {
                         let status = earning.status == 'Ready' ? 'ready' : 'paid';
                      
                          return (
                            <tr>
                              <td>
                                <div className="overlap-group-1">
                                   <img className="rectangle-2-copy" src={ status === 'ready' ? rectangle2Copy : rectangle21Copy} />
                                   <div className={ status + " sfprodisplay-normal-white-15px"}>{status}</div>
                                </div>
                                </td>
                              <td className="date sfprodisplay-regular-normal-mountain-mist-12px">{("0" + earning.month).slice(-2) + '/' + earning.year}</td>
                              <td className="price sfprodisplay-normal-black-15px">${earning.amount}</td>
                            </tr>

                            // <div className="row">
                            //   <div className="auto-flex">                             
                            //     <div className="overlap-group-1">
                            //       <img className="rectangle-2-copy" src={rectangle2Copy} />
                            //       <div className="paid sfprodisplay-normal-white-15px">{earning.status}</div>
                            //     </div>
                            //     </div>
                            //     <div className="auto-flex2">
                            //       <div className="date sfprodisplay-regular-normal-mountain-mist-12px">{earning.month + '/' + earning.year}</div>
                            //     </div>
                            //     <div className="auto-flex1">
                            //       <div className="price sfprodisplay-normal-black-15px">${earning.amount}</div>
                            //     </div>
                            // </div>
                          )})
                    }
                    </tbody>
                    </table>
                    {/* <div className="auto-flex">
                      <div className="status sfprodisplay-italic-normal-black-15px">{status}</div>
                      <div className="overlap-group-1">
                        <img className="rectangle-2-copy" src={rectangle2Copy} />
                        <div className="paid sfprodisplay-normal-white-15px">{paid}</div>
                      </div>
                    </div>
                    <div className="auto-flex2">
                      <div className="period sfprodisplay-italic-normal-black-15px">{period}</div>
                      <div className="date sfprodisplay-regular-normal-mountain-mist-12px">09/2020</div>
                    </div>
                    <div className="auto-flex1">
                      <div className="amount sfprodisplay-italic-normal-black-15px">{amount}</div>
                      <div className="price sfprodisplay-normal-black-15px">$8</div>
                    </div> */}
                  </div>
                  
                </div>
                <div className="request-button animate-enter smart-layers-pointers " onClick={() => {
                                     this.onPaymentRequest();
                                 }}>
                      <div className="overlap-group4">
                        <img className="rectangle1" src={rectangle} />
                        <div className="request montserratheading20pxsemiboldcenter-aligngray-900">{request}</div>
                      </div>
                    </div>
                </>
              : null }
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
            <div className="group-images-wrapper">
              <img className="path-3" src={path3} />
              <img className="path-3-copy" src={path3Copy} />
            </div>
            <LazyLoad height={200}>
            <label for="fileChoose">
                
                {this.state.profileURL ?
               <img
               className="oval-5"
                      src={this.state.profileSignedURL}
                      alt=""
                      style={{
                        borderRadius: "100%",
                      }}
                    /> :
              <img className="oval-5" src={profileImage} />  }
             
             {!this.state.profileURL ?
            <div className="upload smart-layers-pointers ">
              <img className="shape-uBeRw7" src={shape} />
              <img className="shape-vFHiyd" src={shape2} />
              <img className="path" src={path} />
            </div> : null}
             </label>
             </LazyLoad>
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
          <Footer/>
        </div>
      </div>
      </LoadingOverlay>
    </>
    );
  }
}


class Settingiconwhite extends React.Component {
  render() {
    const { shape } = this.props;

    return (
      <div className="settingiconwhite-NOXmfT">
        <Link to='/settigns' className="settingiconwhite-u3qPnF">
          <img className="shape-nrx20a" src={shape} />
          <div className="rectangle-10 hidden "></div>
        </Link>
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
