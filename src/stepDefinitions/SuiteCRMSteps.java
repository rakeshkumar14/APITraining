package stepDefinitions;

import static org.junit.Assert.assertEquals;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SuiteCRMSteps {
	
	WebDriver driver;
	WebDriverWait wait;
	@Given("^User is on CRM Login \"([^\"]*)\" page$")
	public void OpenCRMLoginPage(String appURL) {
		driver = new FirefoxDriver();
		wait = new WebDriverWait(driver,60);
		driver.get(appURL);
	//	driver.get("https://alchemy.hguy.co//jobs//wp-admin");
		
	}

	@When("^login with username \"([^\"]*)\" and password \"([^\"]*)\"$")
	public void login_with_username_and_password(String username, String password) throws Throwable {
		driver.findElement(By.id("user_name")).sendKeys(username);
		driver.findElement(By.id("username_password")).sendKeys(password);
		driver.findElement(By.xpath("//*[@id='loginform']//*[@id='bigbutton']")).click();
	}

	@Then("^count and Print the number of Dashlets on the homepage$")
	public void count_And_Print_number_of_Dashlets() throws Throwable {
 		List<WebElement> dashlet;
 		int count;
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("/html/body/div[3]/div/div/div[@class='dashboard']"))).isDisplayed();
		dashlet = driver.findElements(By.xpath("//td[@class='dashlet-title']/h3/span[2]"));
	    count = dashlet.size();
	    System.out.println("Number of Dashlets : " +count);		    
	    for (int i = 0; i < dashlet.size(); i++) {
	    	String Dashlets = dashlet.get(i).getText();
	    	System.out.println(Dashlets);
		}
	    
	}
	
	//===============Create lead
	
	String fullName;
	@Then("^Create a Lead with details as \"(.*)\" \"(.*)\" and \"(.*)\"$")
	public void create_lead_accounts(String firstname, String lastname, String country) throws Throwable {
	    WebElement Sales = driver.findElement(By.xpath("//div[@id='toolbar']/ul/li[2]/span"));
	    Actions actions = new Actions(driver);
	    actions.moveToElement(Sales).perform();
	    driver.findElement(By.id("moduleTab_9_Leads")).click();
	    wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[contains(text(),'Create Lead')]"))).click();
	    wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"first_name\"]"))).click();
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id=\"first_name\"]"))).sendKeys(firstname);
		driver.findElement(By.id("last_name")).sendKeys(lastname);
		driver.findElement(By.id("primary_address_country")).sendKeys(country);
		fullName = firstname +" "+ lastname;
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div/input[@title='Save']")));
	    WebElement saveLead = driver.findElement(By.xpath("//div/input[@title='Save']"));
	    JavascriptExecutor jseLead = (JavascriptExecutor)driver;
	    jseLead.executeScript("arguments[0].click()", saveLead);
	}
	
	@Then("^navigate to the View Leads page to see results$")
	public void navigate_to_the_View_Leads_page_to_see_results() throws Throwable {
		driver.findElement(By.xpath("//div[contains(text(),'View Leads')]")).click();
		String Name = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//div[@class='list-view-rounded-corners']/table/tbody/tr/td[3]/b/a"))).getText();
		System.out.println(Name);
		assertEquals(fullName, Name);
	}

	
	@And("^Close the application$")	
    public void closeBrowser() throws Throwable {	
       driver.quit();	
    }


}
