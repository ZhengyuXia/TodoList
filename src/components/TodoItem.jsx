const TodoItem = ({ content, isCompleted, index, delTodo, modTodo }) => {
  return (
    <li>
      <span
        style={{ textDecoration: isCompleted ? "line-through" : "none" }}
        onDoubleClick={() => modTodo(index)}
      >
        {content}
      </span>
      <button onClick={() => delTodo(index)}>delete</button>
    </li>
  );
};

export default TodoItem;
