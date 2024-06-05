import { useFilteredTodos } from "@/context/TodoContext";
import Todo from "@/components/Todo/Todo";
import TodoInput from "../TodoInput/TodoInput";

export default function Todos() {
  const todos = useFilteredTodos();

  return (
    <div className="flex flex-col">
      <TodoInput />
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  );
}
