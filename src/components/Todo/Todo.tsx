import { useDeleteTodo, useUpdateTodo } from "@/context/TodoContext";
import FILTERS from "@/fixtures/FILTERS";
import CheckedIcon from "@/icons/CheckedIcon/CheckedIcon";
import TrashCan from "@/icons/TrashCan/TrashCan";
import { ITodo } from "@/types";
import { useCallback } from "react";

type Props = { todo: ITodo };

export default function Todo({ todo }: Props) {
  const deleteHandle = useDeleteTodo();
  const updateTodo = useUpdateTodo();
  const { id, text, done } = todo;

  const doneHandle = useCallback(() => {
    updateTodo({
      id,
      text,
      done: done === FILTERS.active ? FILTERS.completed : FILTERS.active,
    });
  }, [updateTodo, id, text, done]);

  return (
    <div className="line">
      <button className="done text-green-900" onClick={doneHandle}>
        {done === FILTERS.completed ? <CheckedIcon /> : " "}
      </button>
      <div
        className={`grow ${
          done === FILTERS.completed && "line-through opacity-50"
        }`}
      >
        {text}
      </div>
      <button className="iconBtn" onClick={() => deleteHandle({ id })}>
        <TrashCan size={15} />
      </button>
    </div>
  );
}
