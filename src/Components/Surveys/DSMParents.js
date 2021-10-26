import React from 'react';
import * as Survey from "survey-react";
import NavBar from '../NavBar'
import "survey-react/modern.css";


const DSMParents = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: 'a2efd309-3c61-4af9-9ec0-9693f9f09b7e',
    surveyPostId: '4517e4dc-d75e-4b4d-81c1-52aa28092a73', 
    title: "Weber School District DSM-5 Parent/Guardian Child Age 6–17",
 pages: [
  {
   name: "Student Info",
   elements: [
    {
     type: "radiogroup",
     name: "Gender",
     title: "Student gender",
     hideNumber: true,
     choices: [
      {
       value: "item1",
       text: "Male"
      },
      {
       value: "item2",
       text: "Female"
      },
      {
       value: "item3",
       text: "Non-Binary"
      }
     ]
    },
    {
     type: "dropdown",
     name: "Grade",
     title: "Student grade",
     hideNumber: true,
     choices: [
      {
       value: "item1",
       text: "1st grade"
      },
      {
       value: "item2",
       text: "2nd grade"
      },
      {
       value: "item3",
       text: "3rd grade"
      },
      {
       value: "item4",
       text: "4th grade"
      },
      {
       value: "item5",
       text: "5th grade"
      },
      {
       value: "item6",
       text: "6th grade"
      },
      {
       value: "item7",
       text: "7th grade"
      },
      {
       value: "item8",
       text: "8th grade"
      },
      {
       value: "item9",
       text: "9th grade"
      },
      {
       value: "item10",
       text: "10th grade"
      },
      {
       value: "item11",
       text: "11th grade"
      },
      {
       value: "item12",
       text: "12th grade"
      }
     ]
    },
    {
     type: "dropdown",
     name: "Race",
     title: "Student race",
     hideNumber: true,
     choices: [
      {
       value: "item1",
       text: "African American"
      },
      {
       value: "item2",
       text: "American Indian or Alaska Native"
      },
      {
       value: "item3",
       text: "Asian"
      },
      {
       value: "item4",
       text: "Caucasian"
      },
      {
       value: "item5",
       text: "Hispanic/ Latinx"
      },
      {
       value: "item6",
       text: "Mixed race"
      },
      {
       value: "item7",
       text: "Native Hawaiian or Pacific Islander"
      }
     ]
    }
   ],
   title: "Student Info"
  },
  {
   name: "DSM-5 Self-Rated Level 1 Cross-Cutting Symptom Measure—Child Age 11–17",
   elements: [
    {
     type: "panel",
     name: "Somatic Symptoms",
     elements: [
      {
       type: "radiogroup",
       name: "I-1",
       title: "Complained of stomachaches, headaches, or other aches and pains?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "I-2",
       title: "Said they were worried about their health or about getting sick?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      }
     ],
     title: "During the past TWO (2) WEEKS, how much (or how often) has your child",
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Sleep Problems",
     elements: [
      {
       type: "radiogroup",
       name: "II-1",
       title: "Had problems sleeping—that is, trouble falling asleep, staying asleep, or waking up too early?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Inattention",
     elements: [
      {
       type: "radiogroup",
       name: "III-1",
       title: "Had problems paying attention when they were in class or doing their \nhomework or reading a book or playing a game?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Depression",
     elements: [
      {
       type: "radiogroup",
       name: "IV-1",
       title: "Had less fun doing things than they used to? ",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "IV-2",
       title: "Seemed sad or depressed for several hours?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Anger & Irritability",
     elements: [
      {
       type: "radiogroup",
       name: "V&VI-1",
       title: "Seemed more irritated or easily annoyed than usual?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "V&VI-2Felt angry or lost your temper",
       title: "Seemed angry or lost their temper?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Mania",
     elements: [
      {
       type: "radiogroup",
       name: "VII-1",
       title: "Started lots more projects than usual or done more risky things than usual? ",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "VII-2",
       title: "Slept less than usual for them, but still had lots of energy?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Anxiety",
     elements: [
      {
       type: "radiogroup",
       name: "VIII-1",
       title: "Said they felt nervous, anxious, or scared?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "VIII-2",
       title: "Not been able to stop worrying?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "VIII-3",
       title: "Said they couldn’t do things they wanted to or should have done,\nbecause they made them feel nervous?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Psychosis",
     elements: [
      {
       type: "radiogroup",
       name: "IX-1",
       title: "Said that they heard voices—when there was no one there—speaking \nabout them or telling them what to do or saying bad things to them?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "IX-2",
       title: "Said that they had a vision when they were completely awake—that is, \nsaw something or someone that no one else could see? ",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Repetitive Thoughts  & Behaviors",
     elements: [
      {
       type: "radiogroup",
       name: "X-1",
       title: "Said that they had thoughts that kept coming into their mind that they \nwould do something bad or that something bad would happen to them or \nto someone else?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "X-2",
       title: "Said they felt the need to check on certain things over and over again, like \nwhether a door was locked or whether the stove was turned off?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "X-3",
       title: "Seemed to worry a lot about things they touched being dirty or having \ngerms or being poisoned?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "X-4",
       title: "Said that they had to do things in a certain way, like counting or saying \nspecial things out loud, in order to keep something bad from happening?",
       isRequired: true,
       choices: [
        {
         value: "0",
         text: "None"
        },
        {
         value: "1",
         text: "Slight"
        },
        {
         value: "2",
         text: "Mild"
        },
        {
         value: "3",
         text: "Moderate"
        },
        {
         value: "4",
         text: "Severe"
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Substance Use",
     elements: [
      {
       type: "radiogroup",
       name: "XI-1",
       title: "Had an alcoholic beverage (beer, wine, liquor, etc.)?",
       isRequired: true,
       choices: [
        {
         value: "2",
         text: "Yes"
        },
        {
         value: "0",
         text: "No"
        },
        {
         value: "1",
         text: "Don't Know"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "XI-2",
       title: "Smoked a cigarette, a cigar, or pipe, or used snuff or chewing tobacco?",
       isRequired: true,
       choices: [
        {
         value: "2",
         text: "Yes"
        },
        {
         value: "0",
         text: "No"
        },
        {
         value: "1",
         text: "Don't Know"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "XI-3",
       title: "Used drugs like marijuana, cocaine or crack, club drugs (like Ecstasy),  hallucinogens (like LSD), heroin, inhalants or solvents (like glue), or  methamphetamine (like speed)?",
       isRequired: true,
       choices: [
        {
         value: "2",
         text: "Yes"
        },
        {
         value: "0",
         text: "No"
        },
        {
         value: "1",
         text: "Don't Know"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "XI-4",
       title: "Used any medicine without a doctor’s prescription to get high or change  the way you feel (e.g., painkillers [like Vicodin], stimulants [like Ritalin or  Adderall], sedatives or tranquilizers [like sleeping pills or Valium], or  steroids)?",
       isRequired: true,
       choices: [
        {
         value: "2",
         text: "Yes"
        },
        {
         value: "0",
         text: "No"
        },
        {
         value: "1",
         text: "Don't Know"
        }
       ],
       colCount: 5
      }
     ],
     title: "In the past TWO (2) WEEKS, has your child …",
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Suicidal Ideation/  Suicide Attempts",
     elements: [
      {
       type: "radiogroup",
       name: "XII-1",
       title: "In the past TWO (2) WEEKS, have they talked about wanting to kill \nhimself/herself or about wanting to commit suicide?",
       isRequired: true,
       choices: [
        {
         value: "2",
         text: "Yes"
        },
        {
         value: "0",
         text: "No"
        },
        {
         value: "1",
         text: "Don't Know"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "XII-2",
       title: "have they EVER tried to kill themselves?",
       isRequired: true,
       choices: [
        {
         value: "2",
         text: "Yes"
        },
        {
         value: "0",
         text: "No"
        },
        {
         value: "1",
         text: "Don't Know"
        }
       ],
       colCount: 5
      }
     ],
     showQuestionNumbers: "off"
    }
   ],
   title: "DSM-5 Self-Rated Level 1 Cross-Cutting Symptom Measure—Child Age 11–17"
  }
 ],
 showPageTitles: false
  }
  const survey = new Survey.Model(json);
  
  // survey.onComplete.add(function (sender) { 
  //   document.textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
  
  // });


  survey
    .onComplete
    .add(function (sender) {
        var panelI = sender.getAllPanels()[0];
        var panelII = sender.getAllPanels()[1];
        var panelIII = sender.getAllPanels()[2];
        var panelIV = sender.getAllPanels()[3];
        var panelVandVI = sender.getAllPanels()[4];
        var panelVII = sender.getAllPanels()[5];
        var panelVIII = sender.getAllPanels()[6];
        var panelIX = sender.getAllPanels()[7];
        var panelX = sender.getAllPanels()[8];
        var panelXI = sender.getAllPanels()[9];
        var panelXII = sender.getAllPanels()[10];
        var sum = function(w, x, y, z) {
            return Number(w) + Number(x) + Number(y) + Number(z);
        };
        var panelOne = sum(panelI.questionsValue[0].value, panelI.questionsValue[1].value, 0, 0);
        var panelTwo = sum(panelII.questionsValue[0].value, 0, 0, 0);
        var panelThree = sum(panelIII.questionsValue[0].value, 0, 0, 0);
        var panelFour = sum(panelIV.questionsValue[0].value, panelIV.questionsValue[1].value, 0, 0);
        var panelFiveAndSix = sum(panelVandVI.questionsValue[0].value, panelVandVI.questionsValue[1].value, 0, 0);
        var panelSeven = sum(panelVII.questionsValue[0].value, panelVII.questionsValue[1].value, 0, 0);
        var panelEight = sum(panelVIII.questionsValue[0].value, panelVIII.questionsValue[1].value, panelVIII.questionsValue[2].value, 0);
        var panelNine = sum(panelIX.questionsValue[0].value, panelIX.questionsValue[1].value, 0, 0);
        var panelTen = sum(panelX.questionsValue[0].value, panelX.questionsValue[1].value, panelX.questionsValue[2].value, panelX.questionsValue[3].value);
        var panelEleven = sum(panelXI.questionsValue[0].value, panelXI.questionsValue[1].value, panelXI.questionsValue[2].value, panelXI.questionsValue[3].value);
        var panelTwelve = sum(panelXII.questionsValue[0].value, panelXII.questionsValue[1].value, 0, 0);
        document
            .querySelector('#surveyResult')
            .innerHTML = `<!DOCTYPE html><style>
            body {
              color: #666;
              font: 14px/24px "Open Sans", "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", Sans-Serif;
              -webkit-print-color-adjust: exact;
            }
            table {
              border-collapse: separate;
              border-spacing: 0;
              width: 100%;
            }
            th,
            td {
              padding: 6px 15px;
            }
            th {
              background: #42444e;
              color: #fff;
              text-align: left;
            }
            tr:first-child th:first-child {
              border-top-left-radius: 6px;
            }
            tr:first-child th:last-child {
              border-top-right-radius: 6px;
            }
            td {
              border-right: 1.5px solid black;
              border-bottom: 1.5px solid black;
            }
            td:first-child {
              border-left: 1.5px solid black;
            }
            tr:nth-child(even) td {
              background: #eaeaed;
            }
            tr:last-child td:first-child {
              border-bottom-left-radius: 6px;
            }
            tr:last-child td:last-child {
              border-bottom-right-radius: 6px;
            }

            @media print {
              header {
                display: none;
              }
              #printPageButton {
                display: none;
              }
              #surveyElement {
                display: none;
              }
              #surveyResult { 
                width: 80%;
                margin-left: 5vw;
                }
                #ui-to-top {
                  display: none;
                }

</style>
<div>
<button id="printPageButton" onClick="window.print()">Print Results
</button>
<svg xmlns="http://www.w3.org/2000/svg" id="printPageButton" onClick="window.print()" width="32" height="32" fill="currentColor" class="bi bi-printer" viewBox="0 0 16 16">
  <path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
  <path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM4 3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2H4V3zm1 5a2 2 0 0 0-2 2v1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v-1a2 2 0 0 0-2-2H5zm7 2v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1z"/>
</svg>
</div>
<table class="demo">

	<thead>
	<tr>
		<th>Domains</th>

		<th>Score</th>
	</tr>
	</thead>
	<tbody>
	<tr>
		<td>${panelI.name}</td>

		<td style="${(panelOne < 3) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelOne}</td>
	</tr>
	<tr>
		<td>${panelII.name}</td>

		<td style="${(panelTwo < 2) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelTwo}</td>
	</tr>
	<tr>
		<td>${panelIII.name}</td>
		<td style="${(panelThree < 1) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelThree}</td>
	</tr>
	<tr>
		<td>${panelIV.name}</td>
		<td style="${(panelFour < 3) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelFour}</td>
	</tr>
	<tr>
		<td>${panelVandVI.name}</td>
		<td style="${(panelFiveAndSix < 3) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelFiveAndSix}</td>
	</tr>
	<tr>
		<td>${panelVII.name}</td>
		<td style="${(panelSeven < 3) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelSeven}</td>
	</tr>
	<tr>
		<td>${panelVIII.name}</td>
		<td style="${(panelEight < 4) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelEight}</td>
	</tr>
	<tr>
		<td>${panelIX.name}</td>
		<td style="${(panelNine < 1) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelNine}</td>
	</tr>
	<tr>
		<td>${panelX.name}</td>
		<td style="${(panelTen < 5) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelTen}</td>
	</tr>
	<tr>
		<td>${panelXI.name}</td>
		<td style="${(panelEleven < 1) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelEleven}</td>
	</tr>
	<tr>
		<td>${panelXII.name}</td>
		<td style="${(panelTwelve < 1) ? "color: white; background-color:green": "color: black; background-color: yellow"}">${panelTwelve}</td>
	</tr>
	<tbody>
</table>
</html>`
    });

// ReactDOM.render(<Survey.Survey model={survey} />, document.getElementById("surveyElement"));;




  return (
    <div>
    <NavBar />
    <div className="survey" id="surveyResult">
    <Survey.Survey
        model={survey}
        />
    </div>
    </div>
);

}
export default DSMParents;