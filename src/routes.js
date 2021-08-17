import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './Components/Home-Page/Homepage';
import Team from './Components/Team/Team';
import PublicSafety from './Components/Public Safety/PublicSafety';
import Humanitarian from './Components/Humanitarian/Humanitarian';
import FaithBased from './Components/Faith Based/FaithBased';
import Professional from './Components/Professional/Professional';
import Correctional from './Components/Correctional/Correctional';

export default (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/team" component={Team} />
    <Route path="/publicsafety" component={PublicSafety} />
    <Route path="/humanitarian" component={Humanitarian} />
    <Route path="/faithbased" component={FaithBased} />
    <Route path="/professional" component={Professional} />
    <Route path="/correctional" component={Correctional} />
  </Switch>
)