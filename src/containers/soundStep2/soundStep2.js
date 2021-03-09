import React from "react";
import './soundStep2.css'

export default class SoundForm1b extends React.Component {
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
      yes2,
      areYouTheOwnerOf,
      isThisContentExpl,
      fypcopyProps,
    } = this.props;

    return (
      <div className="soundform1b">
        <div className="overlap-group-C61RwL">
          <img className="oval-4eduM0" src={oval} />
          <img className="oval-BJQsbv" src={oval2} />
          <img className="oval-6sb1qn" src={oval3} />
          <img className="oval-ovOecM" src={oval4} />
          
        </div>
        <div className="container-center-horizontal">
          <div className="nexticon-copy-3 animate-enter2 smart-layers-pointers ">
            <div className="yes-YdXrBc montserrat-light-white-20px">{yes2}</div>
          </div>
        </div>
        <Fypcopy {...fypcopyProps} />
        <div className="container-center-horizontal">
          <h1 className="are-you-the-owner-of sofiapro-normal-white-30px">{areYouTheOwnerOf}</h1>
        </div>
        <div className="container-center-horizontal">
          <div className="is-this-content-expl sofiapro-normal-white-30px">{isThisContentExpl}</div>
        </div>
        <div className="container-center-horizontal">
          <div className="btn-wrapper">
            <div className="nexticon-copy-1 animate-enter smart-layers-pointers" onClick={() => {
                                                                                        if(localStorage.getItem('data')){
                                                                                          let data = JSON.parse(localStorage.getItem('data'));
                                                                                          data.status = 'yes'
                                                                                          localStorage.setItem('data', JSON.stringify(data));
                                                                                          this.props.history.push('/soundStep3');
                                                                                        }                                                                                        
                                                                                        }}>
              <img className="rectangle-ViqXFw" src={rectangle} />
              
                <img className="rectangle" src={rectangle2} />
             
              <div className="yes-17Ixfr montserrat-semi-bold-white-20px">{yes}</div>
            </div>
            <div className="nexticon-copy-2 animate-enter smart-layers-pointers" onClick={() => {
                                                                if(localStorage.getItem('data')){
                                                                                            let data = JSON.parse(localStorage.getItem('data'));
                                                                                            data.status = 'no'
                                                                                            localStorage.setItem('data', JSON.stringify(data));
                                                                                            this.props.history.push('/soundStep3');
                                                                                          }       
                                                                }}>
              <img className="rectangle-ViqXFw" src={rectangle3} />
             
                <img className="rectangle" src={rectangle4} />
       
              <div className="no montserrat-semi-bold-white-20px">{no}</div>
          </div>
          </div>
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

