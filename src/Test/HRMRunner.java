package Test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features = "C:\\Raksh\\Tranning\\SDET\\OrangeHRM\\Features",
    glue = {"stepDefinitions"},
    tags = {"@activity3_2"},
    plugin = {"html: test-reports"},
    strict = false
)
public class HRMRunner {

}
