import React from "react";
import './settings.css'

export default class Settings extends React.Component {
  render() {
    const {
      backChevron,
      settings,
      name,
      charlieDU2019Amelio,
      birthday,
      inputName,
      inputType,
      inputPlaceholder,
      inputRequired,
      inputName2,
      inputType2,
      inputPlaceholder2,
      inputRequired2,
      inputName3,
      inputType3,
      inputPlaceholder3,
      inputRequired3,
      password,
      inputName4,
      inputType4,
      inputPlaceholder4,
      inputRequired4,
      paypal,
      inputName5,
      inputType5,
      inputPlaceholder5,
      inputRequired5,
      shape,
      logout,
      backChevron2,
      nextIcon,
      save,
      clearCacheCopyProps,
      clearCacheCopy2Props,
    } = this.props;

    return (
      <form className="settings" name="form1" action="form1" method="post">
        <div className="auto-flex-C61RwL">
          <div className="top-bar">
            <div className="back-icon">
              <img className="back-chevron-S8W5J0" src={backChevron} />
            </div>
          </div>
          <h1 className="settings montserrat-bold-rose-pearl-24px">{settings}</h1>
        </div>
        <div className="clear-cache-copy-C61RwL">
          <div className="name sfprodisplay-regular-normal-granite-gray-20px">{name}</div>
          <div className="charlie-du-019-amelio sfprodisplay-regular-normal-pink-swan-15px">{charlieDU2019Amelio}</div>
        </div>
        <div className="clear-cache-copy-VMr6Om">
          <div className="birthday sfprodisplay-regular-normal-granite-gray-20px">{birthday}</div>
          <input
            className="text sfprodisplay-regular-normal-pink-swan-15px"
            name={inputName}
            placeholder={inputPlaceholder}
            type={inputType}
            required={inputRequired}
          />
          <input
            className="text sfprodisplay-regular-normal-pink-swan-15px"
            name={inputName2}
            placeholder={inputPlaceholder2}
            type={inputType2}
            required={inputRequired2}
          />
          <input
            className="text sfprodisplay-regular-normal-pink-swan-15px"
            name={inputName3}
            placeholder={inputPlaceholder3}
            type={inputType3}
            required={inputRequired3}
          />
        </div>
        <ClearCacheCopy {...clearCacheCopyProps} />
        <ClearCacheCopy {...clearCacheCopy2Props} />
        <div className="clear-cache-copy-Brk1wZ">
          <div className="password sfprodisplay-regular-normal-granite-gray-20px">{password}</div>
          <input
            className="text-9XXxfm sfprodisplay-regular-normal-pink-swan-15px"
            name={inputName4}
            placeholder={inputPlaceholder4}
            type={inputType4}
            required={inputRequired4}
          />
        </div>
        <div className="clear-cache">
          <div className="rectangle-19-copy"></div>
          <div className="rectangle-19-copy"></div>
          <div className="paypal sfprodisplay-regular-normal-granite-gray-20px">{paypal}</div>
          <input
            className="text sfprodisplay-regular-normal-pink-swan-15px"
            name={inputName5}
            placeholder={inputPlaceholder5}
            type={inputType5}
            required={inputRequired5}
          />
          <img className="shape" src={shape} />
        </div>
        <div className="clear-cache">
          <div className="rectangle-19-copy"></div>
          <div className="rectangle-19-copy"></div>
          <div className="logout sfprodisplay-regular-normal-granite-gray-20px">{logout}</div>
          <a >
            <div className="group">
              <img className="back-chevron-1VxUKx" src={backChevron2} />
              <div className="rectangle-10 hidden "></div>
            </div>
          </a>
        </div>
        <a href="javascript:SubmitForm('form1')" className="align-self-flex-center">
          <div className="nexticon" style={{ backgroundImage: `url(${nextIcon})` }}>
            <div className="save montserrat-semi-bold-white-20px">{save}</div>
          </div>
        </a>
      </form>
    );
  }
}


class ClearCacheCopy extends React.Component {
  render() {
    const { email, inputName, inputType, inputPlaceholder, inputRequired } = this.props;

    return (
      <div className="clear-cache-copy-Brk1wZ">
        <div className="email sfprodisplay-regular-normal-granite-gray-20px">{email}</div>
        <input
          className="text-emailemailcom sfprodisplay-regular-normal-pink-swan-15px"
          name={inputName}
          placeholder={inputPlaceholder}
          type={inputType}
          required={inputRequired}
        />
      </div>
    );
  }
}


