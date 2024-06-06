import TodoProvider from "@/context/TodoContext/TodoContext";
import Container from "./Container";

describe("<Container />", () => {
  beforeEach(() => {
    cy.mount(
      <TodoProvider>
        <Container />
      </TodoProvider>
    );
  });

  it("renders", () => {});

  it("has title", () => {
    cy.get("h1").should("have.text", "todos");
  });
});
