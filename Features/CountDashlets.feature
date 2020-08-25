@activity3_2
Feature: Creating multiple vacancies 

    
  @CreateLeads
  Scenario: Create leads 
    Given User is on CRM Login "https://alchemy.hguy.co/crm/" page
    When login with username "admin" and password "pa$$w0rd"
		Then Create a Lead with details as "Rakesh1" "Singh1" and "India"
		And navigate to the View Leads page to see results
		And Close the application
  	