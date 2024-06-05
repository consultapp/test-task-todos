import React from "react";

export default function FiltersContainer() {
  return (
    <div className="flex flex-row justify-between">
      <div>items left:2</div>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button type="button">Clear completed</button>
    </div>
  );
}
