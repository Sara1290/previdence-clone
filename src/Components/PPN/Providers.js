import React from 'react';
import NavBar from '../NavBar'
import UniFooter from '../UniFooter';
import ProviderBenefits from './ProviderBenefits';
import ProviderCta from './ProviderCta';
import ProviderHeader from './ProviderHeader';
import ProviderMain from './ProviderMain';


const Providers = () => {
  return (
    <div className="">
      <NavBar />
      <ProviderHeader />
      <ProviderMain />
      <ProviderBenefits />
      <ProviderCta />
      <UniFooter />
    </div>
  );

};
export default Providers;

