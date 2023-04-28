Feature: Login

  Background: Access app
    Given I open the Login page

  Scenario: Positive Login
    When I login as "standard_user" with password "secret_sauce"
    Then I should see the landing page

  Scenario: Negative Login
    When I login as "negative_user" with password "test"
    Then I should see the error message on Login