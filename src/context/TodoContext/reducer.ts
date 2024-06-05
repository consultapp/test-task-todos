import { ITodo, ITodoContext } from "@/types";

interface IReducerAction {
  type: string;
  payload: Partial<ITodo>;
}

export function reducer(
  state: ITodoContext,
  { type, payload }: IReducerAction
): ITodoContext {
  const { text, id } = payload;
  switch (type) {
    case "addTodo":
      if (text) {
        state.todos.push();
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: state.todos.at(-1)?.id || 0,
              text: text,
              done: false,
            },
          ],
        };
      }
      break;

    case "deleteTodo":
      if (id) {
        return {
          ...state,
          todos: state.todos.filter((todo) => todo.id !== id),
        };
      }
      break;

    case "updateTodo":
      if (id) {
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id !== id) return payload as ITodo;
            else return todo;
          }),
        };
      }
      break;

    default:
      break;
  }

  return state;
}
