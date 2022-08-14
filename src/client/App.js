import { useEffect } from "react";
import { useDispatch } from "react-redux";
import TodoHeader from "./components/TodoHeader";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";
import { initTodos } from "./actions/index";

import "./App.css";

// react hook tutorial:
// https://reactjs.org/docs/hooks-overview.html

// todo list thought:
// main body (data) is array
// array element -> todo [{content: "abc", isCompleted: false}, {content: "cde", isCompleted:false}...]

// Redux workflow (without thunk):
// 1. component dispatch an action to one reduce. component发出(dispatch)一个action给reducer。
// 2. reducer will update the global state by action. reducer会根据action的type来更新global state。
// 3. global state update will trigger the component's update. global state的更新会触发component的更新。

// Redux workflow (with thunk):
// 1. component dispatch an action to middleware (thunk).
// 2. we now can execute async operations. 有一个拦截效果，因为加了一个中间层
// 3. middleware (thunk) will dispatch the action to reducer.
// 4. reducer will update the global state by action. reducer会根据action的type来更新global state。
// 5. global state update will trigger the component's update. global state的更新会触发component的更新。

// github branch
// git pull
// git checkout branch_name
// git merge branch_name (把branc_name这个分支合并到当前branch)

// redux install
// npm install redux
// npm install react-redux

function App() {
  // const [todos, setTodos] = useState([]);

  // console.log(todos);

  // const delTodo = (index) => {
  //   setTodos((prevState) => {
  //     return [...prevState.slice(0, index), ...prevState.slice(index + 1)];
  //   });
  // };

  // const modTodo = (index) => {
  //   setTodos((prevState) => {
  //     return prevState.map((todo, i) => {
  //       // if you do not have the following if statement
  //       // all todo will be rendered
  //       if (index !== i) {
  //         return todo;
  //       }
  //       return {
  //         ...todo,
  //         isCompleted: !todo.isCompleted,
  //       };
  //     });
  //   });
  // };

  const dispatch = useDispatch();

  useEffect(() => {
    initTodos(dispatch)();
  }, [dispatch]);

  return (
    <div className="App">
      <TodoHeader headTextContent="todos" />
      <InputTodo />
      <hr />
      <TodoList />
    </div>
  );
}

export default App;
