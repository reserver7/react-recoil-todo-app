import React from "react";
import { useRecoilState } from "recoil";
import { TodoListFilterState } from "../TodoAtoms";

const TodoListFilter = () => {
  const [filter, setFilter] = useRecoilState(TodoListFilterState);

  const updateFilter = ({ target: { value } }) => {
    setFilter(value);
  };

  return (
    <div>
      Filters:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">Show All</option>
        <option value="Show Completed">Show Completed</option>
        <option value="Show Uncompleted">Show Uncompleted</option>
      </select>
    </div>
  );
};

export default TodoListFilter;
