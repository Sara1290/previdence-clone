import React from 'react';
import NavBar from '../NavBar'
import PpnFooter from '../PpnFooter';
import ProviderBenefits from './ProviderBenefits';
import ProviderCta from './ProviderCta';
import ProviderHeader from './ProviderHeader';
import ProviderMain from './ProviderMain';


const Providers = () => {
  return (
    <div className="providers-container">
      <NavBar />
      <div className='providers-inner'>
        <ProviderHeader />
        <ProviderMain />
        <ProviderBenefits />
        <ProviderCta />
      </div>
      <PpnFooter />
    </div>
  );

};
export default Providers;

