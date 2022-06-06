import React from 'react';
import * as Survey from "survey-react";
import NavBar from '../NavBar'
import "survey-react/modern.css";


const NonProfitBillingInquiry = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: 'e21bc857-9965-461f-a111-fcfcc7d53489',
    surveyPostId: 'd65ba7a5-601b-4dfc-bccd-3b7e1d5296fa', 

  }
  const survey = new Survey.Model(json);
  
  survey.onComplete.add(function (sender) { 
    document.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  
  }
  );
  return (
    <div className="survey">
    <NavBar />
    <Survey.Survey
        model={survey}
        />
    </div>
);

}
export default NonProfitBillingInquiry;