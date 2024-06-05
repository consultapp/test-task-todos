import { useAddTodo } from "@/context/TodoContext";
import React from "react";

export default function TodoInput() {
  const addTodo = useAddTodo();
  return (
    <div>
      <input
        placeholder="What do you need to do?"
        onSubmit={(e) => addTodo(e.target?.value || "")}
      />
    </div>
  );
}
