import TodoProvider from "@/context/TodoContext/TodoContext";
import Todos from "./Todos";

describe("<Todos />", () => {
  beforeEach(() => {
    cy.mount(
      <TodoProvider>
        <Todos />
      </TodoProvider>
    );
  });

  it("renders", () => {});

  it("has correct line count", () => {
    cy.get(".line").should("have.length", 4);
  });

  it("delete btn works", () => {
    cy.get(".line").should("have.length", 4);
    cy.get(".iconBtn").first().click();
    cy.get(".line").should("have.length", 3);
  });
});
