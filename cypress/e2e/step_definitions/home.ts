import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

Given("I go to testpage page", () => {
  cy.visit("/");
});

Then("I see the logo", () => {
  cy.get('#logo').should('be.visible')
});

