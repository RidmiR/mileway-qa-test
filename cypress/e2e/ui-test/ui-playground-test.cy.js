/// <reference types="cypress" />

describe('UI test cases for UI playground', () => {

  const UiBaseUrl = "http://uitestingplayground.com";
  const BTN_HIDDEN = "button[class=\'btn btn-primary\']",
    BTN_AJAX_REQUEST = "#ajaxButton",
    LBL_REQUEST_SUCCESS = ".bg-success",
    INPUT_USERNAME = ".form-control[name=UserName]",
    INPUT_PASSWORD = ".form-control[name=Password]",
    BTN_LOGIN = "#login",
    LBL_LOGIN_SUCCESS = "#loginstatus";

  const loginDetails = {
    username: "UiTest",
    password: "pwd"
  }

  it('Find a button in the scroll view and click it', () => {

    cy.visit(UiBaseUrl + '/scrollbars');
    // Find the button within the scrollable view
    cy.get(BTN_HIDDEN).scrollIntoView();
    cy.get(BTN_HIDDEN).click();
  });

  it("verify the message by wait AJAX request to process", () => {

    cy.visit(UiBaseUrl + "/ajax");
    // Intercept AJEX requests
    cy.intercept("GET", "/ajaxdata").as("text");
    // Click the button and wait AJAX request to process
    cy.get(BTN_AJAX_REQUEST).click().wait("@text");
    cy.get(LBL_REQUEST_SUCCESS).contains("Data loaded with AJAX get request.").click();
  });

  it("Verify the user login and the succesfull login message", () => {

    cy.visit(UiBaseUrl + "/sampleapp");
    // Find and fill in the username input field
    cy.get(INPUT_USERNAME).type("UiTest");
    // Find and fill in the password input field
    cy.get(INPUT_PASSWORD).type("pwd");
    // Find and submit the login form
    cy.get(BTN_LOGIN).click();
    // Verify the succesfull message
    cy.get(LBL_LOGIN_SUCCESS).should("contain", "Welcome, UiTest!");
  });

  it("Verify user login with empty username and verify the error message", () => {

    cy.visit(UiBaseUrl + "/sampleapp");
    // Find and fill in the password input field
    cy.get(INPUT_PASSWORD).type(loginDetails.password);
    cy.get(BTN_LOGIN).click();
    // Verify the error message
    cy.get(LBL_LOGIN_SUCCESS).should("contain", "Invalid username/password");
  });
});












