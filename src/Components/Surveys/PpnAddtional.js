import React from 'react';
import * as Survey from "survey-react";
import NavBarTwo from '../NavBarTwo'
import "survey-react/modern.css";


const PpnAdditional = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: 'a0a00c69-9355-4166-b5ef-448754bf042d',
    surveyPostId: '844fcb83-3160-4b1a-a195-2732df523f2a',
    pages: [
      {
       name: "page1",
       elements: [
        {
         type: "text",
         name: "Your Name",
         title: "Your Name"
        },
        {
         type: "checkbox",
         name: "Please select any other languages you provide treatment in:",
         title: "Please select any other languages you provide treatment in:",
         choices: [
          {
           value: "Spanish",
           text: "Spanish"
          },
          {
           value: "French",
           text: "French"
          },
          {
           value: "Italian",
           text: "Italian"
          },
          {
           value: "German",
           text: "German"
          }
         ],
         hasOther: true,
         otherText: "Other (describe)"
        },
        {
         type: "checkbox",
         name: "What insurances and/or payment methods are you currently accepting?",
         title: "What insurances and/or payment methods are you currently accepting?",
         choices: [
          {
           value: "item1",
           text: "PEHP"
          },
          {
           value: "item2",
           text: "Blue Cross"
          },
          {
           value: "item3",
           text: "Select Health"
          },
          {
           value: "item4",
           text: "AETNA"
          },
          {
           value: "item5",
           text: "EMi"
          },
          {
           value: "item6",
           text: "DMBA"
          },
          {
           value: "item7",
           text: "United"
          },
          {
           value: "item8",
           text: "UMR-Optum"
          },
          {
           value: "item9",
           text: "Self-Pay Only"
          },
          {
           value: "item10",
           text: "Medicaid"
          },
          {
           value: "item11",
           text: "Medicare"
          }
         ],
         hasOther: true
        },
        {
         type: "text",
         name: "Please list any other therapists who might be interested",
         title: "Please list any other therapists who might be interested"
        }
       ],
       title: "Previdence Provider Network - Additional Information"
      }
     ]
  }
  const survey = new Survey.Model(json);
  
  survey.onComplete.add(function (sender) { 
    document.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  });



  return (
    <div className="survey">
    <NavBarTwo />
    <Survey.Survey
        model={survey}
        />  
    </div>
);

}
export default PpnAdditional;

