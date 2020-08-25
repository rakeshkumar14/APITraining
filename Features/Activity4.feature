@activity4
Feature: Creating multiple vacancies 

  @tag1
  Scenario Outline: Creating multiple vacancies
    Given User is on "http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login" page
  	When User enters "orange" and "orangepassword123"
    Then Add new vacancy as  "<VacancyName>" and "<HiringManager>"
    And Close the browser
  	
 Examples:
 | VacancyName | HiringManager |
 | Test Eng 1232341  | Robert Downey |
 | Test Eng 1236661  | Robert Downey |