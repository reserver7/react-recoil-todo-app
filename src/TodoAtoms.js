import { atom, selector } from "recoil";

export const TodoListState = atom({
  key: "TodoListState",
  default: [],
});

export const TodoListFilterState = atom({
  key: "TodoListFilterState",
  default: "Show All",
});

export const FilteredTodoListState = selector({
  key: "FilteredTodoListState",
  get: ({ get }) => {
    const filter = get(TodoListFilterState);
    const list = get(TodoListState);

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete);
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const TodoListStatsState = selector({
  key: "TodoListStatsState",
  get: ({ get }) => {
    const todoList = get(TodoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((o) => o.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
});
