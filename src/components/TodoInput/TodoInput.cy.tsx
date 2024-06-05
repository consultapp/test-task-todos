import TodoInput from "./TodoInput";

describe("<TodoInput />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<TodoInput />);
  });
});
