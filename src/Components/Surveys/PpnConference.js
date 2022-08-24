import React from 'react';
import * as Survey from "survey-react";
import NavBar from '../NavBar'
import "survey-react/modern.css";


const PpnConference = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: 'c4178f24-ec53-4d1b-bd46-b863dc742c6a',
    surveyPostId: '8671afa9-f1a7-4f68-a77e-163a40be7844',
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
export default PpnConference;
