import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import 'bootstrap/dist/css/bootstrap.css';
import reportWebVitals from './reportWebVitals';
require('dotenv').config();

const history = createBrowserHistory();

const Router = HashRouter;

// REACT_APP_GA_TRACKING_ID = UA-198972821-1
// REACT_APP_GA_USER_ID=198972821
//old one ^^
const TRACKING_ID = process.env.REACT_APP_GA_TRACKING_ID; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID, {
  debug: true,
  titleCase: false,
  gaOptions: {
    userId: '270251034',
    siteSpeedSampleRate: 100
  }
});;

history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});




ReactDOM.render(
  <React.StrictMode>
    <Router history={history} >
      <App />
      <div>
    </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
