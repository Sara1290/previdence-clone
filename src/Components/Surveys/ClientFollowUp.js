import React from 'react';
import * as Survey from "survey-react";
import NavBarTwo from '../NavBarTwo'
import "survey-react/modern.css";


const ClientFollowUp = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: 'a1486123-3836-4ab0-8b5d-7b56b9317eb3',
    surveyPostId: '9e497c57-cd02-4c54-ae3f-b9689ff5c196'
  }
  const survey = new Survey.Model(json);
  
  survey.onComplete.add(function (sender) { 
    document.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  
  }
  );
  return (
    <div className="survey">
    <NavBarTwo />
    <h1>Client Follow Up Survey</h1>
    <Survey.Survey
        model={survey}
        />
    </div>
);

}
export default ClientFollowUp;