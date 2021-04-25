import { Switch } from 'react-router-dom';
import UnauthenticatedRoute from "./UnauthenticatedRoute";
import AppliedRoute from "./AppliedRoute";
import AuthenticatedRoute from "./AuthenticatedRoute";
import Login from "../containers/login/login";

import loginpage from "../containers/loginpage";
import joinpage from "../containers/joinpage";
import verifypage from "../containers/verifypage";
import newSubmission from "../containers/newSubmission";
import newSubmission2 from "../containers/newSubmission2";
import newSubmissionFinal from "../containers/newSubmissionFinal";

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
import Warn3 from '../containers/warn3/warn3'
import Warn6 from '../containers/warn6/warn6'
import Warn7 from '../containers/warn7/warn7'
import Review from '../containers/musicReview/musicReview'
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
import VerifyPassword from '../containers/forgotPassword/verification'
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
         MusicForm5Data,
         RecoverPasswordData,
         Warn3Data,
         Warn7Data
        } from './CONSTANTS'

const RouterConfig = ({ userHasAuthenticated, isAuthenticated}) => 
<Switch>
    <AppliedRoute path="/login" exact component={Login} props={{...LoginData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}} />
    
    <AppliedRoute path="/loginpage" exact component={loginpage} props={{...LoginData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}} />
    <AppliedRoute path="/joinpage" exact component={joinpage} props={{...LoginData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}} />
    <AppliedRoute path="/verifypage" exact component={verifypage} props={{...LoginData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}} />
    <AppliedRoute path="/newSubmission" exact component={newSubmission} props={{...LoginData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}} />
    <AppliedRoute path="/newSubmission2" exact component={newSubmission2} props={{...LoginData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}} />
    <AppliedRoute path="/newSubmissionFinal" exact component={newSubmissionFinal} props={{...LoginData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}} />
    
    <UnauthenticatedRoute path="/" exact component={Home} props={LandingData} />
    <UnauthenticatedRoute path="/forgotPassword" exact component={ForgotPassword} props={RecoveryData} />
    <AppliedRoute path="/verifyPassword" exact component={VerifyPassword} props={{...RecoverPasswordData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <UnauthenticatedRoute path="/faq" exact component={FAQ} props={FAQData} />
    <UnauthenticatedRoute path="/about" exact component={About} props={AboutData} />
    <UnauthenticatedRoute path="/contact" exact component={Contact} props={ContactData} />
    <UnauthenticatedRoute path="/policy" exact component={Policy} props={PrivacyPolicyData} />
    <AppliedRoute path="/verify" exact component={Verification} props={{...VerificationData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}} />
    <AppliedRoute path="/changePassword" exact component={ChangePassword} props={{...PasswordData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}} />
    <AuthenticatedRoute path="/dashboard" exact component={Dashboard} props={{...dashboardData, isAuthenticated: isAuthenticated}} />
    <AuthenticatedRoute path="/settings" exact component={Settings} props={{...SettingsData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}} />
    <AuthenticatedRoute path="/warn5" exact component={Warn5} props = {{...Warn5Data, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/warn4" exact component={Warn4} props = {{...Warn4Data, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/warn2" exact component={Warn2} props = {{...Warn2Data, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/warn3" exact component={Warn3} props = {{...Warn3Data, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/warn6" exact component={Warn6} props = {{...Warn6Data, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/warn7" exact component={Warn7} props = {{...Warn7Data, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/terms" exact component={Terms} props = {{...TermsData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/musicReview" exact component={Review} props = {{...MusicsubData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/newSound" exact component={NewSound} props = {{...NewSoundData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/sound1" exact component={SoundStep1} props = {{...SoundForm1Data, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/warn1" exact component={Warn1} props = {{...warn1Data, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/sound2" exact component={SoundStep2} props = {{...SoundForm1bData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/sound3" exact component={SoundStep3} props = {{...SoundForm2bData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/soundReview" exact component={SoundReview} props = {{...SoundsubData, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/song1" exact component={SongStep1} props = {{...MusicForm2Data, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/song2" exact component={SongStep2} props = {{...MusicForm3Data, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/song3" exact component={SongStep3} props = {{...MusicForm4Data, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
    <AuthenticatedRoute path="/song4" exact component={SongStep4} props = {{...MusicForm5Data, userHasAuthenticated : userHasAuthenticated, isAuthenticated: isAuthenticated}}/>
   
</Switch>;

export default RouterConfig; 
