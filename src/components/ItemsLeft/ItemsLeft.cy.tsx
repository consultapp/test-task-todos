import TodoProvider from "@/context/TodoContext/TodoContext";
import ItemsLeft from "./ItemsLeft";

describe("<ItemsLeft />", () => {
  beforeEach(() => {
    cy.mount(
      <TodoProvider>
        <ItemsLeft />
      </TodoProvider>
    );
  });

  it("renders", () => {});

  it("has correct text", () => {
    cy.get(".itemsLeft").should("have.text", "2 items left");
  });
});
