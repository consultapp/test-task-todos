import FiltersContainer from "@/components/FiltersContainer/FiltersContainer";
import TodoInput from "@/components/TodoInput/TodoInput";
import Todos from "@/components/Todos/Todos";

export default function Container() {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col items-center">
      <h1 className=" text-9xl font-thin opacity-50 text-red-400">todos</h1>
      <TodoInput />
      <Todos />
      <FiltersContainer />
    </div>
  );
}
