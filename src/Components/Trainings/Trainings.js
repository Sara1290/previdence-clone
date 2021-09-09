import React from 'react';
import NavBarTwo from '../NavBarTwo';
import ShopifyBuy from '@shopify/buy-button-js'

const Trainings = () => {

  var client = ShopifyBuy.buildClient({
    domain: 'w4ps.myshopify.com',
    storefrontAccessToken: 'ae653211e91e6494294f4adb2b4ca2db', // previously apiKey, now deprecated
  });

  var ui = ShopifyBuy.UI.init(client);

  ui.createComponent('product', {
    id: 6162478989468,
    node: document.getElementById('my-product')
  });

  return (
    <div>
      <NavBarTwo />
      <h1>TRAININGS</h1>
  
      
    </div>
  )
}
export default Trainings;
