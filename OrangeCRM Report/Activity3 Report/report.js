$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Activity3.feature");
formatter.feature({
  "line": 2,
  "name": "Add multiple employees",
  "description": "",
  "id": "add-multiple-employees",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity3"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "add-multiple-employees;add-multiple-employees-using-an-the-examples-table",
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
  "name": "Add new candidate",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the details as \"\u003cFullname\u003e\" and \"\u003cLastname\u003e\" and \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "add-multiple-employees;add-multiple-employees-using-an-the-examples-table;",
  "rows": [
    {
      "cells": [
        "Fullname",
        "Lastname",
        "username",
        "password"
      ],
      "line": 13,
      "id": "add-multiple-employees;add-multiple-employees-using-an-the-examples-table;;1"
    },
    {
      "cells": [
        "Rakesh Kumar Singh",
        "Singh",
        "Rakesh1123",
        "September1234"
      ],
      "line": 14,
      "id": "add-multiple-employees;add-multiple-employees-using-an-the-examples-table;;2"
    },
    {
      "cells": [
        "Rakesh Singh1",
        "Singh1",
        "Rakesh1124",
        "September1235"
      ],
      "line": 15,
      "id": "add-multiple-employees;add-multiple-employees-using-an-the-examples-table;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "add-multiple-employees;add-multiple-employees-using-an-the-examples-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@activity3"
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
  "name": "Add new candidate",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the details as \"Rakesh Kumar Singh\" and \"Singh\" and \"Rakesh1123\" and \"September1234\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
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
  "duration": 16865880800,
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
  "duration": 2186266400,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.adduser()"
});
formatter.result({
  "duration": 65508124700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rakesh Kumar Singh",
      "offset": 22
    },
    {
      "val": "Singh",
      "offset": 47
    },
    {
      "val": "Rakesh1123",
      "offset": 59
    },
    {
      "val": "September1234",
      "offset": 76
    }
  ],
  "location": "OrangeHRMSteps.createemployee(String,String,String,String)"
});
formatter.result({
  "duration": 16111415800,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.closeBrowser()"
});
formatter.result({
  "duration": 5945743100,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "add-multiple-employees;add-multiple-employees-using-an-the-examples-table;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@activity3"
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
  "name": "Add new candidate",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Enter the details as \"Rakesh Singh1\" and \"Singh1\" and \"Rakesh1124\" and \"September1235\"",
  "matchedColumns": [
    0,
    1,
    2,
    3
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
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
  "duration": 8079585800,
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
  "duration": 1878378600,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.adduser()"
});
formatter.result({
  "duration": 18541626400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rakesh Singh1",
      "offset": 22
    },
    {
      "val": "Singh1",
      "offset": 42
    },
    {
      "val": "Rakesh1124",
      "offset": 55
    },
    {
      "val": "September1235",
      "offset": 72
    }
  ],
  "location": "OrangeHRMSteps.createemployee(String,String,String,String)"
});
formatter.result({
  "duration": 83470641700,
  "status": "passed"
});
formatter.match({
  "location": "OrangeHRMSteps.closeBrowser()"
});
formatter.result({
  "duration": 5499611300,
  "status": "passed"
});
});