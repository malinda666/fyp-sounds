import React from "react";
import './changePassword.css';

export default class Password extends React.Component {

  constructor(){
    super(this.props);
    Array.from(document.querySelectorAll("input")).forEach(
      input => (input.value = "")
    );
  }

  render() {
    const {
      password,
      nextIcon,
      save,
      backChevron,
      spanText,
      spanText2,
      spanText3,
      spanText4,
      spanText5,
      IncorrectCodeChe,
      clearCacheCopyProps,
      clearCacheCopy2Props,
      clearCacheCopy3Props,
    } = this.props;

    return (
      <form className="password" name="form1" action="form1" method="post">
        <div className="container-center-horizontal">
          <h1 className="password montserrat-bold-rose-pearl-24px">{password}</h1>
        </div>
        <div className="container-center-horizontal">
          <a href="javascript:SubmitForm('form1')" className="full-height-a">
            <div className="nexticon" style={{ backgroundImage: `url(${nextIcon})` }}>
              <div className="save montserrat-semi-bold-white-20px">{save}</div>
            </div>
          </a>
        </div>
        <div className="container-center-horizontal">
          <div className="top-bar">
            <div className="back-icon">
              <img className="back-chevron" src={backChevron} />
            </div>
          </div>
        </div>
        <ClearCacheCopy {...clearCacheCopyProps} />
        <ClearCacheCopy {...clearCacheCopy2Props} className="clear-cache-copy-2" />
        <ClearCacheCopy {...clearCacheCopy3Props} className="clear-cache-copy-3" />
        <div className="container-center-horizontal">
          <div className="password-policy">
            <p className="password-must-includ montserrat-bold-gravel-14px">
              <span className="span1-RxjuOq">{spanText}</span>
              <span className="span2-RxjuOq">{spanText2}</span>
              <span className="span3-RxjuOq">{spanText3}</span>
            </p>
          </div>
        </div>
        <div className="container-center-horizontal">
          <p className="didnu2019t-ceive-clic montserrat-light-gravel-14px">
            <span className="span1-LBLLyx">{spanText4}</span>
            <span className="span2-LBLLyx">{spanText5}</span>
          </p>
        </div>
        <div className="container-center-horizontal">
          <p className="incorrect-code-che montserrat-light-red-14px">{IncorrectCodeChe}</p>
        </div>
      </form>
    );
  }
}


class ClearCacheCopy extends React.Component {
  render() {
    const { oldPassword, inputName, inputType, inputPlaceholder, inputRequired, className } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className={`clear-cache-copy ${className || ""}`}>
          <div className="old-password sfprodisplay-regular-normal-granite-gray-20px">{oldPassword}</div>
          <input
            className="text sfprodisplay-regular-normal-pink-swan-15px"
            name={inputName}
            placeholder={inputPlaceholder}
            type={inputType}
            required={inputRequired}
          />
        </div>
      </div>
    );
  }
}
