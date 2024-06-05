import { FILTERS } from "@/fixtures/FILTERS";

export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

export interface ITodoContext {
  todos: ITodo[];
  filter: keyof typeof FILTERS;
}
