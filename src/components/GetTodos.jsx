import axios from 'axios';
import Todo from '../models/Todo.js';
const GetTodos = ({ connection, setTodos }) => {
  const getAll = async () => {
    try {
      const data = await axios.get(
        connection.baseUrl + '/todos?apikey=' + connection.apiKey
      );

      let tasks = data.data.map(
        (task) => new Todo(task.id, task.task, task.done)
      );
      setTodos(tasks);
      localStorage.setItem('todos', JSON.stringify(tasks));
    } catch (error) {
      setTodos(JSON.stringify([]));
    }
  };

  return (
    <div className='getTodos'>
      <h1>
        <i className='fa-regular fa-pen-to-square'></i> My simple Todo-app
      </h1>
      <button onClick={getAll}>
        Get New Todos from API <i className='fa-solid fa-retweet'></i>
      </button>
    </div>
  );
};

export default GetTodos;
