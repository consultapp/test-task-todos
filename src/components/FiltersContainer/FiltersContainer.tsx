import {
  useClearCompleted,
  useFilter,
  useSetFilter,
} from "@/context/TodoContext";
import ItemsLeft from "../ItemsLeft/ItemsLeft";
import FILTERS from "@/fixtures/FILTERS";

function capitalizeFirstLetter(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export default function FiltersContainer() {
  const activeFilter = useFilter();
  const clearCompleted = useClearCompleted();

  const changeFilter = useSetFilter();

  return (
    <div className="flex flex-row justify-between p-2 pb-4 opacity-50 items-center font-thin">
      <ItemsLeft />
      <div className="flex flex-row gap-x-2">
        {Object.values(FILTERS).map((filter) => (
          <button
            key={filter}
            className={`btn ${filter === activeFilter && "btn-checked"}`}
            onClick={() => changeFilter(filter)}
          >
            {capitalizeFirstLetter(filter)}
          </button>
        ))}
      </div>
      <button className="btn" onClick={clearCompleted}>
        Clear completed
      </button>
    </div>
  );
}
