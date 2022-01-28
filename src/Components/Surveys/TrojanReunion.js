import React from 'react';
import * as Survey from "survey-react";
import NavBar from '../NavBar'
import "survey-react/modern.css";


const TrojanReunion = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: '9ca275eb-3620-4eda-999b-05a686e71a8f',
    surveyPostId: 'c55690c6-a193-4cd5-9ac2-6b4a0f371bfc',
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
export default TrojanReunion;

