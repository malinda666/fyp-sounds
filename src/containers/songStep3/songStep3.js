import React from "react";
import './songStep3.css'

export default class MusicForm4 extends React.Component {
   constructor(props) {
    super(props);
     
    }
  render() {
    const {
      oval,
      oval2,
      oval3,
      oval4,
      rectangle,
      rectangle2,
      yes,
      rectangle3,
      rectangle4,
      no,
      isThisContentExpl,
      fypcopyProps,
    } = this.props;

    return (
      <div className="musicform4">
        <img className="oval-C61RwL" src={oval} />
        <img className="oval-VMr6Om" src={oval2} />
        <img className="oval-mzXdH9" src={oval3} />
        <img className="oval-QxM5SU" src={oval4} />
        <div className="nexticon-copy-3 animate-enter smart-layers-pointers " onClick={()=>{
                                                                                this.props.history.push({
                                                                                pathname: '/songStep4',
                                                                                state: { status: 'yes',
                                                                                store: this.props.location.state.store, 
                                                                                coverImageURL : this.props.location.state.coverImageURL, 
                                                                                albumcover: this.props.location.state.albumcover,
                                                                                title : this.props.location.state.title, 
                                                                                email : this.props.location.state.email,
                                                                                featuringArtist : this.props.location.state.featuringArtist,
                                                                                producerName: this.props.location.state.producerName,
                                                                                creatorName: this.props.location.state.creatorName,
                                                                                authorName: this.props.location.state.authorName}})
                                                                                }}>
          <img className="rectangle-nRQRPx" src={rectangle} />
          
            <img className="rectangle" src={rectangle2} />
       
          <div className="yes montserrat-semi-bold-white-20px">{yes}</div>
        </div>
        <div className="nexticon-copy-2 animate-enter" onClick={()=>{
                                                                                this.props.history.push({
                                                                                pathname: '/songStep4',
                                                                                state: { status: 'no',
                                                                                store: this.props.location.state.store, 
                                                                                coverImageURL : this.props.location.state.coverImageURL, 
                                                                                albumcover: this.props.location.state.albumcover,
                                                                                title : this.props.location.state.title, 
                                                                                email : this.props.location.state.email,
                                                                                featuringArtist : this.props.location.state.featuringArtist,
                                                                                producerName: this.props.location.state.producerName,
                                                                                creatorName: this.props.location.state.creatorName,
                                                                                authorName: this.props.location.state.authorName}})
                                                                                }}>
          <img className="rectangle-nRQRPx" src={rectangle3} />
          
            <img className="rectangle" src={rectangle4} />
       
          <div className="no montserrat-semi-bold-white-20px">{no}</div>
        </div>
        <h1 className="is-this-content-expl sofiapro-normal-white-30px">{isThisContentExpl}</h1>
        <Fypcopy {...fypcopyProps} />
      </div>
    );
  }
}


class Fypcopy extends React.Component {
  render() {
    const { fypsoundsLogo } = this.props;

    return <div className="fypsoundslogo" style={{ backgroundImage: `url(${fypsoundsLogo})` }}></div>;
  }
}



