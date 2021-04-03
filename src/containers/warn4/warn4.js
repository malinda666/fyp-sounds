import React from "react";
import './warn4.css'
import creativeManagementService from '../../services/creativeManagementService';
import neosAPIManagementService from '../../services/neosAPIManagementService';
import HashLoader from 'react-spinners/HashLoader'
import LoadingOverlay from "react-loading-overlay";

export default class Warn4 extends React.Component {
  constructor(props) {     
    super(props);
    this.state = {
      returnURL : '',
      loading : false,
      data: null,
      auth: null
    }
   }

   componentDidMount(){
     if(localStorage.getItem('data')){
       let data = JSON.parse(localStorage.getItem('data'));
        this.setState({data : data });
     
      }
        if(localStorage.getItem('auth')){
       let auth = JSON.parse(localStorage.getItem('auth'));
        this.setState({auth : auth });
      }
      
   }

   save = () =>{
     if(this.state.data.type === 'sound')
        this.saveSoundData();
     else
        this.saveSongData();

   }

  saveSongData = () => {
    let data = {
      email : this.state.auth.email,
      creator : this.state.data.name,
      title : this.state.data.title,
      category : this.state.data.category,
      content : this.state.data.content,
      stores : this.state.data.stores,
      audioFileURL : this.state.data.audiofile,
      coverURL : this.state.data.albumcover,
      type : this.state.data.type,
      author : this.state.data.authorName,
      producer : this.state.data.producerName,
      featured_artist : this.state.data.featuringArtist,      
      albumcover: this.state.data.albumcover,
      finalImage : this.state.data.finalImage,
      thumbnailImage : this.state.data.thumbnailImage,
      audiofile : this.state.data.audiofile,
      fileName : this.state.data.fileName,
       id : this.state.data.id,
      fyp_status : 'pending',
      dashgo_status : 'draft_complete'
     }
    this.setState({ loading: true });
    if(this.state.data != '' && this.state.data.id != '' && this.state.data.id != null){
      creativeManagementService.updateCreative( data, 'songUpdate')
        .then(res => {
          if(res.status === 200){
             localStorage.removeItem('data');
                this.props.history.push('/warn5');
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
          localStorage.removeItem('data');
            this.props.history.push('/warn5');       
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

  saveSoundData = () => {
    let data = {
    email : this.state.auth.email,
      creator : this.state.data.name,
      title : this.state.data.title,
      category : this.state.data.category,
      content : this.state.data.content,
      stores : this.state.data.stores,
      audioFileURL : this.state.data.audiofile,
      coverURL : this.state.data.albumcover,
      type : this.state.data.type,
      albumcover: this.state.data.albumcover,
      finalImage : this.state.data.finalImage,
      thumbnailImage : this.state.data.thumbnailImage,
      audiofile : this.state.data.audiofile,
      audiofile : this.state.data.audiofile,
      id : this.state.data.id,
      fileName : this.state.data.fileName,
     fyp_status : 'pending',
     dashgo_status : 'draft_complete'
    }
this.setState({ loading: true });
    if(this.state.data != '' && this.state.data.id != '' && this.state.data.id != null){
        creativeManagementService.updateCreative(data, 'soundUpdate')
        .then(res => {
          if(res.status === 200){
             localStorage.removeItem('data');
                this.props.history.push('/warn5');
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
         neosAPIManagementService.create(data,'sound').then((res) => {
            if(res.status == 200){
              localStorage.removeItem('data');
                this.props.history.push('/warn5');
                
            }
            else{
              //toast.error('ERROR : Unable to upload document');
              this.setState({ loading: false });
            }
         }).catch((error) => {
        this.setState({ loading: false });
        //// toast.error('ERROR ' + JSON.stringify(error));
      });        
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
  render() {
    const {
      oval,
      oval2,
      oval3,
      oval4,
      rectangle,
      rectangleCopy,
      spanText,
      spanText2,
      Ud83EUdd13,
      rectangle2,
      rectangle3,
      accept,
      rectangle4,
      rectangle5,
      no,
      byClickingU201Caccept,
      fypcopyProps,
    } = this.props;

    return (
      <LoadingOverlay
      active={this.state.loading}
      spinner={<HashLoader color={"#f24b76"} size={100}/>}
    >
      <div className="warn4">
        <div className="bg-image-wrap">
          <div className="bg-image1" style={{ backgroundImage: `url(${oval})` }} ></div>
          <div className="bg-image2" style={{ backgroundImage: `url(${oval2})` }} ></div>
          <div className="bg-image3" style={{ backgroundImage: `url(${oval3})` }}></div>
          <div className="bg-image4" style={{ backgroundImage: `url(${oval4})` }}></div>
          <img className="rectangle-IZxxJF" src={rectangle} />
          <img className="rectangle-IZxxJF" src={rectangleCopy} />
        </div>
        <div className="container-center-horizontal">
          <div className="view-terms-here montserrat-light-white-14px">
            <span className="span1-mpB3ZZ">{spanText}</span>
            <span className="span2-mpB3ZZ" onClick={() => {
                                                              this.props.history.push({
                                                                pathname: '/terms'
                                                                  });
                                                              }}>{spanText2}</span>
          </div>
        </div>
        <div className="container-center-horizontal">
          <h1 className="ud83eudd13 applecoloremoji-normal-white-60px">{Ud83EUdd13}</h1>
        </div>
        <div className="container-center-horizontal">
          <div className="group">
            <div className="nexticon-copy-3 animate-enter smart-layers-pointers " onClick={this.save.bind(this)}>
              <img className="rectangle-0Ttflx" src={rectangle2} />
              <a >
                <img className="rectangle" src={rectangle3} />
              </a>
              <div className="accept montserrat-semi-bold-white-20px">{accept}</div>
            </div>
           
              <div className="nexticon-copy-2 animate-enter" onClick={() => {
                                                              this.props.history.push( '/dashboard');
                                                              }}>
                <img className="rectangle-0Ttflx" src={rectangle4} />
                <a >
                  <img className="rectangle" src={rectangle5} />
                </a>
                <div className="no montserrat-semi-bold-white-20px">{no}</div>
              </div>
           
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="by-clickin-201caccept sofiapro-normal-white-30px">{byClickingU201Caccept}</div>
        </div>
        <Fypcopy {...fypcopyProps} />
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


