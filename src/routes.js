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
  </Switch>
)