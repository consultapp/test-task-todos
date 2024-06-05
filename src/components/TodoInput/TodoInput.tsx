import { useAddTodo } from "@/context/TodoContext";
import ArrowDown from "@/icons/ArrovDown/ArrowDown";
import { KeyboardEvent, useCallback, useRef } from "react";

export default function TodoInput() {
  const addTodo = useAddTodo();
  const input = useRef<HTMLInputElement>(null);

  const enterHandle = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && input.current) {
        addTodo({ text: input.current?.value });
        input.current.value = "";
      }
    },
    [addTodo]
  );

  return (
    <div className=" line">
      <div className="pl-1 opacity-50">
        <ArrowDown />
      </div>
      <input
        ref={input}
        className="grow"
        placeholder="What needs to be done?"
        onKeyDown={enterHandle}
      />
    </div>
  );
}
