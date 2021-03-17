import './app.css';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterConfig from  './navigation/RouterConfig'
import React, {useEffect, useState} from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
  if(localStorage.getItem('auth')){
    let data = JSON.parse(localStorage.getItem('auth'));
    if(data.access_token){
      setIsAuthenticated(true);
    }
  }
  else {
    setIsAuthenticated(false);

  }
});
    const userHasAuthenticated = authenticated => {
            setIsAuthenticated(authenticated);       
      };


  return (
    <Router>
      <RouterConfig 
        isAuthenticated = {isAuthenticated}
        userHasAuthenticated= {userHasAuthenticated}
      />
   </Router>
  ); 
}

export default App;
