import { FILTERS } from "@/fixtures/FILTERS";
import { ITodo, ITodoContext } from "@/types";
import { createContext, useCallback, useContext } from "react";

export const initialTodoContext: ITodoContext = {
  todos: [],
  filter: FILTERS.all,
};

export const TodoContext = createContext<ITodoContext>(initialTodoContext);

export const TodoContextDispatch = createContext<
  React.Dispatch<{
    type: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    payload: any;
  }>
>(() => {});

export function useTodos() {
  return useContext(TodoContext).todos;
}

export function useFilter() {
  return useContext(TodoContext).filter;
}

export function useAddTodo() {
  const dispatch = useContext(TodoContextDispatch);
  return useCallback(
    (text: ITodo["text"]) => {
      dispatch({ type: "addTodo", payload: { text } });
    },
    [dispatch]
  );
}

export function useDeleteTodo() {
  const dispatch = useContext(TodoContextDispatch);
  return useCallback(
    (id: ITodo["id"]) => {
      dispatch({ type: "deleteTodo", payload: { id } });
    },
    [dispatch]
  );
}

export function useUpdateTodo() {
  const dispatch = useContext(TodoContextDispatch);
  return useCallback(
    (todo: ITodo) => {
      dispatch({ type: "deleteTodo", payload: todo });
    },
    [dispatch]
  );
}
