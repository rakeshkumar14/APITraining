@activity3
Feature: Add multiple employees 

  @tag1
  Scenario Outline: Add multiple employees using an the Examples table
    Given User is on "http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login" page
  	When User enters "orange" and "orangepassword123"
    Then Add new candidate
    Then Enter the details as "<Fullname>" and "<Lastname>" and "<username>" and "<password>"
    And Close the browser
  	
 Examples:
 | Fullname | Lastname | username | password |
 | Rakesh Kumar Singh  | Singh |Rakesh1123|September1234|
 | Rakesh Singh1  | Singh1 |Rakesh1124|September1235|