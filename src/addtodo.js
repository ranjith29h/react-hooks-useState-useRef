import React, { useState, useRef } from "react";

export default function TodoApp() {
  const inputEl = useRef(null);

  const [todo, setTodo] = useState([
    { id: 1, aim: "complex problem", completed: false }
  ]);

  const addTodo = e => {
    e.preventDefault();
    setTodo([
      ...todo,
      {
        id: todo.length,
        aim: inputEl.current.value
      }
    ]);
    inputEl.current.value = "";
    inputEl.current.focus();
  };

  return (
    <div>
      <form>
        <input ref={inputEl} />
        <button onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
        {todo.map(item => (
          <li key={item.id}>{item.aim}</li>
        ))}
      </ul>
    </div>
  );
}
