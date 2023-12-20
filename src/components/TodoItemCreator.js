import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { TodoListState } from "../TodoAtoms";

const TodoItemCreator = () => {
  const [inputValue, setInputValue] = useState("");
  const setTodoList = useSetRecoilState(TodoListState);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    setTodoList((prev) => [
      ...prev,
      {
        id: getID(),
        text: inputValue,
        isComplete: false,
      },
    ]);

    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
    </div>
  );
};

let id = 0;
function getID() {
  return id++;
}

export default TodoItemCreator;
