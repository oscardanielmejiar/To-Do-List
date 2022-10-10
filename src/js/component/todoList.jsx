import React, { useEffect, useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    getTodos();
  }, []);
  useEffect(() => {
    changeTodos(todos);
  }, [todos]);

  const getTodos = () => {
    fetch("https://assets.breatheco.de/apis/fake/todos/user/oscardanielmejiar")
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch(error=>console.log(error))
  };
  const changeTodos = (data) => {
    fetch(
      "https://assets.breatheco.de/apis/fake/todos/user/oscardanielmejiar",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
    .then((response) => response.json())
    .then((data) =>console.log(data))
    .catch(error=>console.log(error))
  };
  console.log(todos);
  return (
    <div className="task-box">
      <ul className="list-group">
        <li className=" input-group mb-3">
          <input
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
            className="form-control"
            placeholder="No tasks, add a task"
            aria-label="No tasks, add a task"
            aria-describedby="button-addon2"
          />
          <button
            className="btn btn-secondary"
            type="button"
            id="inputGroupFile01"
            onClick={() => {
              setTodos([...todos, { label: inputValue, done: false }]);
              setInputValue("");
            }}
          >            Add Task
          </button>
        </li>
        {todos.map((item, index) => {
          return (
            <li key={index} className="list-group-item">
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
