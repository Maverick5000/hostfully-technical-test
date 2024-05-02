describe("The Home Page", () => {
  it("successfully loads and has correct links", () => {
    cy.visit("/");
    cy.get('[data-testid="home-link"]').should("have.length", 1);
    cy.get('[data-testid="my-bookings-link"]').should("have.length", 1);
    cy.get('[data-testid="my-bookings-link"]').should(
      "have.text",
      "My Bookings (2)",
    );
  });
});
