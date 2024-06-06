import { useTodos } from "@/context/TodoContext";
import FILTERS from "@/fixtures/FILTERS";

export default function ItemsLeft() {
  const todos = useTodos();
  const itemsLeft = todos.reduce((acc, { done }) => {
    if (done === FILTERS.active) acc++;
    return acc;
  }, 0);

  return (
    <div className="itemsLeft">
      {itemsLeft ? `${itemsLeft} items left` : "all done"}
    </div>
  );
}
