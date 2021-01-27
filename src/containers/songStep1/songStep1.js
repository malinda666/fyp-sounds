import React from "react";
import './songStep1.css';

export default class MusicForm2 extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
    }
  }
  
  render() {
    const {
      oval,
      oval2,
      oval3,
      oval4,
      rectangle,
      rectangle2,
      tiktok,
      rectangle3,
      rectangle4,
      allStores,
      yes,
      areYouTheOwnerOf,
      publishAudioTo,
      fypcopyProps,
    } = this.props;

    return (
      <div className="musicform2">
        <div className="overlap-group-C61RwL">
          <img className="oval-4eduM0" src={oval} />
          <img className="oval-BJQsbv" src={oval2} />
          <img className="oval-6sb1qn" src={oval3} />
          <img className="oval-ovOecM" src={oval4} />
        </div>
        <div className="container-center-horizontal">
          <div className="nexticon-copy- animate-enter smart-layers-pointers " onClick={()=>{
                                                                                this.props.history.push({
                                                                                pathname: '/songStep2',
                                                                                state: { store: 'tiktok', coverImageURL : this.props.location.state.coverImageURL, albumcover: this.props.location.state.albumcover, title : this.props.location.state.title, email : this.props.location.state.email}})
                                                                                }}>
            <img className="rectangle-C0bm8O" src={rectangle} />
         
              <img className="rectangle" src={rectangle2} />
      
            <div className="tik-tok montserrat-semi-bold-white-20px">{tiktok}</div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="nexticon-copy-2 animate-enter" onClick={()=>{
                                                                                this.props.history.push({
                                                                                pathname: '/songStep2',
                                                                                state: { store: 'allStores', coverImageURL : this.props.location.state.coverImageURL, albumcover: this.props.location.state.albumcover, title : this.props.location.state.title, email : this.props.location.state.email}})
                                                                                }}>
            <img className="rectangle-C0bm8O" src={rectangle3} />
            
              <img className="rectangle" src={rectangle4} />
          
            <div className="all-stores montserrat-semi-bold-white-20px">{allStores}</div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="btn-yes nexticon-copy- animate-enter2 smart-layers-pointers ">
            <div className="yes montserrat-light-white-20px">{yes}</div>
          </div>
        </div>
        <Fypcopy {...fypcopyProps} />
        <div className="container-center-horizontal">
          <h1 className="are-you-the-owner-of sofiapro-normal-white-30px">{areYouTheOwnerOf}</h1>
        </div>
        <div className="container-center-horizontal">
          <div className="publish-audio-to sofiapro-normal-white-30px">{publishAudioTo}</div>
        </div>
      </div>
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


