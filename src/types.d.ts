import FILTERS from "@/fixtures/FILTERS";

export type TFilter = keyof typeof FILTERS;

export interface ITodo {
  id: number;
  text: string;
  done: TFilter;
}

export interface ITodoContext {
  todos: ITodo[];
  filter: TFilter;
}
