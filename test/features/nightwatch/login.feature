Feature: Login
  Background: Access app
    Given I open the Login page

Scenario: Positive Login
  When I login as "standard_user" with password "secret_sauce"
  Then I should see the landing page