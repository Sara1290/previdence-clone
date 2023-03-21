import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Components/Home-Page/Homepage';
import Team from './Components/Team/Team';
import PublicSafety from './Components/Public Safety/PublicSafety';
import Humanitarian from './Components/Humanitarian/Humanitarian';
import FaithBased from './Components/Faith Based/FaithBased';
import Professional from './Components/Professional/Professional';
import Correctional from './Components/Correctional/Correctional';
import Corporations from './Components/Corporations/Corporations';
import K12 from './Components/K12/K12';
import Military from './Components/Military/Military';
import Trainings from './Components/Trainings/Trainings';
import Contact from './Components/Contact/Contact';
import Testimonials from './Components/Home-Page/Testimonials';
import Resources from './Components/Resources/Resources';
import OfdTips from './Components/Tips/OfdTips';
import Ppn from './Components/Surveys/Ppn';
import PpnAdditional from './Components/Surveys/PpnAddtional';
import PostTraining from './Components/Surveys/PostTraining';
import CrisisResponse from './Components/Surveys/CrisisResponse';
import PrevEval from './Components/Surveys/PrevEval';
import DSM from './Components/Surveys/DSM';
import DSMParents from './Components/Surveys/DSMParents';
import DSMSample from './Components/Surveys/DSMSample';
import DSMSpanish from './Components/Surveys/DSMSpanish';
import DSMSpanishParents from './Components/Surveys/DSMSpanishParents';
import ClientPPNSatisfaction from './Components/Surveys/ClientPPNSatisfaction';
import PpnConference from './Components/Surveys/PpnConference';
import PpnInfo from './Components/PPN/PpnInfo';
import OpdTips from './Components/Tips/OpdTips';
import AdditionalResources from './Components/PPN/AdditionalResources';
import OpdTipsTest from './Components/Tips/OpdTipsTest';
import ClearfieldPDTips from './Components/Tips/ClearfieldPDTips';
import HubspotThankYou from './Components/HubSpot/HubspotThankYou';
import ClinicalTeam from './Components/Team/ClinicalTeam';
import Providers from './Components/PPN/Providers';


// this is the correct routes . js

export default (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/team" component={Team} />
    <Route path="/publicsafety" component={PublicSafety} />
    <Route path="/humanitarian" component={Humanitarian} />
    <Route path="/faithbased" component={FaithBased} />
    <Route path="/professional" component={Professional} />
    <Route path="/correctional" component={Correctional} />
    <Route path="/corporations" component={Corporations} />
    <Route path="/k12" component={K12} />
    <Route path="/military" component={Military} />
    <Route path="/trainings" component={Trainings} />
    <Route path="/contact" component={Contact} />
    <Route path="/testimonials" component={Testimonials} />
    <Route path="/resources" component={Resources} />
    <Route path="/ofdtips" component={OfdTips} />
    <Route path="/opdtips" component={OpdTips} />
    <Route path="/clearfield-pd-tips" component={ClearfieldPDTips} />
    <Route path="/opdtipstest" component={OpdTipsTest} />
    <Route path="/ppn" component={Ppn} />
    <Route path="/ppnadditional" component={PpnAdditional} />
    <Route path="/posttraining" component={PostTraining} />
    <Route path="/crisisresponse" component={CrisisResponse} />
    <Route path="/preveval" component={PrevEval} />
    <Route path="/dsmwebersd" component={DSM} />
    <Route path="/dsmparentswebersd" component={DSMParents} />
    <Route path="/dsmsample" component={DSMSample} />
    <Route path="/dsmspanishwebersd" component={DSMSpanish} />
    <Route path="/dsmspanishparentswebersd" component={DSMSpanishParents} />
    <Route path="/ppninfo" component={PpnInfo} />
    <Route path="/clientppnsatisfaction" component={ClientPPNSatisfaction} />
    <Route path="/ppnconference" component={PpnConference} />
    <Route path="/additionalresources" component={AdditionalResources} />
    <Route path="/thank-you" component={HubspotThankYou} />
    <Route path="/clinicalteam" component={ClinicalTeam} />
    <Route path="/providers" component={Providers} />

  </Switch>
)