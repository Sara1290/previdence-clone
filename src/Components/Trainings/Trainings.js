import React, {useEffect} from 'react';
import NavBar from '../NavBar';
import ShopifyBuy from '@shopify/buy-button-js';
// import train2 from '../../images/train2.png'
import UniFooter from '../UniFooter';
import ReactGA from 'react-ga';

const Trainings = () => {
  ReactGA.pageview('src/Components/Trainings/Trainings.js');

  
  
  
 const client = ShopifyBuy.buildClient({
    domain: 'previdence.myshopify.com',
    storefrontAccessToken: '062fc7185279d50748982b7dc9790246', // previously apiKey, now deprecated
  });
  
  var ui = ShopifyBuy.UI.init(client);
  
  client.checkout.create().then((checkout) => {
    //do something with the checkout
    console.log(checkout.id)
  })

  useEffect(() => {
    
    //Feb 1 & 2 
    ui.createComponent('productSet', {
      id: [7128189075633],
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
