import { useDispatch } from "react-redux";
import { delTodo, modTodo } from "../actions";
import "../styles/todo-items.css";

const TodoItem = ({ content, isCompleted, index }) => {
  const dispatch = useDispatch();

  return (
    <li
      className="todo-item"
      data-testid={`${content.split(" ").join("-")}-${index}`}
    >
      <span
        className={isCompleted ? "is-completed" : "is-not-completed"}
        onDoubleClick={() => modTodo(dispatch)(index)}
      >
        {content}
      </span>
      <button onClick={() => delTodo(dispatch)(index)}>delete</button>
    </li>
  );
};

export default TodoItem;
