@Activity1
Feature: Creating a job vacancy
  

  @tag1
  Scenario Outline: To create a job vacancy for “DevOps Engineer
    Given User is on "<AppURL>" page
  	When User enters "<Userid>" and "<Password>"
  	Then User view the Dashboard page
  	And Navigate to the Recruitment page
  	And Navigate to the vacancies page
  	And Navigate to the Add Job Vacancy form
  	And Input the Job Vacancy details as "<JobTitle>" "<VacancyName>" "<HiringManager>" "<NumOfPosition>"
  	And Click the Save button
  	And Navigate to the Recruitment page
  	Then Verify "<VacancyName>" is added in Vacancy dropdown
  	And Close the browser
  
  
  	
Examples:
|AppURL|Userid | Password | JobTitle | VacancyName |HiringManager|NumOfPosition|
|http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login|orange | orangepassword123 | Java Developer | Test Manager13 |Test Tester|5|