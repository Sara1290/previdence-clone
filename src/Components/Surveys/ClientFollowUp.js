import React from 'react';
import * as Survey from "survey-react";
import NavBarTwo from '../NavBarTwo'
import "survey-react/modern.css";


const ClientFollowUp = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: 'a1486123-3836-4ab0-8b5d-7b56b9317eb3',
    surveyPostId: '9e497c57-cd02-4c54-ae3f-b9689ff5c196', 
    pages: [
      {
       name: "Client and Therapist's Name",
       elements: [
        {
         type: "text",
         name: "Therapist Name",
         title: "Therapist Name"
        },
        {
         type: "text",
         name: "Client Name",
         title: "Client Name"
        }
       ],
       title: "Client and Therapists's Name"
      },
      {
       name: "Indicate the Number of Each Type of Session You Have Had With This Client",
       elements: [
        {
         type: "rating",
         name: "How Many ART Sessions?",
         title: "How Many ART Sessions?",
         rateMax: 20
        },
        {
         type: "rating",
         name: "How Many EMDR Sessions?",
         title: "How Many EMDR Sessions?",
         rateMax: 20
        },
        {
         type: "rating",
         name: "How Many Sessions with Other Modalities?",
         title: "How Many Sessions with Other Modalities?",
         rateMax: 20
        }
       ],
       title: "Indicate the Number of Each Type of Session You Have Had With This Client"
      },
      {
       name: "Discharge Details",
       elements: [
        {
         type: "boolean",
         name: "Has This Client Already Been Discharged?",
         title: "Has This Client Already Been Discharged?"
        },
        {
         type: "text",
         name: "Discharge Date",
         visibleIf: "{Has This Client Already Been Discharged?} = true",
         title: "Discharge Date",
         description: "mm/dd/yyyy",
         inputType: "datetime"
        },
        {
         type: "boolean",
         name: "Did They Take the Discharge Assessment Panel?",
         visibleIf: "{Has This Client Already Been Discharged?} = true",
         title: "Did They Take the Discharge Assessment Panel?"
        },
        {
         type: "boolean",
         name: "Did You Review the Discharge Assessment Results With Them?",
         visibleIf: "{Did They Take the Discharge Assessment Panel?} = true",
         title: "Did You Review the Discharge Assessment Results With Them?"
        },
        {
         type: "boolean",
         name: "Would You Like Us to Send the Client to Take the Standard Assessment Panel Again?",
         title: "Would You Like Us to Send the Client to Take the Standard Assessment Panel Again?"
        },
        {
         type: "boolean",
         name: "Other Than the Standard Panel, Do You Have Any Special Assessment Needs For This Client?",
         title: "Other Than the Standard Panel, Do You Have Any Special Assessment Needs For This Client?"
        },
        {
         type: "text",
         name: "List Those Requirements",
         visibleIf: "{Other Than the Standard Panel, Do You Have Any Special Assessment Needs For This Client?} = true",
         title: "List Those Requirements"
        }
       ],
       title: "Discharge Details"
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
    <h1>Client Follow Up Survey</h1>
    <Survey.Survey
        model={survey}
        />
    </div>
);

}
export default ClientFollowUp;