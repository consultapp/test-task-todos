import FiltersContainer from "@/components/FiltersContainer/FiltersContainer";
import Todos from "@/components/Todos/Todos";

export default function Container() {
  return (
    <div className="w-full min-h-screen bg-zinc-200 flex flex-col items-center gap-4 m-0 p-10">
      <h1 className="text-9xl font-thin opacity-50 text-red-400">todos</h1>
      <div className="stack">
        <div className=" bg-white w-full md:w-W1  gap-4 flex flex-col  shadow-lg shadow-gray-400 z-20">
          <Todos />
          <FiltersContainer />
        </div>
        <div className=" bg-white w-full md:w-W1  gap-4 flex flex-col  shadow-lg shadow-gray-400 translate-y-2 scale-x-[0.98] z-10"></div>
        <div className=" bg-white w-full md:w-W1  gap-4 flex flex-col  shadow-lg shadow-gray-400 translate-y-4  scale-x-[0.96] z-0"></div>
      </div>
    </div>
  );
}
