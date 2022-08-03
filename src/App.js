import "./App.css";
import TodoHeader from "./components/TodoHeader";
import InputTodo from "./components/InputTodo";
import TodoList from "./components/TodoList";

// react hook tutorial:
// https://reactjs.org/docs/hooks-overview.html

// todo list thought:
// main body (data) is array
// array element -> todo [{content: "abc", isCompleted: false}, {content: "cde", isCompleted:false}...]

// Redux workflow:
// 1. component dispatch an action to one reduce. component发出(dispatch)一个action给reducer。
// 2. reducer will update the global state by action. reducer会根据action的type来更新global state。
// 3. global state update will trigger the component's update. global state的更新会触发component的更新。

// github branch
// git pull
// git checkout branch_name

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

  return (
    <div className="App">
      <TodoHeader headTextContent="Test" />
      <InputTodo />
      <TodoList />
    </div>
  );
}

export default App;
