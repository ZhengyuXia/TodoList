import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/index";

const InputTodo = () => {
  // 1. 需要通过外界传进来一个array，而这个array就是todo
  // 2. define a local state to store saved value;
  // 3. Button "+" 注册一个事件，通过这个事件把我们存储的值input传入到外界

  // local state
  const [inputTodoValue, setInputTodoValue] = useState("");

  // create a dispatch (react-redux)
  const dispatch = useDispatch();

  const handelOnAddTodo = () => {
    // if user's input is empty
    if (!inputTodoValue.trim()) {
      setInputTodoValue("");
      return;
    }

    // react-redux
    addTodo(dispatch)(inputTodoValue);

    // pure react
    // setTodos((prevState) => {
    //   return [...prevState, { content: inputTodoValue, isCompleted: false }];
    // });

    setInputTodoValue("");
  };

  return (
    <div>
      <input
        tyep="text"
        value={inputTodoValue}
        onChange={(e) => setInputTodoValue(e.target.value)}
      />
      <button onClick={() => handelOnAddTodo()}>+</button>
    </div>
  );
};

export default InputTodo;
