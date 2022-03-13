describe("On visit, the visitor", () => {
  before(() => {
    cy.intercept("GET", "https://newsapi.org/v2/top-headlines?country=se**", {
      fixture: "news_index.json",
    }).as("newsIndex");
    cy.visit("/");
  });

  it("is expected to make a network call to NewsAPI", () => {
    cy.wait("@newsIndex").its("request.method").should("eq", "GET");
  });

  it("is expected to see a collection of news", () => {
    cy.get('[data-cy="news-items"]').should("have.lenght", 3);
  });
});
