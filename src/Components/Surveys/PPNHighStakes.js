import React from 'react';
import * as Survey from "survey-react";
import NavBar from '../NavBar'
import "survey-react/modern.css";



const PPNHighStakes = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: '4965f346-ae43-4c4e-bca1-5cd913debb04',
    surveyPostId: '105031bd-3d69-43b5-b91b-5f6134f6fe34',
   
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
export default PPNHighStakes;

