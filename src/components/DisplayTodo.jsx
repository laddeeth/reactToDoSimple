const DisplayTodo = ({ todo, deleteTodo, toggleDone }) => {
  return (
    <li>
      <input
        type='checkbox'
        checked={todo.isDone}
        onChange={() => toggleDone(todo.id)}
      ></input>
      {todo.task}{' '}
      <button
        onClick={() => {
          deleteTodo(todo.id);
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default DisplayTodo;
