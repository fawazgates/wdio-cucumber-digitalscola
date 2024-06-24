Feature: Login

  Scenario: User success login
    Given I am on the login page
    When I login with valid credentials
    Then I should see the dashboard

  Scenario: Add item to cart
    Given I am logged in
    When I add an item to the cart
    Then the item should be added to the cart