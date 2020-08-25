$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CountDashlets.feature");
formatter.feature({
  "line": 2,
  "name": "Creating multiple vacancies",
  "description": "",
  "id": "creating-multiple-vacancies",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@activity3_1"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "Creating multiple vacancies",
  "description": "",
  "id": "creating-multiple-vacancies;creating-multiple-vacancies",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on CRM Login \"https://alchemy.hguy.co/crm/\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "login with username \"admin\" and password \"pa$$w0rd\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "count and Print the number of Dashlets on the homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "Close the application",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://alchemy.hguy.co/crm/",
      "offset": 22
    }
  ],
  "location": "SuiteCRMSteps.OpenCRMLoginPage(String)"
});
formatter.result({
  "duration": 50387537600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    },
    {
      "val": "pa$$w0rd",
      "offset": 42
    }
  ],
  "location": "SuiteCRMSteps.login_with_username_and_password(String,String)"
});
formatter.result({
  "duration": 18585113900,
  "status": "passed"
});
formatter.match({
  "location": "SuiteCRMSteps.count_And_Print_number_of_Dashlets()"
});
formatter.result({
  "duration": 1277115700,
  "status": "passed"
});
formatter.match({
  "location": "SuiteCRMSteps.closeBrowser()"
});
formatter.result({
  "duration": 1821847900,
  "status": "passed"
});
});