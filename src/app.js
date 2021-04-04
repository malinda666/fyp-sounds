import './app.css';
import { BrowserRouter as Router} from 'react-router-dom';
import RouterConfig from  './navigation/RouterConfig'
import React, {useEffect, useState, useRef} from 'react';

const ranges = [
  '\ud83c[\udf00-\udfff]', // U+1F300 to U+1F3FF
  '\ud83d[\udc00-\ude4f]', // U+1F400 to U+1F64F
  '\ud83d[\ude80-\udeff]'  // U+1F680 to U+1F6FF
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let main = useRef(null);
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
}, []);
    const userHasAuthenticated = authenticated => {
            setIsAuthenticated(authenticated);       
      };

    const isUserAuthenticated = () => {
      return isAuthenticated;
    }


    return (
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
