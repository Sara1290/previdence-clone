import React from 'react';
import * as Survey from 'survey-react';
import NavBarTwo from '../NavBarTwo';
import "survey-react/modern.css";


const CrisisResponse = () => {
 Survey.StylesManager.applyTheme("modern");

 const json = {
   surveyId: '97f3df96-1181-478a-bf48-f5c3133f6b8c',
   surveyPostId: '3f2d3160-1525-4093-a8dc-f09e0ed3c73f',
   title: "Crisis Response Survey",
 completedHtml: "Thank you for taking this survey",
 pages: [
  {
   name: "artometerone",
   elements: [
    {
     type: "rating",
     name: "artometerone",
     title: "Artometer",
     rateMin: 0,
     rateMax: 10,
     minRateDescription: "I Can Handle This",
     maxRateDescription: "I Can't Handle This"
    },
    {
     type: "checkbox",
     name: "emotionsFirstArt",
     title: "Emotions",
     choices: [
      {
       value: "Depressed",
       text: "Depressed"
      },
      {
       value: "Anxious",
       text: "Anxious"
      },
      {
       value: "Fearful",
       text: "Fearful"
      },
      {
       value: "Angry",
       text: "Angry"
      },
      {
       value: "Guilty",
       text: "Guilty"
      },
      {
       value: "Powerless",
       text: "Powerless"
      },
      {
       value: "Embarrassed",
       text: "Embarrassed"
      },
      {
       value: "Shameful",
       text: "Shameful"
      },
      {
       value: "Jealous",
       text: "Jealous"
      },
      {
       value: "Hopeless",
       text: "Hopeless"
      },
      {
       value: "Obsessed",
       text: "Obsessed"
      },
      {
       value: "Foolish",
       text: "Foolish"
      },
      {
       value: "Insecure",
       text: "Insecure"
      },
      {
       value: "Worthless",
       text: "Worthless"
      },
      {
       value: "Hurt",
       text: "Hurt"
      },
      {
       value: "Distrustful",
       text: "Distrustful"
      },
      {
       value: "Irritable",
       text: "Irritable"
      },
      {
       value: "Incompetent",
       text: "Incompetent"
      },
      {
       value: "Lonely",
       text: "Lonely"
      },
      {
       value: "Sad",
       text: "Sad"
      },
      {
       value: "Confused",
       text: "Confused"
      },
      {
       value: "Indecisive",
       text: "Indecisive"
      },
      {
       value: "Frustrated",
       text: "Frustrated"
      },
      {
       value: "Deceived",
       text: "Deceived"
      },
      {
       value: "Different",
       text: "Different"
      }
     ],
     hasOther: true,
     otherPlaceHolder: "Name another emotion not listed here",
     otherText: "other",
     colCount: 3
    },
    {
     type: "html",
     name: "question1"
    }
   ],
   title: "Beginning of Session ART"
  },
  {
   name: "artometertwo",
   elements: [
    {
     type: "rating",
     name: "artometertwo",
     title: "Artometer",
     rateMin: 0,
     rateMax: 10,
     minRateDescription: "I Can Handle This",
     maxRateDescription: "I Can't Handle This"
    }
   ],
   title: "End Of Session Artometer"
  }
 ],
 navigateToUrl: "crisis-response.html",
 showQuestionNumbers: "off"
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
export default CrisisResponse;