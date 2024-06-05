import FILTERS from "@/fixtures/FILTERS";
import { ITodo, ITodoContext } from "@/types";
import { createContext, useCallback, useContext } from "react";

export const initialTodoContext: ITodoContext = {
  todos: [
    { id: 1, text: "Тестовое задание", done: FILTERS.active },
    { id: 2, text: "Прекрасный код", done: FILTERS.completed },
    { id: 3, text: "Покрытие тестами", done: FILTERS.active },
  ],
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

export function useFilteredTodos() {
  const todos = useTodos();
  const filter = useFilter();
  if (filter === FILTERS.all) return todos;

  return todos.filter(({ done }) => done === filter);
}

export function useAddTodo() {
  const dispatch = useContext(TodoContextDispatch);
  return useCallback(
    ({ text }: { text: ITodo["text"] }) => {
      dispatch({ type: "addTodo", payload: { text } });
    },
    [dispatch]
  );
}

export function useDeleteTodo() {
  const dispatch = useContext(TodoContextDispatch);
  return useCallback(
    ({ id }: { id: ITodo["id"] }) => {
      dispatch({ type: "deleteTodo", payload: { id } });
    },
    [dispatch]
  );
}

export function useUpdateTodo() {
  const dispatch = useContext(TodoContextDispatch);
  return useCallback(
    (todo: ITodo) => {
      dispatch({ type: "updateTodo", payload: todo });
    },
    [dispatch]
  );
}

export function useClearCompleted() {
  const dispatch = useContext(TodoContextDispatch);
  return useCallback(() => {
    dispatch({ type: "clearCompleted", payload: {} });
  }, [dispatch]);
}

export function useSetFilter() {
  const dispatch = useContext(TodoContextDispatch);
  return useCallback(
    (filter: keyof typeof FILTERS) => {
      dispatch({ type: "setFilter", payload: filter });
    },
    [dispatch]
  );
}
