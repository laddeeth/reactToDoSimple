import { useState } from 'react';

const AddTodos = ({ addTodo }) => {
  const [input, setInput] = useState('');
  return (
    <div className='addTodo'>
      <input
        onChange={(e) => setInput(e.target.value)}
        value={input}
      ></input>
      <button
        onClick={() => {
          addTodo(input);
          setInput('');
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodos;
