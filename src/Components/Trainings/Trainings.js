import React, {useEffect} from 'react';
import NavBar from '../NavBar';
import ShopifyBuy from '@shopify/buy-button-js'
// import train2 from '../../images/train2.png'
import UniFooter from '../UniFooter';
import ReactGA from 'react-ga';

const Trainings = () => {
  ReactGA.pageview('src/Components/Trainings/Trainings.js');


  var client = ShopifyBuy.buildClient({
    domain: 'w4ps.myshopify.com',
    storefrontAccessToken: 'd0c010618792074ac1e0a2a83a334522', // previously apiKey, now deprecated
  });

  var ui = ShopifyBuy.UI.init(client);
  
  useEffect(() => {
    ui.createComponent('product', {
      id: 6162478989468,
      node: document.getElementById('my-product'),
      options: {
        product: {
          buttonDestination: 'modal',
          // layout: 'horizontal',
     contents: {
       descrition: true
      }
    },
    cart: {
      startOpen: false,
      popup: true,
      contents: {
        note: true,
      },
      text: {
        noteDescription: 'NAME AND EMAIL OF EACH ATTENDEE'
      }
    }
    }
    });

   ui.createComponent('product', {
     id: 7023956328604,
     node: document.getElementById('my-product'),
     options: {
      product: {
        buttonDestination: 'modal',
      // layout: 'horizontal',
      contents: {
        descrition: true
      }
    },
    cart: {
      startOpen: false,
      popup: true,
      contents: {
        note: true,
      },
      text: {
        noteDescription: 'NAME AND EMAIL OF EACH ATTENDEE'
      }
    }
  }
});


}, [ui])


  return (
    <div className="trainings-outer">
      <NavBar />
      <div className="trainings-inner">
        <h1>Courses</h1>
        {/* <div>
          <img alt="check back soon for more dates" className="training-soon" src={train2} />
        </div> */}
      <div className="courses-container" id="my-product">
      </div>
      </div>
      <UniFooter />
    </div>
  )
}
export default Trainings;
