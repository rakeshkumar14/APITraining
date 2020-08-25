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
      "name": "@activity3_2"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Create leads",
  "description": "",
  "id": "creating-multiple-vacancies;create-leads",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@CreateLeads"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User is on CRM Login \"https://alchemy.hguy.co/crm/\" page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "login with username \"admin\" and password \"pa$$w0rd\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Create a Lead with details as \"Rakesh1\" \"Singh1\" and \"India\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "navigate to the View Leads page to see results",
  "keyword": "And "
});
formatter.step({
  "line": 11,
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
  "duration": 33692811900,
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
  "duration": 9978083600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rakesh1",
      "offset": 31
    },
    {
      "val": "Singh1",
      "offset": 41
    },
    {
      "val": "India",
      "offset": 54
    }
  ],
  "location": "SuiteCRMSteps.create_lead_accounts(String,String,String)"
});
formatter.result({
  "duration": 633749726900,
  "status": "passed"
});
formatter.match({
  "location": "SuiteCRMSteps.navigate_to_the_View_Leads_page_to_see_results()"
});
formatter.result({
  "duration": 27325385800,
  "status": "passed"
});
formatter.match({
  "location": "SuiteCRMSteps.closeBrowser()"
});
formatter.result({
  "duration": 2218303200,
  "status": "passed"
});
});