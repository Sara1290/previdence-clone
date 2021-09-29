import React from 'react';
import * as Survey from "survey-react";
import NavBarTwo from '../NavBarTwo'
import "survey-react/modern.css";


const DSMParents = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: 'a2efd309-3c61-4af9-9ec0-9693f9f09b7e',
    surveyPostId: '4517e4dc-d75e-4b4d-81c1-52aa28092a73'
  }
  const survey = new Survey.Model(json);
  
  survey.onComplete.add(function (sender) { 
    document.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  
  }
  );
  return (
    <div className="survey">
    <NavBarTwo />
    <h1>DSM Survey - Parents/Guardians</h1>
    <Survey.Survey
        model={survey}
        />
    </div>
);

}
export default DSMParents;