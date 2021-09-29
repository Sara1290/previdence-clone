import React from 'react';
import * as Survey from 'survey-react';
import NavBarTwo from '../NavBarTwo';
import "survey-react/modern.css";


const CrisisResponse = () => {
 Survey.StylesManager.applyTheme("modern");

 const json = {
   surveyId: '97f3df96-1181-478a-bf48-f5c3133f6b8c',
   surveyPostId: '3f2d3160-1525-4093-a8dc-f09e0ed3c73f'
 }
 const survey = new Survey.Model(json);
  
  survey.onComplete.add(function (sender) { 
    document.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  
  }
  );
  return (
    <div className="survey">
    <NavBarTwo />
    <h1>Crisis Response Survey</h1>
    <Survey.Survey
        model={survey}
        />
    </div>
);


}
export default CrisisResponse;