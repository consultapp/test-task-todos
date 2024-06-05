import FiltersContainer from "@/components/FiltersContainer/FiltersContainer";
import Todos from "@/components/Todos/Todos";

export default function Container() {
  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col items-center gap-4">
      <h1 className="text-9xl font-thin opacity-50 text-red-400">todos</h1>
      <div className=" bg-white w-full md:w-W1  gap-4 flex flex-col  shadow-lg shadow-gray-400">
        <Todos />
        <FiltersContainer />
      </div>
    </div>
  );
}
