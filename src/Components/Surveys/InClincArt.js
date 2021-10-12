import React from 'react';
import * as Survey from "survey-react";
import NavBarTwo from '../NavBarTwo'
import "survey-react/modern.css";


const InClinicArt = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: '9dd7f717-0fc4-4fb2-8b6e-ed68a66abbd4',
    surveyPostId: '54991085-6942-4625-94b6-d69ea8c08d58', 
    logo: "https://api.surveyjs.io/private/Surveys/files?name=9447b127-18af-49ca-8cff-80bba6956449",
 completedHtml: "Thank you for taking this survey",
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "rating",
     name: "Artometer",
     title: "Artometer",
     rateMin: 0,
     rateMax: 10,
     minRateDescription: "I Can Handle This",
     maxRateDescription: "I Can't Handle This"
    },
    {
     type: "checkbox",
     name: "question1",
     title: "Emotions You're Feeling",
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
       value: "Embarrassed",
       text: "Embarrassed"
      },
      {
       value: "Shameful",
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
       value: "Incompentent",
       text: "Incompentent"
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
       value: "Devieved",
       text: "Decieved"
      },
      {
       value: "Different",
       text: "Different"
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
       value: "Jealous",
       text: "Jealous"
      }
     ],
     hasOther: true,
     colCount: 3
    }
   ],
   title: "In Clinic ART"
  },
  {
   name: "page1",
   elements: [
    {
     type: "rating",
     name: "Artometer #2",
     title: "Artometer #2",
     rateMin: 0,
     rateMax: 10,
     minRateDescription: "I Can Handle This",
     maxRateDescription: "I Can't Handle This"
    }
   ],
   title: "Artometer #2"
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
    <h1>In Clinic Art</h1>
    <Survey.Survey
        model={survey}
        />
    </div>
);

}
export default InClinicArt;