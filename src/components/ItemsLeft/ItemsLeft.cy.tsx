import ItemsLeft from "./ItemsLeft";

describe("<ItemsLeft />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<ItemsLeft />);
  });
});
