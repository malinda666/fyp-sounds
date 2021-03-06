import './app.css';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterConfig from  './navigation/RouterConfig'
import React, {useEffect, useState} from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
   const [profileImage, setProfileImage] = useState(null);
    const userHasAuthenticated = (authenticated) => {
            setIsAuthenticated(authenticated);       
      };

 const childProps = {
        isAuthenticated: isAuthenticated,
        userHasAuthenticated: userHasAuthenticated,
      }
  return (
    <Router>
      <RouterConfig 
        isAuthenticated = {isAuthenticated} 
        userHasAuthenticated= {userHasAuthenticated}
        setProfileImage = {setProfileImage}
        profileImage = {profileImage}
      />
   </Router>
  ); 
}

export default App;
