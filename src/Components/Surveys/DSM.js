import React from 'react';
import * as Survey from "survey-react";
import NavBarTwo from '../NavBarTwo'
import "survey-react/modern.css";


const DSM = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: '265752f1-d993-4444-9dcf-2c7d8e749e01',
    surveyPostId: 'fcf7a9d7-8cb4-4058-8666-df5abe1a52c4'
  }
  const survey = new Survey.Model(json);
  
  survey.onComplete.add(function (sender) { 
    document.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  
  }
  );
  return (
    <div className="survey">
    <NavBarTwo />
    <h1>DSM Survey</h1>
    <Survey.Survey
        model={survey}
        />
    </div>
);

}
export default DSM;