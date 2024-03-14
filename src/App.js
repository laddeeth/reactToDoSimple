import './App.css';
import { useState, useEffect } from 'react';
import GetTodos from './components/GetTodos';
import DisplayTodos from './components/DisplayTodos';
import AddTodos from './components/AddTodos';
import Todo from './models/Todo';
import SortTodos from './components/SortTodos';

const baseUrl = 'https://random-todos.azurewebsites.net/';
const apiKey = '$2a$10$WikXmRPseSWUShawHvy9EeYFWwz40cGimBSkuzoTHmxTzeDE5I.oy';

function App() {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos') || '[]')
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    if (text === '') {
      alert('No empty todos please');
      return;
    }
    let highestId;
    if (todos.length > 0) {
      highestId = todos.reduce((max, todo) => {
        return todo.id > max ? todo.id : max;
      }, todos[0].id);
    } else {
      highestId = -1;
    }

    setTodos([...todos, new Todo(highestId + 1, text, false)]);
  };

  const sortTodo = (sortBy) => {
    const todosToSort = [...todos];
    switch (sortBy) {
      case 'id':
        todosToSort.sort((a, b) => a.id - b.id);
        setTodos(todosToSort);
        break;
      case 'todo':
        todosToSort.sort((a, b) => {
          const todoA = a.task.toUpperCase();
          const todoB = b.task.toUpperCase();
          if (todoA < todoB) {
            return -1;
          }
          if (todoA > todoB) {
            return 1;
          }
          return 0;
        });
        setTodos(todosToSort);
        break;

      default:
        break;
    }
  };

  return (
    <div className='app'>
      <GetTodos
        connection={{ baseUrl, apiKey }}
        setTodos={setTodos}
      />
      <AddTodos addTodo={addTodo} />
      <SortTodos sortTodo={sortTodo} />
      <DisplayTodos
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
