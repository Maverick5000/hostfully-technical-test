describe("Create a booking", () => {
  const createBooking = () => {
    cy.get('[data-testid="book-button"]').first().click();
    cy.get('[name="firstName"]').type("test");
    cy.get('[name="lastName"]').type("test");
    cy.get('[name="email"]').type("test@test.com");
    cy.get('[data-testid="submit-book-button"]').click();
  };

  it("successfully creates a booking", () => {
    cy.visit("/");
    createBooking();
    cy.get('[data-testid="my-bookings-link"]').should(
      "have.text",
      "My Bookings (3)",
    );
  });

  it("fails to create a booking with overlapping dates", () => {
    cy.visit("/");
    createBooking();
    createBooking();
    cy.get('[data-testid="my-bookings-link"]').should(
      "have.text",
      "My Bookings (3)",
    );
    cy.get("div")
      .contains("You already have a booking on those dates.")
      .should("exist");
  });
});
