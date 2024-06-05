import Todo from "./Todo";
import FILTERS from "@/fixtures/FILTERS";
import TodoProvider from "@/context/TodoContext/TodoContext";

const TODOS = [
  { id: 1, text: "Тестовое задание", done: FILTERS.active },
  { id: 2, text: "Прекрасный код", done: FILTERS.completed },
];

describe("<Todo />", () => {
  TODOS.map((todo) => {
    it("renders, have text:" + todo.text, () => {
      cy.mount(
        <TodoProvider>
          <Todo todo={todo} />
        </TodoProvider>
      );
      cy.get("div.line > div").should("have.text", todo.text);
    });
  });
});
