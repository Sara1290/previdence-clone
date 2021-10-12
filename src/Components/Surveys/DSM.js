import React from 'react';
import * as Survey from "survey-react";
import NavBarTwo from '../NavBarTwo'
import "survey-react/modern.css";


const DSM = () => {
  Survey.StylesManager.applyTheme("modern");
  
  const json = {
    surveyId: '265752f1-d993-4444-9dcf-2c7d8e749e01',
    surveyPostId: 'fcf7a9d7-8cb4-4058-8666-df5abe1a52c4',
    title: "Weber School District DSM-5 Age 11–17",
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
       title: "Been bothered by stomachaches, headaches, or other aches and pains?",
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
       title: "Worried about your health or about getting sick? ",
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
     title: "During the past TWO (2) WEEKS, how much (or how often) have you",
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Sleep Problems",
     elements: [
      {
       type: "radiogroup",
       name: "II-1",
       title: "Been bothered by not being able to fall asleep or stay asleep, or by waking \nup too early?",
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
       title: "Been bothered by not being able to pay attention when you were in class or \ndoing homework or reading a book or playing a game?",
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
       title: "Had less fun doing things than you used to? ",
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
       title: "Felt sad or depressed for several hours?",
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
       title: "Felt more irritated or easily annoyed than usual?",
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
       title: "Felt angry or lost your temper",
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
       title: "Slept less than usual but still had a lot of energy?",
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
       title: "Felt nervous, anxious, or scared? ",
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
       title: "Not been able to do things you wanted to or should have done, because  they made you feel nervous?",
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
       title: "Heard voices—when there was no one there—speaking about you or telling  you what to do or saying bad things to you?",
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
       title: "Had visions when you were completely awake—that is, seen something or  someone that no one else could see?",
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
       title: "Had thoughts that kept coming into your mind that you would do  something bad or that something bad would happen to you or to someone else?",
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
       title: "Felt the need to check on certain things over and over again, like whether a  door was locked or whether the stove was turned off?",
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
       title: "Worried a lot about things you touched being dirty or having germs or being  poisoned?",
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
       title: "Felt you had to do things in a certain way, like counting or saying special things, to keep something bad from happening?",
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
         value: "1",
         text: "Yes"
        },
        {
         value: "0",
         text: "No"
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
         value: "1",
         text: "Yes"
        },
        {
         value: "0",
         text: "No"
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
         value: "1",
         text: "Yes"
        },
        {
         value: "0",
         text: "No"
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
         value: "1",
         text: "Yes"
        },
        {
         value: "0",
         text: "No"
        }
       ],
       colCount: 5
      }
     ],
     title: "In the last 2 weeks have you",
     showQuestionNumbers: "off"
    },
    {
     type: "panel",
     name: "Suicidal Ideation/  Suicide Attempts",
     elements: [
      {
       type: "radiogroup",
       name: "XII-1",
       title: "thought about killing yourself or committing  suicide?",
       isRequired: true,
       choices: [
        {
         value: "1",
         text: "Yes"
        },
        {
         value: "0",
         text: "No"
        }
       ],
       colCount: 5
      },
      {
       type: "radiogroup",
       name: "XII-2",
       title: "EVER tried to kill yourself?",
       isRequired: true,
       choices: [
        {
         value: "1",
         text: "Yes"
        },
        {
         value: "0",
         text: "No"
        }
       ],
       colCount: 5
      }
     ],
     title: "In the last 2 weeks have you",
     showQuestionNumbers: "off"
    }
   ],
   title: "DSM-5 Self-Rated Level 1 Cross-Cutting Symptom Measure—Child Age 11–17"
  }
 ],
 showPageTitles: false
  }
  

  const survey = new Survey.Model(json);

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


return (
  <div className="survey" id="surveyResult">
  <NavBarTwo />
  <h1>DSM Survey</h1>
  <Survey.Survey
      model={survey}
      />
  </div>
);

}
export default DSM;
