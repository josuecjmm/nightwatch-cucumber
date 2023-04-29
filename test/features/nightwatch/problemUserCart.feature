Feature: Problem User Cart

  Background: Access app
    Given I open the Login page
    When I login as "problem_user" with password "secret_sauce"
    Then I should see the landing page

  Scenario: Add Items to the Cart
    Given I open the Cart
    Then I should see the Cart empty
    When I go back to the Landing page
    Then I should see the landing page
    When I add the item in position "1" to the Cart
    And I open the Cart
    Then I should see "1" item in the Cart

  Scenario: Remove Items from the Cart
    When I add the item in position "1" to the Cart
    And I open the Cart
    Then I should see "1" item in the Cart
    When I remove the item "0" from the Cart
    Then I should see the Cart empty

  Scenario: Checkout Items from the Cart
    When I add the item in position "1" to the Cart
    And I open the Cart
    Then I should see "1" item in the Cart
    When I hit the Checkout option
    And Fill the Checkout with name "Josue" "Martinez" zip "10305"
    Then I see the total of the Checkout
    When I finish the Order
    Then I will see Thank You message