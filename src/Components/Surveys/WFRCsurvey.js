import React from 'react';
import * as Survey from "survey-react";
import NavBar from '../NavBar'
import "survey-react/modern.css";


const WFRCsurvey = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: 'c641835c-b8b2-4608-bb0b-9ce35cc76fc2',
    surveyPostId: '174bf4f4-e588-4ddd-8f4f-844ba3753e31', 

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
export default WFRCsurvey;