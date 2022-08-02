import "./App.css";
import { useState } from "react";
import TodoHeader from "./components/TodoHeader";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

// react hook tutorial:
// https://reactjs.org/docs/hooks-overview.html

// todo list thought:
// main body (data) is array
// array element -> todo [{content: "abc", isCompleted: false}, {content: "cde", isCompleted:false}...]

function App() {
  const [todos, setTodos] = useState([]);

  // console.log(todos);

  const delTodo = (index) => {
    setTodos((prevState) => {
      return [...prevState.slice(0, index), ...prevState.slice(index + 1)];
    });
  };

  const modTodo = (index) => {
    setTodos((prevState) => {
      return prevState.map((todo, i) => {
        // if you do not have the following if statement
        // all todo will be rendered
        if (index !== i) {
          return todo;
        }
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      });
    });
  };

  return (
    <div className="App">
      <TodoHeader headTextContent="Test" />
      <InputTodo setTodos={setTodos} />
      <TodoList todos={todos} delTodo={delTodo} modTodo={modTodo} />
    </div>
  );
}

export default App;
