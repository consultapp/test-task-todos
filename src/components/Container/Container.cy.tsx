import Container from "./Container";

describe("<Container />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Container />);
  });
});
