describe("Update a booking", () => {
  it("successfully updates a booking", () => {
    cy.visit("/bookings");
    cy.get('[data-testid="update-booking-button"]').first().click();
    cy.get("span").contains("11").click();
    cy.get("span").contains("12").click();
    cy.get('[data-testid="submit-book-button"]').click();
    cy.get("p").contains("From: June 11, 2024").should("exist");
    cy.get("p").contains("To: June 12, 2024").should("exist");
    cy.get('[data-testid="my-bookings-link"]').should(
      "have.text",
      "My Bookings (2)",
    );
  });
});
