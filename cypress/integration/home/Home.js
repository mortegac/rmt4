describe("Test in Home Page", () => {
  it("Can Load the webpage", () => {
    cy.visit(`${Cypress.config().baseUrl}/`);
    //that es-us/cookies is nonly for testing
  });
});
