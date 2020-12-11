import { Switch } from 'react-router-dom';
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import Login from "../containers/login/login";
import Home from "../containers/home/home";
import ForgotPassword from "../containers/forgotPassword/forgotPassword"
import FAQ from "../containers/faq/faq"
import About from "../containers/about/about"
import Contact from "../containers/contact/contact"
import Policy from "../containers/policy/policy"
import Dashboard from "../containers/dashboard/dashboard"

const RouterConfig = ({ childProps }) => 
<Switch>
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/forgotPassword" exact component={ForgotPassword} props={childProps} />
    <UnauthenticatedRoute path="/faq" exact component={FAQ} props={childProps} />
    <UnauthenticatedRoute path="/about" exact component={About} props={childProps} />
    <UnauthenticatedRoute path="/contact" exact component={Contact} props={childProps} />
    <UnauthenticatedRoute path="/dashboard" exact component={Dashboard} props={childProps} />
    <UnauthenticatedRoute path="/policy" exact component={Policy} props={childProps} />
</Switch>;

export default RouterConfig;