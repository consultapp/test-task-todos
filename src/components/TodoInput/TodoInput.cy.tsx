import TodoProvider from "@/context/TodoContext/TodoContext";
import TodoInput from "./TodoInput";

describe("<TodoInput />", () => {
  beforeEach(() => {
    cy.mount(
      <TodoProvider>
        <TodoInput />
      </TodoProvider>
    );
  });

  it("renders", () => {});

  it("type Test task, empty after Enter", () => {
    cy.get("input")
      .type("Test task")
      .trigger("keydown", {
        key: "Enter",
      })
      .should("be.empty");
  });
});
