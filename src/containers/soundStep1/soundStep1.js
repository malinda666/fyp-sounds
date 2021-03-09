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

    if(localStorage.getItem('data')){
      let data = JSON.parse(localStorage.getItem('data'));
        if(data){
        if(data.type === 'sound'){
        this.setState({routePath : '/soundStep2'});
      }
      else if(data.type === 'song'){
        this.setState({routePath : '/songStep1'});
      }
    }
    else{
      this.setState({routePath : '/soundStep2'});
    }
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
          <img className="oval-ovOecM" src={oval4} />
          
        </div>
        <div className="heading">
           <h1 className="are-you-the-owner-of sofiapro-normal-white-30px">{areYouTheOwnerOf}</h1>

        </div>
        <div className="btn-group">
          <div className="btn-yes nexticon animate-enter smart-layers-pointers " onClick={() => this.props.history.push(this.state.routePath)}>
            <img className="rectangle-Zkpfmi" src={rectangle} />
        
              <img className="rectangle" src={rectangle2} />
         
            <div className="yes montserrat-semi-bold-white-20px">{yes}</div>
          </div>
          <div className="btn-no nexticon animate-enter smart-layers-pointers " onClick={() => this.props.history.push("/warn1")}>
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



