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
