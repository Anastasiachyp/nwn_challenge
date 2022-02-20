describe("A User can,", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines**").as(
      "fetchData"
    );
    cy.visit("/");
  });

  it("see the news list correctly", () => {
    cy.get("[data-cy='news-1']").within(() => {
      cy.contains(
        "DBS Bank to launch cryptocurrency exchange after condemning Bitcoin a Ponzi scheme in 2017"
      );
    });
    it("is expected to return an array of data", () => {
      cy.get("@fetchData")
        .its("response.data.articles")
        .should("be.an", "array");
    });
  });
});
