import React from 'react';
import * as Survey from "survey-react";
import NavBar from '../NavBar'
import { withRouter } from 'react-router';
import "survey-react/modern.css";


const Ppn = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: '441dc37c-4257-47cc-9784-d9fc7f8d766b',
    surveyPostId: '443e95a0-de53-42fd-8447-271d31f56c8f',
    
      pages: [
       {
        name: "page1",
        elements: [
         {
          type: "text",
          name: "First Name",
          title: "First Name"
         },
         {
          type: "text",
          name: "Last Name",
          title: "Last Name"
         },
         {
          type: "text",
          name: "Personal Phone Number",
          title: "Personal Phone Number"
         },
         {
          type: "text",
          name: "Email",
          title: "Email"
         },
         {
          type: "radiogroup",
          name: "Your Preferred Method of Contact",
          title: "Your Preferred Method of Contact",
          choices: [
           {
            value: "Phone",
            text: "Phone"
           },
           {
            value: "Text",
            text: "Text"
           },
           {
            value: "Email",
            text: "Email"
           },
           {
            value: "Office Assistant",
            text: "Office Assistant"
           }
          ]
         },
         {
          type: "text",
          name: "Assistant Name",
          visibleIf: "{Your Preferred Method of Contact} = 'Office Assistant'",
          title: "Assistant Name"
         },
         {
          type: "text",
          name: "Assistant Phone Number",
          visibleIf: "{Your Preferred Method of Contact} = 'Office Assistant'",
          title: "Assistant Phone Number"
         },
         {
          type: "text",
          name: "Assistant Email",
          visibleIf: "{Your Preferred Method of Contact} = 'Office Assistant'",
          title: "Assistant Email"
         },
         {
          type: "text",
          name: "Clinic Name",
          title: "Clinic Name"
         },
         {
          type: "text",
          name: "Clinic Phone Number",
          title: "Clinic Phone Number"
         },
         {
          type: "text",
          name: "Clinic Address",
          title: "Clinic Address\n",
          placeHolder: "Address Line 1"
         },
         {
          type: "text",
          name: "Address Line 2",
          title: "Address Line 2\n",
          placeHolder: "Address Line 2"
         },
         {
          type: "text",
          name: "City",
          title: "\nCity",
          placeHolder: "City"
         },
         {
          type: "text",
          name: "State",
          title: "State\n",
          placeHolder: "State"
         },
         {
          type: "text",
          name: "Zip",
          title: "\nZip",
          placeHolder: "Zip"
         },
         {
          type: "text",
          name: "Country",
          title: "Country",
          placeHolder: "Country"
         },
         {
          type: "radiogroup",
          name: "Do you have a second clinic address?",
          title: "Do You Have A Second Clinic Address?",
          choices: [
           {
            value: "Yes",
            text: "Yes"
           },
           {
            value: "No",
            text: "No"
           }
          ]
         },
         {
          type: "text",
          name: "Second Address Line 1",
          visibleIf: "{Do you have a second clinic address?} = 'Yes'",
          title: "Second Clinic Address",
          placeHolder: "Address Line 1"
         },
         {
          type: "text",
          name: "Second Address Line 2",
          visibleIf: "{Do you have a second clinic address?} = 'Yes'",
          title: "Address Line 2",
          placeHolder: "Address Line 2"
         },
         {
          type: "text",
          name: "Second City",
          visibleIf: "{Do you have a second clinic address?} = 'Yes'",
          title: "City",
          placeHolder: "City"
         },
         {
          type: "text",
          name: "Second State",
          visibleIf: "{Do you have a second clinic address?} = 'Yes'",
          title: "State",
          placeHolder: "State"
         },
         {
          type: "text",
          name: "Second Zip",
          visibleIf: "{Do you have a second clinic address?} = 'Yes'",
          title: "Zip",
          placeHolder: "Zip"
         },
         {
          type: "text",
          name: "Second Country",
          visibleIf: "{Do you have a second clinic address?} = 'Yes'",
          title: "Country",
          placeHolder: "Country"
         },
         {
          type: "checkbox",
          name: "Please select your top 3 specialties",
          title: "Please Select Your Top 3 Specialties",
          choices: [
           {
            value: "Families / Couples",
            text: "Familes / Couples"
           },
           {
            value: "Adults",
            text: "Adults"
           },
           {
            value: "Teens",
            text: "Teens"
           },
           {
            value: "Kids",
            text: "Kids"
           },
           {
            value: "Trauma",
            text: "Trauma"
           },
           {
            value: "Psychosis",
            text: "Psychosis"
           },
           {
            value: "Personality Disorders",
            text: "Personality Disorders"
           },
           {
            value: "Addiction",
            text: "Addiction"
           },
           {
            value: "LGBTQ+",
            text: "LGBTQ+"
           },
           {
            value: "Generalist",
            text: "Generalist"
           },
           {
            value: "First Responders / Military",
            text: "First Responders / Military"
           }
          ],
          maxSelectedChoices: 3
         },
         {
          type: "checkbox",
          name: "Are you an independent contractor/ owner / employee?",
          title: "Are You an Independent Contractor/ Owner / Employee? ",
          choices: [
           {
            value: "IndependentContractor",
            text: "Independent Contractor"
           },
           {
            value: "W2Employee",
            text: "W2 Employee"
           },
           {
            value: "PrivatePractice",
            text: "Private Practice"
           }
          ]
         },
         {
          type: "text",
          name: "If Not Independent, Why Not?",
          visibleIf: "{Are you an independent contractor/ owner / employee?} = ['W2Employee']"
         },
         {
          type: "radiogroup",
          name: "Are you EMDR or ART trained?",
          title: "Are You EMDR or ART Trained?",
          choices: [
           {
            value: "EMDR",
            text: "EMDR"
           },
           {
            value: "ART",
            text: "ART"
           },
           {
            value: "Both",
            text: "Both"
           },
           {
            value: "Neither",
            text: "Neither"
           }
          ]
         },
         {
          type: "radiogroup",
          name: "Do you have experience treating first responders?",
          title: "Do You Have Experience Treating First Responders?",
          choices: [
           {
            value: "Yes",
            text: "Yes"
           },
           {
            value: "No",
            text: "No"
           }
          ]
         },
         {
          type: "text",
          name: "What are you doing to build, strengthen or increase your clientele / practice?",
          title: "What are you doing to build, strengthen or increase your clientele / practice?"
         },
         {
          type: "text",
          name: "What are your thoughts about practicing via telehealth?",
          title: "What are your thoughts about practicing via telehealth?"
         },
         {
          type: "dropdown",
          name: "What percentage of your sessions are through telehealth?",
          title: "What percentage of your sessions are through telehealth?",
          choices: [
           {
            value: "0",
            text: "0%"
           },
           {
            value: "10",
            text: "10%"
           },
           {
            value: "20",
            text: "20%"
           },
           {
            value: "30",
            text: "30%"
           },
           {
            value: "40",
            text: "40%"
           },
           {
            value: "50",
            text: "50%"
           },
           {
            value: "60",
            text: "60%"
           },
           {
            value: "70",
            text: "70%"
           },
           {
            value: "80",
            text: "80%"
           },
           {
            value: "90",
            text: "90%"
           },
           {
            value: "100",
            text: "100%"
           }
          ]
         },
         {
          type: "rating",
          name: "How interested are you in learning a new evidence-based therapeutic technique?",
          title: "How interested are you in learning a new evidence-based therapeutic technique?",
          rateValues: [
           {
            value: "Not Interested",
            text: "Not Interested"
           },
           {
            value: "Indifferent",
            text: "Indifferent"
           },
           {
            value: "Somewhat Interested",
            text: "Somewhat Interested"
           },
           {
            value: "Extremely Interested",
            text: "Extremely Interested"
           }
          ]
         },
         {
          type: "text",
          name: "What populations do you not work well with, and why?",
          title: "What populations do you not work well with, and why?"
         },
         {
          type: "dropdown",
          name: "Including your time as an associate therapist, how long have you been a practicing clinician?",
          title: "Including your time as an associate therapist, how long have you been a practicing clinician?",
          choices: [
           {
            value: "Graduated in the past year",
            text: "Graduated in the past year"
           },
           {
            value: "1 Year ",
            text: " 1 Year"
           },
           {
            value: "2 Years ",
            text: " 2 Years"
           },
           {
            value: "3 Years ",
            text: " 3 Years"
           },
           {
            value: "4 Years ",
            text: " 4 Years"
           },
           {
            value: "5 Years ",
            text: " 5 Years"
           },
           {
            value: "6 Years ",
            text: " 6 Years"
           },
           {
            value: "7 Years ",
            text: " 7 Years"
           },
           {
            value: "8 Years ",
            text: " 8 Years"
           },
           {
            value: "9 Years ",
            text: " 9 Years"
           },
           {
            value: "10 Years ",
            text: " 10 Years"
           },
           {
            value: "11 Years ",
            text: " 11 Years"
           },
           {
            value: "12 Years ",
            text: " 12 Years"
           },
           {
            value: "13 Years ",
            text: " 13 Years"
           },
           {
            value: "14 Years ",
            text: " 14 Years"
           },
           {
            value: "15 Years ",
            text: " 15 Years"
           },
           {
            value: "16 Years ",
            text: " 16 Years"
           },
           {
            value: "17 Years ",
            text: " 17 Years"
           },
           {
            value: "18 Years ",
            text: " 18 Years"
           },
           {
            value: "19 Years ",
            text: " 19 Years"
           },
           {
            value: "20 Years ",
            text: " 20 Years"
           },
           {
            value: "21 Years ",
            text: " 21 Years"
           },
           {
            value: "22 Years ",
            text: " 22 Years"
           },
           {
            value: "23 Years ",
            text: " 23 Years"
           },
           {
            value: "24 Years ",
            text: " 24 Years"
           },
           {
            value: "25 Years ",
            text: " 25 Years"
           },
           {
            value: "26 Years ",
            text: " 26 Years"
           },
           {
            value: "27 Years ",
            text: " 27 Years"
           },
           {
            value: "28 Years ",
            text: " 28 Years"
           },
           {
            value: "29 Years ",
            text: " 29 Years"
           },
           {
            value: "30 Years ",
            text: " 30 Years"
           },
           {
            value: "31 Years ",
            text: " 31 Years"
           },
           {
            value: "32 Years ",
            text: " 32 Years"
           },
           {
            value: "33 Years ",
            text: " 33 Years"
           },
           {
            value: "34 Years ",
            text: " 34 Years"
           },
           {
            value: "35 Years ",
            text: " 35 Years"
           },
           {
            value: "36 Years ",
            text: " 36 Years"
           },
           {
            value: "37 Years ",
            text: " 37 Years"
           },
           {
            value: "38 Years ",
            text: " 38 Years"
           },
           {
            value: "39 Years ",
            text: " 39 Years"
           },
           {
            value: "40 Years ",
            text: " 40 Years"
           }
          ]
         },
         {
          type: "text",
          name: "What therapeutic modalities do you utilize, and why?",
          title: "What therapeutic modalities do you utilize, and why?"
         },
         {
          type: "rating",
          name: "How willing are you to receive feedback?",
          title: "How willing are you to receive feedback?",
          rateValues: [
           {
            value: "Unwilling",
            text: "Unwilling"
           },
           {
            value: "Indifferent",
            text: "Indifferent"
           },
           {
            value: "Willing",
            text: "Willing"
           },
           {
            value: "Very Willing, I invite It",
            text: "Very Willing, I invite it"
           }
          ]
         },
         {
          type: "text",
          name: "How do you create and maintain a safe/ healthy environment for your clients?",
          title: "How do you create and maintain a safe/ healthy environment for your clients?"
         },
         {
          type: "text",
          name: "Tell us your thoughts about how you handle self-disclosure in your practice?",
          title: "Tell us your thoughts about how you handle self-disclosure in your practice? "
         }
        ]
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
    <NavBar />
    <Survey.Survey
        model={survey}
        />
    </div>
);

}
export default withRouter(Ppn);