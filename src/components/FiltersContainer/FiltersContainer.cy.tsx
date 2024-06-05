import FiltersContainer from "./FiltersContainer";

describe("<FiltersContainer />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<FiltersContainer />);
  });
});
