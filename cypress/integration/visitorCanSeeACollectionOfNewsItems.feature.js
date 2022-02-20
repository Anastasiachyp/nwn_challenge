describe("A User can,", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("see the news list correctly", () => {
    cy.get("[data-cy='news-index']").within(() => {
      cy.contains("DBS Bank to launch cryptocurrency exchange after condemning Bitcoin a Ponzi scheme in 2017");
    });
  });
});
