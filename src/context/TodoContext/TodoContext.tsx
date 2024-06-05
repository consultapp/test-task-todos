import React, { useReducer } from "react";

import { reducer } from "./reducer";
import { TodoContext, TodoContextDispatch, initialTodoContext } from "./index";

type Props = { children: React.ReactElement };

export default function TodoProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialTodoContext);

  return (
    <TodoContextDispatch.Provider value={dispatch}>
      <TodoContext.Provider value={state}>{children}</TodoContext.Provider>
    </TodoContextDispatch.Provider>
  );
}
