$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Activity1.feature");
formatter.feature({
  "line": 2,
  "name": "Create a new user",
  "description": "",
  "id": "create-a-new-user",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Activity1"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Visit the site�s backend and create a new user",
  "description": "",
  "id": "create-a-new-user;visit-the-site�s-backend-and-create-a-new-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on \"\u003cAppURL\u003e\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"\u003cUserid\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User view the Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Navigate to the Recruitment page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to the Add Job Vacancy form",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Input the Job Vacancy details as \"\u003cJobTitle\u003e\" \"\u003cVacancyName\u003e\" \"\u003cHiringManager\u003e\" \"\u003cNumOfPosition\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Navigate to the Recruitment page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify \"\u003cVacancyName\u003e\" is added in Vacancy dropdown",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "create-a-new-user;visit-the-site�s-backend-and-create-a-new-user;",
  "rows": [
    {
      "cells": [
        "AppURL",
        "Userid",
        "Password",
        "JobTitle",
        "VacancyName",
        "HiringManager",
        "NumOfPosition"
      ],
      "line": 22,
      "id": "create-a-new-user;visit-the-site�s-backend-and-create-a-new-user;;1"
    },
    {
      "cells": [
        "http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login",
        "orange",
        "orangepassword123",
        "Java Developer",
        "Test Manager13",
        "Test Tester",
        "5"
      ],
      "line": 23,
      "id": "create-a-new-user;visit-the-site�s-backend-and-create-a-new-user;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Visit the site�s backend and create a new user",
  "description": "",
  "id": "create-a-new-user;visit-the-site�s-backend-and-create-a-new-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Activity1"
    },
    {
      "line": 5,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on \"http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login\" page",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User enters \"orange\" and \"orangepassword123\"",
  "matchedColumns": [
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User view the Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Navigate to the Recruitment page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Navigate to the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Navigate to the Add Job Vacancy form",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "Input the Job Vacancy details as \"Java Developer\" \"Test Manager13\" \"Test Tester\" \"5\"",
  "matchedColumns": [
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Click the Save button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "Navigate to the Recruitment page",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify \"Test Manager13\" is added in Vacancy dropdown",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
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
  "duration": 13754414800,
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
  "duration": 2371986800,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.viewtheDashboard()"
});
formatter.result({
  "duration": 14667900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.openRecruitmentPage()"
});
formatter.result({
  "duration": 4203972900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.openvacanciesPage()"
});
formatter.result({
  "duration": 3115930400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.openAddJobVacancyPage()"
});
formatter.result({
  "duration": 883012500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Java Developer",
      "offset": 34
    },
    {
      "val": "Test Manager13",
      "offset": 51
    },
    {
      "val": "Test Tester",
      "offset": 68
    },
    {
      "val": "5",
      "offset": 82
    }
  ],
  "location": "OrangeHRMSteps.enterUserDetails(String,String,String,String)"
});
formatter.result({
  "duration": 508590000,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.submituserdetails()"
});
formatter.result({
  "duration": 1564859500,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.openRecruitmentPage()"
});
formatter.result({
  "duration": 4146840100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Manager13",
      "offset": 8
    }
  ],
  "location": "OrangeHRMSteps.VerifyVacancydropdown(String)"
});
formatter.result({
  "duration": 95744737900,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.closeBrowser()"
});
formatter.result({
  "duration": 4058913300,
  "status": "passed"
});
});