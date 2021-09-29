import React from 'react';
import * as Survey from "survey-react";
import NavBarTwo from '../NavBarTwo'
import "survey-react/modern.css";


const PpnAdditional = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: 'a0a00c69-9355-4166-b5ef-448754bf042d',
    surveyPostId: '844fcb83-3160-4b1a-a195-2732df523f2a'
  }
  const survey = new Survey.Model(json);
  
  survey.onComplete.add(function (sender) { 
    document.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  });



  return (
    <div className="survey">
    <NavBarTwo />
    <h1>Previdence Provider Network - Additional Information</h1>
    <Survey.Survey
        model={survey}
        />
    </div>
);

}
export default PpnAdditional;

