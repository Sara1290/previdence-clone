import React from 'react';
import * as Survey from "survey-react";
import "survey-react/modern.css";


const Ppn = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: '441dc37c-4257-47cc-9784-d9fc7f8d766b',
    surveyPostId: '443e95a0-de53-42fd-8447-271d31f56c8f'
  }
  const survey = new Survey.Model(json);
  
  survey.onComplete.add(function (sender) { 
    document.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  
  }
  );
  return (
    <Survey.Survey
        model={survey}
    />
);

}
export default Ppn;