import React from "react";
import './dashboard.css';
import { v4 as uuid_v4 } from "uuid";
import fileManagementService from "../../services/fileManagementService";
import uploadManagementService from "../../services/uploadManagementService";
import profileManagementService from "../../services/profileManagementService";
import creativeManagementService from "../../services/creativeManagementService";
import earningManagementService from "../../services/erningManagementService";
import trendManagementService from "../../services/trendsManagementService";
import paymentManagementService from "../../services/paymentManagementService";
import HashLoader from 'react-spinners/HashLoader'
import LoadingOverlay from "react-loading-overlay";
import ReactApexCharts from 'react-apexcharts';
import Select from 'react-select';
import Cropper from 'react-easy-crop'
import getCroppedImg from '../../utils/cropImage'

export default class Soundsnewuser extends React.Component {

   constructor(props) {
        super(props)
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
          dspSeries: [],
          trackSeries:[],
          countriesSeries: [],            
          payPal:'', 
          isPendingPaymentExixts : false,
          isDisplayLabel: false,
          monthOptions : [],
          selectedMonth : {
            value: 'month',
            label: 'month',
          },      
          trackOptions: {
            chart: {
              width: 380,
              type: 'polarArea'
            },
            labels: [],
            fill: {
              opacity: 1
            },
            stroke: {
              width: 1
            },
            yaxis: {
              show: false
            },
            legend: {
              show:false
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
      countriesOptions: {
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
              categories: [],
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
    dspOptions: {
            chart: {
              width: 250,
              type: 'bar',
              toolbar:{
                show:false
              }
            },
            labels: [],
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
    componentDidMount(){
       if(localStorage.getItem('auth')){
        // this.props.userHasAuthenticated(true);
        this.setState({auth : JSON.parse(localStorage.getItem('auth'))}, () => {
          this.getDashboardItems();
          this.getUserProfile();
          this.getUserEarnings();
          //this.getUserTrends();
          this.setMonthDropDown();
          localStorage.setItem('data','');
        });

        if(localStorage.getItem('user_dir')){
          this.setState({user_dir : localStorage.getItem('user_dir')});
        }

      }
      else {
       // this.props.userHasAuthenticated(false);
      }
     
      
    }

    setMonthDropDown(){
      let months = []; var monthName = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
      var d = new Date();
      d.setDate(d.getMonth() - 2,1);
      let i =0;
      for (i=0; i<=11; i++) {    
        //console.log(monthName[d.getMonth()] + ' ' + d.getFullYear());    
        months.push({label: monthName[d.getMonth()] + ' ' + d.getFullYear(), value :(d.getMonth() + 1) + ',' + d.getFullYear() });    
        d.setMonth(d.getMonth() - 1);
      }
      console.log(JSON.stringify(months));
      this.setState({monthOptions : months, selectedMonth : {label : monthName[new Date().getMonth()-1] + ' ' + new Date().getFullYear(), value : (new Date().getMonth() -1) + ',' + new Date().getFullYear()}}, 
      () => {
        let month = 1;
        if(new Date().getMonth() == 0){
          month = 12;
        }
        else{
          month = new Date().getMonth();
        }
        this.getUserTrends(month , new Date().getFullYear());
      });
    }

    showOpenFileDlg = () => {
        this.inputOpenFileRef.current.click()
    }

    getUserTrends(month, year){
      this.setState({ loading: true, dspSeries: [], countriesSeries: [], trackSeries:[]});
      trendManagementService.get(this.state.auth.email, month, year)
      .then((res) => {
        if (res.status === 200) {
          if (res.data.Items != null && res.data.Items.length > 0){
            let dspData =[];
            let dspCategories =[];
            let countryData =[];
            let countryCategories =[];
            let trackData =[];
            let trackCategories =[];
            let trendData = JSON.parse(res.data.Items[0].data);
            if(trendData != null && trendData != undefined){
            
              for (const element of trendData.DSPs) {
                dspData.push(element.value);
              dspCategories.push(element.name);    
              }
                        
         for (const element of trendData.Countries) {
          countryData.push(element.value.toFixed(2));
          countryCategories.push(element.name);  
         }

           for (const element of trendData.Units) {
            trackData.push(element.units);
            trackCategories.push(element.name);      
           }
           
            
          this.setState(({dspSeries}) => ({
            dspSeries: [
                  ...dspSeries.slice(0,1),
                  {
                      ...dspSeries[1],
                      data: dspData,
                  },
                  ...dspSeries.slice(2)
              ]
          }));
          const newObj = { ...this.state.dspOptions, labels: dspCategories } // create a new object by spreading in the this.state.car and overriding features with our new array 
          this.setState({ dspOptions: newObj})
         
                    this.setState(({countriesSeries}) => ({
                      countriesSeries: [
                            ...countriesSeries.slice(0,1),
                            {
                                ...countriesSeries[1],
                                data: countryData,
                            },
                            ...countriesSeries.slice(2)
                        ]
                    }));
          this.updateCountryCategories(countryCategories);

         
          const trackObj = { ...this.state.trackOptions, labels: trackCategories} // create a new object by spreading in the this.state.car and overriding features with our new array 
          this.setState({ trackOptions: trackObj})

          this.setState({trackSeries : trackData});
                  }
          this.setState({ loading: false });
        }else {
          // toast.error("Unable to get user information");
          this.setState({ loading: false });
         }

        } else {
         // toast.error("Unable to get user information");
         this.setState({ loading: false });
        }
      })
      .catch((err) => {
        console.log(err);
        //toast.error("Unable to get user information");
       this.setState({ loading: false });
      });
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
                this.setState({creativeList :result, isDisplayLabel : true});
                  this.setState({ loading: false});
              }).catch(e => {
                  this.setState({ loading: false, isDisplayLabel : true});
              })
             }
            else
                  this.setState({ loading: false, isDisplayLabel : true});     
          }
          else {
         // toast.error("Unable to get user information");
          this.setState({ loading: false, isDisplayLabel : true });
        }

        }).catch((err) => {
        console.log(err);
        //toast.error("Unable to get user information");
        this.setState({ loading: false, isDisplayLabel : true });
      });
    }

   async setCreativeSignedURL(data){
     let index = 0;
     return data.map(async item => {
      
                item.index = ++index;
                item.signedCoverURL = await this.getCoverThumbnailSignedURL(item.thumbnailImage);
                if(item.fyp_status.toUpperCase() === 'DRAFT'){
                  item.statusImageURL = this.draftImage;
                }
                else if(item.fyp_status.toUpperCase() === 'ONLINE'){
                   item.statusImageURL = this.onlineImage;
                }
                else if(item.fyp_status.toUpperCase() === 'OFFLINE'){
                   item.statusImageURL = this.offline;
                  
                }else if(item.fyp_status.toUpperCase() === 'PENDING'){
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
          if (res.data.Items != null && res.data.Items.length > 0){
            let pendingPaymentList = res.data.Items.filter(item => item.earning_status === 'Ready')
            if(pendingPaymentList.length > 0){
              this.setState({isPendingPaymentExixts : true})
            }
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

  updateCountryCategories(list){
  const newObj = { ...this.state.countriesOptions, xaxis: {categories : list}  } // create a new object by spreading in the this.state.car and overriding features with our new array 
  this.setState({ countriesOptions: newObj }) // set this.state.car to our new object
  }

  setProfileSignedURL() {
    // this.getSignedURL(this.state.profileURL).then(
    //   (result) => {
    //     this.setState({ profileSignedURL: result });
    //   }
    // );
    let current = this;
    this.setState({loading : true})
    // let filename = this.state.coverImageURL.replace(/^.*[\\\/]/, "");
    this.getSignedURL(this.state.profileURL).then(
      (result) => {
        this.setState({ profileSignedURL: result }, () => {
          this.toDataURL(result, function(dataUrl) {
            // console.log(dataUrl)
            current.setState({imagePreviewUrl : dataUrl, cropedImageFile : current.dataURLtoFile(dataUrl, "profile.jpeg")})
            console.log(current.state.cropedImageFile)
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
  async getSignedURL(filepath) {
    return fileManagementService
      .downloadProfileImage(filepath)
      .then((res) => {
        if (res.status === 200) {
          return res.data;
        }
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  async getCoverThumbnailSignedURL(filepath) {
    return fileManagementService
      .downloadCoverThumbnail(filepath)
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
  // console.log(this.uploadInput.files[0]);
  let file = this.uploadInput.files[0]
  console.log(file)
  var re = /(?:\.([^.]+))?$/;
  if (file == null || file == undefined) {
     return
 }
  var ext = re.exec(file.name);
  let newFileName = uuid_v4();
  let s3Path = this.state.auth.user_dir + '/profile/' + newFileName+'.' +ext[1];
  fileManagementService
      .uploadProfileImage(s3Path, file.type)
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
     this.props.history.push('/settings');
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
      this.setState({loading : true});
     
      if(this.state.isPendingPaymentExixts){
        paymentManagementService.create(this.state.auth.email, this.state.payPal)
        .then(response => {
          if(response.status === 200){
            this.props.history.push('/warn7');
          }
          else{
            this.setState({loading : false});
          }
        })
        .catch((error) => {
          this.setState({ loading: false });
          //toast.error(JSON.stringify(error));
        });
      }
      else{
        this.setState({ loading: false });
      }
       
    }

  }


  changeMonthHandler = (selected) => {
    this.setState({ selectedMonth: selected });
    let parts = selected.value.split(",");
    this.getUserTrends(parts[0],parts[1]);
  };


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
      backChevron
    } = this.props;
    const { imagePreviewUrl, croppedAreaPixels, crop, zoom, aspect , croppedImage} = this.state;

    return (
       <LoadingOverlay
          active={this.state.loading}
          spinner={<HashLoader color={"#f24b76"} size={100}/>}
        >
      <div className="soundsnewuser">
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
                  <div className="group-30 ">
                  <div className="overlap-group1">
                    <div className="list animate-enter">
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
                  
                   <div className="container-center-horizontal" onClick={() => {this.props.history.push('/newSound')}}>
          <div className="new-sound-button animate-enter smart-layers-pointers ">
            <img className="rectangle" src={rectangle} />
            <div className="new-sound montserrat-semi-bold-white-20px">{NewSound}</div>
          </div>
        </div></div>
              </div></div>
              <div id="trends" class="tab-pane fade">
                <br/>
                {this.state.creativeList.length > 0 ?
                  this.state.trackSeries.length===0 && this.state.countriesSeries.length === 0 && this.state.dspSeries.length === 0?(
                    <div className="no-earnings montserrat-semi-bold-violet-red-25px">
                      <span>No Data Available.</span>
                    </div>
                    ):
                  <>
                <div className="overlap-group3">
                  <div className="group-30">
                    <div className="overlap-group1">
                      <div className="songs-Ernings" style={{ backgroundImage: `url(${songsEarning})` }}>
                        <div className="bar-chart">
                          <div id="chart" style={{position: 'relative', width: '100%', height:"100%"}}>                           
                              <ReactApexCharts options={this.state.trackOptions} series={this.state.trackSeries} type="polarArea" height="100%" />
                          </div>                   
    
                        </div>
                      </div>
                      <div className="songs-Ernings" style={{ backgroundImage: `url(${songsEarning})` }}>
                        <div className="bar-chart">
                          <div id="chart" style={{position: 'relative', width: '100%', height:"100%"}}>                           
                              <ReactApexCharts options={this.state.countriesOptions} series={this.state.countriesSeries} type="bar" height="100%" />
                          </div>                   
    
                        </div>
                      </div>
                      <div className="songs-Ernings" style={{ backgroundImage: `url(${songsEarning})` }}>
                        <div className="bar-chart">
                          <div id="chart" style={{position: 'relative', width: '100%', height:"100%"}}>                           
                              <ReactApexCharts options={this.state.dspOptions} series={this.state.dspSeries} type="bar" height="100%" />
                          </div>                   
    
                        </div>
                      </div></div>
                      <div className="container-center-horizontal">
                        <div className="trends-button  animate-enter smart-layers-pointers ">
                    <div className="nexticon-C61RwL">
                      {/* <img className="rectangle-JuxZGf" src={rectangle5} /> */}
                      <Select 
                        options={this.state.monthOptions}
                        value={this.state.selectedMonth}
                        onChange={this.changeMonthHandler}
                        classNamePrefix="react-select"
                        className='react-select-container'
                        isSearchable = {false}
                                  />
                      {/* <div className="category montserrat-semi-bold-white-20px">{category}</div> */}
                      <img className="back-chevron" src={backChevron} />
                    </div>
                  </div>   </div>
                    </div>
                   
                  </div> 
                    </>         
                
               : null}
              </div>
              <div id="earnings" class="tab-pane fade">
                <br/>
                {this.state.creativeList.length > 0 ?
                  this.state.earningList.length===0?(
                    <div className="no-earnings montserrat-semi-bold-violet-red-25px">
                      <span>No Earnings Yet.</span>
                    </div>
                    ):
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
                         let status = earning.earning_status == 'Ready' ? 'ready' : 'paid';
                      
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
                {this.state.isPendingPaymentExixts ? 
                <div className="container-center-horizontal " onClick={() => {
                                     this.onPaymentRequest();
                                 }}>
                      <div className="request-button animate-enter smart-layers-pointers ">
                        <img className="rectangle1" src={rectangle} />
                        <div className="request montserrat-semi-bold-white-20px">{request}</div>
                      </div>
                    </div> : null }
                    </>
              : null }
              </div>
            </div>
          </div>
        </div>
       
        {this.state.creativeList.length === 0 && this.state.isDisplayLabel ?
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
            <div className="profile-pic">
            <label for="fileChoose">

            {this.state.profileSignedURL ?
              <>
             <img
             className="oval-5"
                    src={this.state.profileSignedURL}
                    alt=""
                    style={{
                      borderRadius: "100%",
                      width: "100px",
                      height: "100px",
                    }}
                  /> 
            {/*   <img  */}
            {/*   ref={imageRef => this.image = imageRef} */}
            {/*   id="source" */}
            {/*   style={{width:'100%', height: '100%',display: 'none'}} */}
            {/*   className="oval-5" */}
            {/*   src={this.state.profileSignedURL} /> */}
            {/* <canvas */}
            {/*   ref={canvas => { */}
            {/*     this.canvas = canvas; */}
            {/*     canvas && (this.ctx = canvas.getContext('2d')) */}
            {/*   }} */}
            {/*   width={croppedAreaPixels.width} */}
            {/*   height={croppedAreaPixels.height} */}
            {/* /> */}
            {/* <Cropper */}
            {/*   image={this.state.profileSignedURL} */}
            {/*   crop={crop} */}
            {/*   zoom={zoom} */}
            {/*   aspect={1} */}
            {/*   showGrid={false} */}
            {/*   cropShape="round" */}
            {/*   cropSize={{width:100,height:100}} */}
            {/*   onCropChange={this.onCropChange} */}
            {/*   onCropComplete={this.onCropComplete} */}
            {/*   onZoomChange={this.onZoomChange} */}
            {/*   onMediaLoaded={(mediaSize) => { */}
            {/*     this.onZoomChange(mediaSize.naturalHeight / mediaSize.naturalWidth) */}
            {/*   }} */}
            {/* /> */}
                 </>

                  :
            <img className="oval-5" src={oval5} />  }
             
             {!this.state.profileURL ?
            <div className="upload smart-layers-pointers ">
           
              <img className="shape-uBeRw7" src={shape} />
              <img className="shape-vFHiyd" src={shape2} />
              <img className="path" src={path} />
           
                  
            </div> : null}
             </label>
</div>
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
