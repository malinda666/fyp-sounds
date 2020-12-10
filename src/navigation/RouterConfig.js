import { Switch } from 'react-router-dom';
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Login from "../containers/login/login";
import Home from "../containers/home/home";
import ForgotPassword from "../containers/forgotPassword/forgotPassword"
import FAQ from "../containers/faq/faq"
import About from "../containers/about/about"

const RouterConfig = ({ childProps }) => 
<Switch>
    <UnauthenticatedRoute path="/" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/home" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/forgotPassword" exact component={ForgotPassword} props={childProps} />
    <UnauthenticatedRoute path="/faq" exact component={FAQ} props={childProps} />
    <UnauthenticatedRoute path="/about" exact component={About} props={childProps} />
</Switch>;

export default RouterConfig;