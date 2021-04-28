import './app.css';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterConfig from  './navigation/RouterConfig'
import React, {useEffect, useState, useRef} from 'react';
import axios from 'axios';
import HashLoader from 'react-spinners/HashLoader';
import LoadingOverlay from "react-loading-overlay";
import Cookies from "js-cookie";
import config from "./config/index";

// const ranges = [
//   '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
//   '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
//   '\ud83d[\ude80-\udeff]'  // U+1F680 to U+1F6FF
// ];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  let main = useRef(null);
  useEffect(() => {
  if(localStorage.getItem('auth')){
    //let data = JSON.parse(localStorage.getItem('auth'));
    if(Cookies.get("id_token")){
      setIsAuthenticated(true);
    }
    else{
      setIsAuthenticated(false);
    }
  }
  else {
    setIsAuthenticated(false);

  }
}, []);

  useEffect(() => {
    const wh = window.innerHeight;
    const setHeight = () => {
      document.documentElement.style.setProperty('--docHeight',`${wh}px`)
    }
    window.addEventListener('resize',()=>setHeight())
    setHeight()
  }, [])
    const userHasAuthenticated = authenticated => {
            setIsAuthenticated(authenticated);       
      };

    // const isUserAuthenticated = () => {
    //   return isAuthenticated;
    // }

    // Response interceptors
    axios.interceptors.response.use(response => {
      return response;
  }, err => {
      if (err.response.status === 401)
      {
        window.location.href = '/login';
        // return refreshToken() .then(response => {
    
        //   // update currUser with new access_token      
        //   // Set default headers to have authorization the access token as authorization for future requests      
        //   // Get the original that failed due to 401 and resend it      
        //   // with the new access token      
        //   const config = error.config;      
        //   config.headers.Authorization = "Bearer " + response.data.idToken.jwtToken;      
        //   // Resending original request      
        //   return new Promise((resolve, reject) => {      
        //     my_app.request(config)      
        //     .then(response => { resolve(response); })      
        //     .catch(error => { reject(error); });      
        //     });    
        //   }).catch(error => { 
        //     // just logout() if anything goes wrong});

        // }); 
        
      }
      else if(err.response.status === 403){
        window.location.href = '/login';      
      }

      else{
        return Promise.reject(err);
      }
      
  });

  // const refreshToken = () => {
  //   return axios.post(config.AWS_API + 'SignIn', {
  //                     'refreshToken': Cookies.get("refreshtoken"), 'Username' : JSON.parse(localStorage.get('auth')).email
  //                 }).then(response => {
  //                   // let inFiftyMinutes = new Date(new Date().getTime() + 50 *60* 100);
  //                   // Cookies.set("id_token", response.data.idToken.jwtToken, {expires : inFiftyMinutes});
  //                   // Cookies.set("refreshtoken", response.data.refreshToken, {expires : 1 });
  //                   // err.response.config.headers['Authorization'] = 'Bearer ' + response.data.idToken.jwtToken;
  //                   return response;
  //                 }).catch(error => {
  //                     //this.router.push('/login');
  //                     return Promise.reject(error);
  //                 })
  // }

//   const createAxiosResponseInterceptor = () => {
//     const interceptor = axios.interceptors.response.use(response => {
//       return response
//     },
//         err => {
//           if (err.response.status === 401)
//           {
//             axios.interceptors.response.eject(interceptor);

//             return axios.post(config.AWS_API + 'SignIn', {
//                 'refreshToken': Cookies.get("refreshtoken"), 'Username' : JSON.parse(localStorage.get('auth')).email
//             }).then(response => {
//               let inFiftyMinutes = new Date(new Date().getTime() + 50 *60* 100);
//               Cookies.set("id_token", response.data.idToken.jwtToken, {expires : inFiftyMinutes});
//               Cookies.set("refreshtoken", response.data.refreshToken, {expires : 1 });
//               err.response.config.headers['Authorization'] = 'Bearer ' + response.data.idToken.jwtToken;
//               return axios(err.response.config);
//             }).catch(error => {
//               Cookies.set("id_token", '');
//               Cookies.set("refreshtoken", '');
//                 this.router.push('/login');
//                 return Promise.reject(error);
//             }).finally(createAxiosResponseInterceptor);
//           }
//           else if(err.response.status === 403){
    
          
//           }
    
//           else{
//             return Promise.reject(err);
//           }
           
//         }
//     );
// }

//   axios.interceptors.response.use(createAxiosResponseInterceptor);


// let isRefreshing = false;
//  let failedQueue = [];

//        const processQueue = (error, token = null) => {
//             failedQueue.forEach(prom => {
//                 if (error) {
//                     prom.reject(error);
//                 } else {
//                     prom.resolve(token);
//                 }
//             });

//             failedQueue = [];
//         };

//         axios.interceptors.response.use(
//             response => {
//                 return response;
//             },
// err => {
//                 const originalRequest = err.config;

//                 if (err.response.status === 401 && !originalRequest._retry) {
//                     if (isRefreshing) {
//                         return new Promise(function(resolve, reject) {
//                             failedQueue.push({ resolve, reject });
//                         })
//                             .then(token => {
//                                 originalRequest.headers['Authorization'] = 'Bearer ' + token;
//                                 return axios(originalRequest);
//                             })
//                             .catch(err => {
//                                 return Promise.reject(err);
//                             });
//                     }

//                     originalRequest._retry = true;
//                     isRefreshing = true;

//                     return new Promise(function(resolve, reject) {
//                         axios
//                             .post(config.AWS_API + 'SignIn', {
//                                               'refreshToken': Cookies.get("refreshtoken"), 'Username' : JSON.parse(localStorage.get('auth')).email
//                                           })
//                             .then(({ data }) => {
//                               let inFiftyMinutes = new Date(new Date().getTime() + 50 *60* 100);
//                               Cookies.set("id_token", data.idToken.jwtToken, {expires : inFiftyMinutes});
//                               Cookies.set("refreshtoken", data.refreshToken, {expires : 1 });
//                                 axios.defaults.headers.common['Authorization'] = 'Bearer ' + data.idToken.jwtToken;
//                                 originalRequest.headers['Authorization'] = 'Bearer ' + data.idToken.jwtToken;
//                                 processQueue(null, data.idToken.jwtToken);
//                                 resolve(axios(originalRequest));
//                             })
//                             .catch(err => {
//                                 processQueue(err, null);
//                                 //store.dispatch(showMessage({ message: 'Expired Token' }));

//                                 reject(err);
//                             })
//                             .then(() => {
//                                 isRefreshing = false;
//                             });
//                     });
//                 }

//                 return Promise.reject(err);
//             }
        // );

    return (
     isAuthenticated == null ?  
     <LoadingOverlay
     active={isAuthenticated == null ? true : false}
     spinner={<HashLoader color={"#f24b76"} size={100}/>}
      > 
      </LoadingOverlay>:  
   <Router>
      <RouterConfig  
        ref={el=>main=el}
        isAuthenticated = {isAuthenticated}
        userHasAuthenticated= {userHasAuthenticated}
      />
   </Router>
     
    ); 
}

export default App;
