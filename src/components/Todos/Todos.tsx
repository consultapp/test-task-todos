import { useTodos } from "@/context/TodoContext";
import Todo from "@/components/Todo/Todo";

export default function Todos() {
  const todos = useTodos();

  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} />
      ))}
    </div>
  );
}
