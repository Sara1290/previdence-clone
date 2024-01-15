import React from 'react';
import * as Survey from "survey-react";
import NavBar from '../NavBar'
import "survey-react/modern.css";


const CustomerSatisfaction = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: '33b15dd3-7da2-4b19-9fee-0df13a39c5fc',
    surveyPostId: '28978dbd-5cf3-44de-901a-49c58ef2c298',
     
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
export default CustomerSatisfaction;
