import './app.css';
import { BrowserRouter } from 'react-router-dom';
import RouterConfig from  './navigation/RouterConfig'

function App() {
  const childProps = {
    };

  return (
    <BrowserRouter>
      <RouterConfig childProps={childProps}/>
   </BrowserRouter>
  );
}

export default App;
