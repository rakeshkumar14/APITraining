$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Activity2.feature");
formatter.feature({
  "line": 2,
  "name": "Adding a candidate for recruitment",
  "description": "",
  "id": "adding-a-candidate-for-recruitment",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity2"
    }
  ]
});
formatter.scenarioOutline({
  "line": 4,
  "name": ":  Add information about a candidate for recruitment",
  "description": "",
  "id": "adding-a-candidate-for-recruitment;:--add-information-about-a-candidate-for-recruitment",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "User is on \"\u003cAppURL\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cUserid\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#\tThen User view the Dashboard page"
    },
    {
      "line": 8,
      "value": "# \tAnd Navigate to the Recruitment page"
    },
    {
      "line": 9,
      "value": "#\tAnd  click on the Add button to add candidateinformation"
    }
  ],
  "line": 10,
  "name": "Add new candidate details",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "adding-a-candidate-for-recruitment;:--add-information-about-a-candidate-for-recruitment;",
  "rows": [
    {
      "cells": [
        "AppURL",
        "Userid",
        "Password"
      ],
      "line": 13,
      "id": "adding-a-candidate-for-recruitment;:--add-information-about-a-candidate-for-recruitment;;1"
    },
    {
      "cells": [
        "http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login",
        "orange",
        "orangepassword123"
      ],
      "line": 14,
      "id": "adding-a-candidate-for-recruitment;:--add-information-about-a-candidate-for-recruitment;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": ":  Add information about a candidate for recruitment",
  "description": "",
  "id": "adding-a-candidate-for-recruitment;:--add-information-about-a-candidate-for-recruitment;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@activity2"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on \"http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User enters \"orange\" and \"orangepassword123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "comments": [
    {
      "line": 7,
      "value": "#\tThen User view the Dashboard page"
    },
    {
      "line": 8,
      "value": "# \tAnd Navigate to the Recruitment page"
    },
    {
      "line": 9,
      "value": "#\tAnd  click on the Add button to add candidateinformation"
    }
  ],
  "line": 10,
  "name": "Add new candidate details",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login",
      "offset": 12
    }
  ],
  "location": "OrangeHRMSteps.OpenLoginPage(String)"
});
formatter.result({
  "duration": 8786917800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "orange",
      "offset": 13
    },
    {
      "val": "orangepassword123",
      "offset": 26
    }
  ],
  "location": "OrangeHRMSteps.loginToApp(String,String)"
});
formatter.result({
  "duration": 1672437700,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.adduser()"
});
formatter.result({
  "duration": 4861587800,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.closeBrowser()"
});
formatter.result({
  "duration": 2057639400,
  "status": "passed"
});
});