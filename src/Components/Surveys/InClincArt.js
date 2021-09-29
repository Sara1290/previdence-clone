import React from 'react';
import * as Survey from "survey-react";
import NavBarTwo from '../NavBarTwo'
import "survey-react/modern.css";


const InClinicArt = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: '9dd7f717-0fc4-4fb2-8b6e-ed68a66abbd4',
    surveyPostId: '54991085-6942-4625-94b6-d69ea8c08d58'
  }
  const survey = new Survey.Model(json);
  
  survey.onComplete.add(function (sender) { 
    document.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  
  }
  );
  return (
    <div className="survey">
    <NavBarTwo />
    <h1>In Clinic Art</h1>
    <Survey.Survey
        model={survey}
        />
    </div>
);

}
export default InClinicArt;