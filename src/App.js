import { React, Suspense } from "react";
import { useRecoilValue } from "recoil";
import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItemCreator from "./components/TodoItemCreator";
import { TodoListState, FilteredTodoListState } from "./TodoAtoms";
import TodoListFilter from "./components/TodoListFilter";
import TodoListStats from "./components/TodoListStats";
import { currentUserNameQuery } from "./UserAtom";

function App() {
  // const todoList = useRecoilValue(TodoListState);
  const filteredTodoList = useRecoilValue(FilteredTodoListState);

  return (
    <div className="App">
      <Suspense fallback={<div>...loding</div>}>
        <CurrentUserInfo />
      </Suspense>
      <TodoListStats />
      <TodoListFilter />
      <TodoItemCreator />
      {filteredTodoList.map((item) => (
        <TodoItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default App;

function CurrentUserInfo() {
  const userName = useRecoilValue(currentUserNameQuery);

  return <div>{userName}</div>;
}
