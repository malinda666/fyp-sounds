import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import Cookies from "js-cookie";

axios.interceptors.request.use(
  request => {
    if(!request.url.includes('UserPoolData') && !request.url.includes('Profile') && !request.url.includes('SignIn') && !request.url.includes('SignUp') && !request.url.includes('ForgetPassword')
        && !request.url.includes('ValidateUser') && !request.url.includes('ResetPassword') && !request.url.includes('s3.amazonaws.com') ){
      //request.headers['Authorization'] = 'Bearer ' + localStorage.getItem('auth') ? JSON.parse(localStorage.getItem('auth')).id_token : ''
      request.headers['Authorization'] = `Bearer ${Cookies.get('id_token')}`
    }
    return request;
  },
  error => {
    return Promise.reject(error);
  }
)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


