import { ITodo } from "@/types";

type Props = { todo: ITodo };

export default function Todo({ todo }: Props) {
  return (
    <div>
      <div>{todo.done}</div>
      <div>{todo.id}</div>
      <div>{todo.text}</div>
      <button>Delete</button>
    </div>
  );
}
