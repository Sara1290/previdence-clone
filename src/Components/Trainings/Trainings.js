import React from 'react';
import NavBarTwo from '../NavBarTwo';
import ShopifyBuy from '@shopify/buy-button-js'

const Trainings = () => {

  var client = ShopifyBuy.buildClient({
    domain: 'w4ps.myshopify.com',
    storefrontAccessToken: 'd0c010618792074ac1e0a2a83a334522', // previously apiKey, now deprecated
  });

  var ui = ShopifyBuy.UI.init(client);

  ui.createComponent('product', {
    id: 6162478989468,
    // node: document.getElementById('my-product'),
    options: {
      product: {
      layout: 'horizontal',
      contents: {
        desciption: true
      }
    }
  }
  });

  return (
    <div>
      <NavBarTwo />
      <h1>TRAININGS</h1>
  
      
    </div>
  )
}
export default Trainings;
