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
import Verification from "../containers/verification/verification"
import Settings from "../containers/settings/settings"
import ChangePassword from "../containers/changePassword/changePassword"
import Warn5 from '../containers/warn5/warn5'
import Terms from '../containers/terms/terms'
import Warn4 from '../containers/warn4/warn4'
import Warn2 from '../containers/warn2/warn2'
import Warn6 from '../containers/warn6/warn6'
import MusicReview from '../containers/musicReview/musicReview'
import NewSound from '../containers/newSound/newSound'
import SoundStep1 from '../containers/soundStep1/soundStep1'
import Warn1 from '../containers/warn1/warn1'
import SoundStep2 from '../containers/soundStep2/soundStep2'
import SoundStep3 from '../containers/soundStep3/soundStep3'
import SoundReview from '../containers/soundReview/soundReview'
import SongStep1 from '../containers/songStep1/songStep1'
import SongStep2 from '../containers/songStep2/songStep2'
import SongStep3 from '../containers/songStep3/songStep3'
import SongStep4 from '../containers/songStep4/songStep4'
import { AboutData, 
         FAQData, 
         LandingData, 
         LoginData, 
         VerificationData, 
         ContactData, 
         PrivacyPolicyData, 
         dashboardData, 
         RecoveryData,
         SettingsData,
         PasswordData,
         Warn5Data,
         TermsData,
         Warn4Data,
         MusicsubData,
         Warn2Data,
         Warn6Data,
         NewSoundData,
         SoundForm1Data,
         warn1Data,
         SoundForm1bData,
         SoundForm2bData,
         SoundsubData,
         MusicForm2Data,
         MusicForm3Data,
         MusicForm4Data,
         MusicForm5Data
        } from './CONSTANTS'

const RouterConfig = ({ childProps }) => 
<Switch>
    <UnauthenticatedRoute path="/login" exact component={Login} props={LoginData} />
    <UnauthenticatedRoute path="/" exact component={Home} props={LandingData} />
    <UnauthenticatedRoute path="/forgotPassword" exact component={ForgotPassword} props={RecoveryData} />
    <UnauthenticatedRoute path="/faq" exact component={FAQ} props={FAQData} />
    <UnauthenticatedRoute path="/about" exact component={About} props={AboutData} />
    <UnauthenticatedRoute path="/contact" exact component={Contact} props={ContactData} />
    <UnauthenticatedRoute path="/dashboard" exact component={Dashboard} props={dashboardData} />
    <UnauthenticatedRoute path="/policy" exact component={Policy} props={PrivacyPolicyData} />
    <UnauthenticatedRoute path="/verify" exact component={Verification} props={VerificationData} />
    <UnauthenticatedRoute path="/settigns" exact component={Settings} props={SettingsData} />
    <UnauthenticatedRoute path="/changePassword" exact component={ChangePassword} props={PasswordData} />
    <UnauthenticatedRoute path="/warn5" exact component={Warn5} props = {Warn5Data}/>
    <UnauthenticatedRoute path="/warn4" exact component={Warn4} props = {Warn4Data}/>
    <UnauthenticatedRoute path="/warn2" exact component={Warn2} props = {Warn2Data}/>
    <UnauthenticatedRoute path="/warn6" exact component={Warn6} props = {Warn6Data}/>
    <UnauthenticatedRoute path="/terms" exact component={Terms} props = {TermsData}/>
    <UnauthenticatedRoute path="/musicReview" exact component={MusicReview} props = {MusicsubData}/>
    <UnauthenticatedRoute path="/newSound" exact component={NewSound} props = {NewSoundData}/>
    <UnauthenticatedRoute path="/soundStep1" exact component={SoundStep1} props = {SoundForm1Data}/>
    <UnauthenticatedRoute path="/warn1" exact component={Warn1} props = {warn1Data}/>
    <UnauthenticatedRoute path="/soundStep2" exact component={SoundStep2} props = {SoundForm1bData}/>
    <UnauthenticatedRoute path="/soundStep3" exact component={SoundStep3} props = {SoundForm2bData}/>
    <UnauthenticatedRoute path="/soundReview" exact component={SoundReview} props = {SoundsubData}/>
    <UnauthenticatedRoute path="/songStep1" exact component={SongStep1} props = {MusicForm2Data}/>
    <UnauthenticatedRoute path="/songStep2" exact component={SongStep2} props = {MusicForm3Data}/>
    <UnauthenticatedRoute path="/songStep3" exact component={SongStep3} props = {MusicForm4Data}/>
    <UnauthenticatedRoute path="/songStep4" exact component={SongStep4} props = {MusicForm5Data}/>
</Switch>;

export default RouterConfig;