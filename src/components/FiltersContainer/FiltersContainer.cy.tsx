import TodoProvider from "@/context/TodoContext/TodoContext";
import FiltersContainer from "./FiltersContainer";

describe("<FiltersContainer />", () => {
  beforeEach(() => {
    cy.mount(
      <TodoProvider>
        <FiltersContainer />
      </TodoProvider>
    );
  });

  it("renders", () => {});

  it("has 4 buttons", () => {
    cy.get("button").should("have.length", "4");
  });

  it("checked btn changes", () => {
    cy.get("button").eq(0).should("have.class", "btn-checked");
    cy.get("button").eq(1).click().should("have.class", "btn-checked");
  });
});
