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
      loading : false
    }
   }

   componentDidMount(){
      if(this.props.location.state.type == 'sound'){
        this.setState({ returnURL : '/soundReview'});
      }
      else {
        this.setState({ returnURL : '/musicReview'});
      }
   }

   save = () =>{
     if(this.props.location.state.type === 'sound')
        this.saveSoundData();
     else
        this.saveSongData();

   }

  saveSongData = () => {
    let data = {
      email : this.props.location.state.email,
      creator : this.props.location.state.creatorName,
      title : this.props.location.state.title,
      category : this.props.location.state.category,
      content : this.props.location.state.status,
      stores : this.props.location.state.store,
      audioFileURL : this.props.location.state.audiofile,
      coverURL : this.props.location.state.albumcover,
      type : this.props.location.state.type,
      author : this.props.location.state.authorName,
      producer : this.props.location.state.producerName,
      featured_artist : this.props.location.state.featuringArtist,      
      albumcover: this.props.location.state.albumcover,
      audiofile : this.props.location.state.audiofile,
      status : 'draft'
     }
      this.setState({ loading: true });
     creativeManagementService.create(data).then((result) => {
        if (result.status == 200) 
        {        
            this.props.history.push({
                 pathname:'/warn5',
                 state: {
                   email : this.props.location.state.email
                 }
               })       
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

  saveSoundData = () => {
    let data = {
     email : this.props.location.state.email,
     creator : this.props.location.state.name,
     title : this.props.location.state.title,
     category : this.props.location.state.category,
     content : this.props.location.state.content == 'yes' ? 'Explicit' : 'NonExplicit',
     stores : this.props.location.state.stores,
     audioFileURL : this.props.location.state.audiofile,
     coverURL : this.props.location.state.albumcover,
     type : this.props.location.state.type,
     albumcover: this.props.location.state.albumcover,
     audiofile : this.props.location.state.audiofile,
     status : 'draft'
    }
     this.setState({ loading: true });
    creativeManagementService.create(data).then((result) => {
       if (result.status == 200) 
       {        
         neosAPIManagementService.create(data,'sound').then((res) => {
            if(res.status == 200){
                this.props.history.push({
                    pathname:'/warn5',
                    state: {
                      email : this.props.location.state.email
                    }
                  })
                
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
                                                              this.props.history.push({
                                                                pathname: this.state.returnURL,
                                                                state: { 
                                                                  name: this.props.location.state.name, 
                                                                  coverImageURL : this.props.location.state.coverImageURL, 
                                                                  title : this.props.location.state.title, 
                                                                  creativeURL: this.props.location.state.creativeURL,
                                                                  category: this.props.location.state.category ? this.props.location.state.category : '',
                                                                  content: this.props.location.state.content == 'Explicit' ? 'yes' : 'no',
                                                                  email : this.props.location.state.email,
                                                                  fileName : this.props.location.state.fileName,
                                                                }
                                                                  });
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


