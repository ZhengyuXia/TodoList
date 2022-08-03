import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

const TodoList = () => {
  // obtain data (react-redux)
  const todos = useSelector((state) => state);

  const todosNodeList = todos.map(({ content, isCompleted }, index) => {
    return (
      // you have to use “key” when using map function with React
      // otherwise, you will obtain errors
      // key should be created unqiuely, here we use content-index
      <TodoItem
        key={`${content}-${index}`}
        content={content}
        isCompleted={isCompleted}
        index={index}
      />
    );
  });

  return <ol>{todosNodeList}</ol>;
};

export default TodoList;
