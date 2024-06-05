import FILTERS from "@/fixtures/FILTERS";
import { ITodo, ITodoContext, TFilter } from "@/types";

interface IReducerAction {
  type: string;
  payload: Partial<ITodo> | TFilter;
}

export function reducer(
  state: ITodoContext,
  { type, payload }: IReducerAction
): ITodoContext {
  if (typeof payload === "string") {
    switch (type) {
      case "setFilter":
        if (payload) {
          return {
            ...state,
            filter: payload,
          };
        }
        break;
    }
  }

  const { text, id } = payload as ITodo;

  console.log("state", state.todos);
  console.log("payload", payload);

  switch (type) {
    case "addTodo":
      if (text) {
        return {
          ...state,
          todos: [
            ...state.todos,
            {
              id: (state.todos.at(-1)?.id || 0) + 1,
              text: text,
              done: FILTERS.active,
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

    case "clearCompleted":
      return {
        filter: FILTERS.all,
        todos: state.todos.filter((todo) => todo.done !== FILTERS.completed),
      };

    case "updateTodo":
      if (id) {
        return {
          ...state,
          todos: state.todos.map((todo) => {
            if (todo.id === id) return payload as ITodo;
            else return todo;
          }),
        };
      }
      break;
  }

  return state;
}
