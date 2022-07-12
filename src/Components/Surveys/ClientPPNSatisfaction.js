import React from 'react';
import * as Survey from "survey-react";
import NavBar from '../NavBar'
import "survey-react/modern.css";


const ClientPPNSatisfaction = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: '9078c398-402b-4f3e-a5a9-66695256a79a',
    surveyPostId: '1b72a321-0cea-4ec5-a2a6-fca7f102c258',
  }
  const survey = new Survey.Model(json);
  
  survey.onComplete.add(function (sender) { 
    document.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  });



  return (
    <div className="survey">
    <NavBar />
    <Survey.Survey
        model={survey}
        />  
    </div>
);

}
export default ClientPPNSatisfaction;
