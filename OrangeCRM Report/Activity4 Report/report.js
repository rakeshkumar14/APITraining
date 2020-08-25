$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Activity4.feature");
formatter.feature({
  "line": 2,
  "name": "Creating multiple vacancies",
  "description": "",
  "id": "creating-multiple-vacancies",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity4"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Creating multiple vacancies",
  "description": "",
  "id": "creating-multiple-vacancies;creating-multiple-vacancies",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on \"http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"orange\" and \"orangepassword123\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add new vacancy as  \"\u003cVacancyName\u003e\" and \"\u003cHiringManager\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "creating-multiple-vacancies;creating-multiple-vacancies;",
  "rows": [
    {
      "cells": [
        "VacancyName",
        "HiringManager"
      ],
      "line": 12,
      "id": "creating-multiple-vacancies;creating-multiple-vacancies;;1"
    },
    {
      "cells": [
        "Test Eng 1232341",
        "Robert Downey"
      ],
      "line": 13,
      "id": "creating-multiple-vacancies;creating-multiple-vacancies;;2"
    },
    {
      "cells": [
        "Test Eng 1236661",
        "Robert Downey"
      ],
      "line": 14,
      "id": "creating-multiple-vacancies;creating-multiple-vacancies;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "Creating multiple vacancies",
  "description": "",
  "id": "creating-multiple-vacancies;creating-multiple-vacancies;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@activity4"
    },
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on \"http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"orange\" and \"orangepassword123\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add new vacancy as  \"Test Eng 1232341\" and \"Robert Downey\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
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
  "duration": 17476510600,
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
  "duration": 7423152800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Eng 1232341",
      "offset": 21
    },
    {
      "val": "Robert Downey",
      "offset": 44
    }
  ],
  "location": "OrangeHRMSteps.adduser(String,String)"
});
formatter.result({
  "duration": 169179424000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.closeBrowser()"
});
formatter.result({
  "duration": 3697034800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Creating multiple vacancies",
  "description": "",
  "id": "creating-multiple-vacancies;creating-multiple-vacancies;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@activity4"
    },
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on \"http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User enters \"orange\" and \"orangepassword123\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Add new vacancy as  \"Test Eng 1236661\" and \"Robert Downey\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
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
  "duration": 9705109900,
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
  "duration": 11390404700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Eng 1236661",
      "offset": 21
    },
    {
      "val": "Robert Downey",
      "offset": 44
    }
  ],
  "location": "OrangeHRMSteps.adduser(String,String)"
});
formatter.result({
  "duration": 45355810200,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.closeBrowser()"
});
formatter.result({
  "duration": 8994527000,
  "status": "passed"
});
});