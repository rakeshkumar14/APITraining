@activity2
Feature: Adding a candidate for recruitment

Scenario Outline::  Add information about a candidate for recruitment
    Given User is on "<AppURL>" page
  	When User enters "<Userid>" and "<Password>"
  #	Then User view the Dashboard page
 # 	And Navigate to the Recruitment page
  #	And  click on the Add button to add candidateinformation
    Then Add new candidate details
    And Close the browser
Examples:
 |AppURL   | Userid | Password |
 | http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login  | orange     | orangepassword123  |