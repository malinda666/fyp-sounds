import React from "react";
import './soundStep1.css'

export default class SoundForm1 extends React.Component {
   constructor(props) {
    super(props);

    this.state = {
      routePath: ''
    }
  }

  componentDidMount(){

    if(this.props.location.state){
        if(this.props.location.state.type === 'sound'){
        this.setState({routePath : '/soundStep2'});
      }
      else if(this.props.location.state.type === 'song'){
        this.setState({routePath : '/songStep1'});
      }
    }
    else{
      this.setState({routePath : '/soundStep2'});
    }

  }

  render() {
    const {
      oval,
      oval2,
      oval3,
      areYouTheOwnerOf,
      oval4,
      rectangle,
      rectangle2,
      yes,
      rectangle3,
      rectangle4,
      no,
      fypsoundslogoProps,
    } = this.props;

    return (
      <div className="soundform1">
        <div className="overlap-group-C61RwL">
          <img className="oval-4eduM0" src={oval} />
          <img className="oval-BJQsbv" src={oval2} />
          <img className="oval-6sb1qn" src={oval3} />
          <h1 className="are-you-the-owner-of sofiapro-normal-white-30px">{areYouTheOwnerOf}</h1>
          <img className="oval-ovOecM" src={oval4} />
          <div className="btn-yes nexticon animate-enter smart-layers-pointers " onClick={() => this.props.history.push({
                                                                                                  pathname :this.state.routePath,
                                                                                                  state: { coverImageURL : this.props.location.state.coverImageURL, albumcover: this.props.location.state.albumcover, title : this.props.location.state.title, email : this.props.location.state.email}
                                                                                                })}>
            <img className="rectangle-Zkpfmi" src={rectangle} />
        
              <img className="rectangle" src={rectangle2} />
         
            <div className="yes montserrat-semi-bold-white-20px">{yes}</div>
          </div>
          <div className="btn-no nexticon animate-enter smart-layers-pointers " onClick={() => this.props.history.push({
                                                                                                pathname : "/warn1",
                                                                                                state: { email : this.props.location.state.email}})}>
            <img className="rectangle-Zkpfmi" src={rectangle3} />
          
              <img className="rectangle" src={rectangle4} />
          
            <div className="no montserrat-semi-bold-white-20px">{no}</div>
          </div>
        </div>
        <div className="bar">
          <Fypsoundslogo {...fypsoundslogoProps} />
        </div>
      </div>
    );
  }
}


class Fypsoundslogo extends React.Component {
  render() {
    const { fypsoundsLogo } = this.props;

    return <div className="fypsoundslogo" style={{ backgroundImage: `url(${fypsoundsLogo})` }}></div>;
  }
}



