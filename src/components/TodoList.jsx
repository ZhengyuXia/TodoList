import TodoItem from "./TodoItem";

const TodoList = ({ todos, delTodo, modTodo }) => {
  const todosNodeList = todos.map(({ content, isCompleted }, index) => {
    return (
      // you have to use “key” when using map function with React
      // otherwise, you will obtain errors
      // key should be created unqiuely, here we use content-index
      <TodoItem
        key={`${content}+${index}`}
        content={content}
        isCompleted={isCompleted}
        index={index}
        delTodo={delTodo}
        modTodo={modTodo}
      />
    );
  });

  return <ol>{todosNodeList}</ol>;
};

export default TodoList;
