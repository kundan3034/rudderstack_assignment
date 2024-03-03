Feature: The connection between source and destination

  Scenario Outline: As a user, I should see the connection exists between source and destination on the connection page

    Given I login to rudderstack with credentials for <env> environment
    Then I should see connection <exists> between <source> and <destination>

    Examples:
      | source               | destination             | exists         | env |
      | HTTP dev test source | Webhook dev test        | exists           | prod |
     
    

