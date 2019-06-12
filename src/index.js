import React from "react";
import ReactDOM from "react-dom";

import Counter from "./counter";
import TodoApp from "./addtodo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <Counter />
      <br />
      <h1>Todo App</h1>
      <TodoApp />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
