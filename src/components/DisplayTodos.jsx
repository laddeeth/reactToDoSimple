import DisplayTodo from './DisplayTodo';
const DisplayTodos = ({ todos, setTodos }) => {
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleDone = (id) => {
    const toggled = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isDone: !todo.isDone,
        };
      } else return todo;
    });
    setTodos(toggled);
  };
  const doneTodos = todos.filter((todo) => todo.isDone);
  const activeTodos = todos.filter((todo) => !todo.isDone);
  return (
    <div className='displayTodos'>
      <div className='activeTodos'>
        <h2>Active Todos</h2>
        <ul>
          {activeTodos.map((todo) => (
            <DisplayTodo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleDone={toggleDone}
            />
          ))}
        </ul>
      </div>
      <div className='finishedTodos'>
        <h2>Finished Todos</h2>
        <ul>
          {doneTodos.map((todo) => (
            <DisplayTodo
              key={todo.id}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleDone={toggleDone}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DisplayTodos;
