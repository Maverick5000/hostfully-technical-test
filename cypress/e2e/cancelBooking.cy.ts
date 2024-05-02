describe("Create a booking", () => {
  it("successfully creates a booking", () => {
    cy.visit("/bookings");
    cy.get('[data-testid="cancel-booking-button"]').first().click();
    cy.get('[data-testid="cancel-booking-submit-button"]').click();
    cy.get('[data-testid="my-bookings-link"]').should(
      "have.text",
      "My Bookings (1)",
    );
  });
});
