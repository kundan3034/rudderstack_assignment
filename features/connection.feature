Feature: The connection between source and destination

  Scenario Outline: As a user, I should see the connection exists between source and destination on the connection page

    Given I login to rudderstack with <username> and <password>
    
   

    Examples:
      | source               | destination             | connection         | username | password    |
      | HTTP dev test source | Webhook dev test        | Yes              | kundan@hackerearth.com | Test@123456789 |
     
    

