import Container from "./components/Container/Container";
import TodoProvider from "./context/TodoContext/TodoContext";

function App() {
  return (
    <TodoProvider>
      <Container />
    </TodoProvider>
  );
}

export default App;
