import React from 'react';
import NavBarTwo from '../NavBarTwo';
import ShopifyBuy from '@shopify/buy-button-js'
import { Modal } from 'react-bootstrap';

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
        buttonDestination: 'modal',
      layout: 'horizontal',
      contents: {
        descrition: true
      }
    }
  }
  });
  ui.createComponent('product', {
    id: 7023956328604,
    // node: document.getElementById('my-product'),
    options: {
      product: {
        buttonDestination: 'modal',
      layout: 'horizontal',
      contents: {
        descrition: true
      }
    }
  }
  });

  return (
    <div className="trainings-outer">
      <NavBarTwo />
      <h1>Courses</h1>
  
      
    </div>
  )
}
export default Trainings;
