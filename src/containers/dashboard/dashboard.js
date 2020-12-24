import React from "react";
import './dashboard.css'
import ImageUploader from 'react-images-upload';
import fileManagementService from "../../services/fileManagementService";
import uploadManagementService from "../../services/uploadManagementService";

export default class Soundsnewuser extends React.Component {

   constructor() {
        super({})
        this.inputOpenFileRef = React.createRef()
        this.state = {
          loading : false,          
          overlayText: 'Uploading your file ...',
        }
    }

    showOpenFileDlg = () => {
        this.inputOpenFileRef.current.click()
    }

  uploadProfileImage = () => {
  console.log(this.uploadInput.files[0]);
  let file = this.uploadInput.files[0]
  let s3Path = this.state.user_dir + '/profile/' + file.name;
  
  fileManagementService
      .uploadFile(s3Path, file.type)
      .then((response) => {
        if(response.status == 200){
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
            if (result.status == 200) {
              documentAPI
                .createDocument(
                  url,
                  this.state.type != '' ? this.state.type : 'contract',
                  this.state.section,
                  this.state.documentName != ''
                    ? this.state.documentName
                    : 'Contract'
                )
                .then((documentResult) => {
                  if (documentResult.status == 200) {
                    this.setState({ fileName: '' });
                    this.setState({ uploadFileName: '' });
                    this.setState({ loading: false });
                    this.setState({ open: true });
                    toast.success(popupMessage);
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
        toast.error(JSON.stringify(error));
      });


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
      <div className="soundsnewuser">
        <div className="sound-5 smart-layers-pointers "></div>
        <div className="sound-5-copy smart-layers-pointers "></div>
        <div className="container-center-horizontal">
          <div className="buttons">
            <div className="sounds-Gt7Q7B">
              <h1 className="ud83cudfb5 applecoloremoji-normal-granite-gray-30px">{Ud83CUdfb5}</h1>
              <div className="sounds-EiSkUu sfprodisplay-normal-black-15px">{sounds}</div>
              <div className="rectangle-3"></div>
            </div>
            <div className="trends-Gt7Q7B smart-layers-pointers ">
              <div className="trends-45jQMT sfprodisplay-regular-normal-mountain-mist-15px">{trends}</div>
              <div className="ud83dudd25 applecoloremoji-normal-granite-gray-30px">{Ud83DUdd25}</div>
            </div>
            <div className="earnings-Gt7Q7B smart-layers-pointers ">
              <div className="earnings-pxqN5N sfprodisplay-regular-normal-mountain-mist-15px">{earnings}</div>
              <div className="ud83dudcb0 applecoloremoji-normal-granite-gray-30px">{Ud83DUdcb0}</div>
            </div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="new-sound-button animate-enter smart-layers-pointers " onClick={() => {this.props.history.push('/newSound')}}>
            <img className="rectangle" src={rectangle} />
            <div className="new-sound montserrat-semi-bold-white-20px">{NewSound}</div>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="upload-your-first-so montserrat-semi-bold-violet-red-25px">
            <span className="span1-SsBuiu">{spanText}</span>
            <span className="span2-SsBuiu">{spanText2}</span>
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="group">
            <img className="path-3" src={path3} />
            <img className="path-3-copy" src={path3Copy} />
            
            <img className="oval-5" src={oval5} />
            <div className="upload smart-layers-pointers ">
              <img className="shape-uBeRw7" src={shape} />
              <img className="shape-vFHiyd" src={shape2} />
              <img className="path" src={path} />
               <input
             className="dropzone"
                              type='file'
                              name='img_logo'
                              ref={(ref) => {
                                this.uploadInput = ref;
                              }}
                              onChange={this.uploadProfileImage.bind(this)}
                            />
            </div>
            <Settingiconwhite {...settingiconwhiteProps} />
          </div>
        </div>
        <div className="container-center-horizontal">
          <div className="footer">
            <div className="overlap-group">
              <img className="oval" src={oval} />
              <div className="group-5">
                <div className="container-center-horizontal">
                  <p className="x montserrat-semi-bold-white-14px">{label1}</p>
                </div>
                <About {...aboutProps} />
                <div className="container-center-horizontal">
                  <div className="faq montserrat-semi-bold-white-14px">{faq}</div>
                </div>
                <div className="container-center-horizontal">
                  <div className="contact montserrat-semi-bold-white-14px">{contact}</div>
                </div>
                <div className="privacy-policy montserrat-semi-bold-white-14px">{privacyPolicy}</div>
              </div>
            </div>
            <Fypsoundslogo {...fypsoundslogoProps} />
            <div className="container-center-horizontal">
              <p className="copyright--51-2021-al montserrat-normal-white-13px">{copyright2512021Al}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


class Settingiconwhite extends React.Component {
  render() {
    const { shape } = this.props;

    return (
      <div className="settingiconwhite-NOXmfT">
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
      <div className="container-center-horizontal">
        <div className="about-IlweIA">
          <a href="/about">
            <div className="about-qv0Ulj montserrat-semi-bold-white-14px">{about}</div>
          </a>
        </div>
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
