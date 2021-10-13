import React from 'react';
import * as Survey from "survey-react";
import NavBarTwo from '../NavBarTwo'
import "survey-react/modern.css";


const PrevEval = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: '6ee8466c-86a9-4c57-9297-cf462924a037',
    surveyPostId: 'ad41b244-7c08-4b38-922d-51e36117c1d2', 
    title: "Post Session Evaluation Survey",
    pages: [
     {
      name: "page1",
      elements: [
       {
        type: "checkbox",
        name: "Public Safety Branch",
        title: "Public Safety Branch",
        choices: [
         {
          value: "item1",
          text: "Fire Fighter"
         },
         {
          value: "item2",
          text: "Police"
         },
         {
          value: "item3",
          text: "Emergency Medical"
         },
         {
          value: "item4",
          text: "Fire Fighter and Emergency Medical "
         },
         {
          value: "item5",
          text: "Dispatch"
         },
         {
          value: "item6",
          text: "Military"
         }
        ]
       },
       {
        type: "rating",
        name: "How satisfied are you with the Previdence services you have recieved?",
        title: "How satisfied are you with the Previdence services you have recieved?",
        minRateDescription: "Unsatisfactory",
        maxRateDescription: "Excellent"
       },
       {
        type: "text",
        name: "Please provide us any feedback that you may have about your experience",
        title: "Please provide us any feedback that you may have about your experience"
       },
       {
        type: "radiogroup",
        name: "May we share your feedback with others?",
        title: "May we share your feedback with others?",
        choices: [
         {
          value: "item1",
          text: "Yes"
         },
         {
          value: "item2",
          text: "No"
         }
        ]
       }
      ],
      title: "Post Session Evaluation Survey"
     }
    ]
  }
  const survey = new Survey.Model(json);
  
  survey.onComplete.add(function (sender) { 
    document.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  
  }
  );
  return (
    <div className="survey">
    <NavBarTwo />
    <Survey.Survey
        model={survey}
        />
    </div>
);

}
export default PrevEval;