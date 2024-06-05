import TodoProvider from "./context/TodoContext/TodoContext";

function App({ children }: { children: React.ReactElement }) {
  return <TodoProvider>{children}</TodoProvider>;
}

export default App;
