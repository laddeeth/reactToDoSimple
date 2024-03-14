const SortTodos = ({ sortTodo }) => {
  return (
    <div className='sortTodos'>
      <button onClick={() => sortTodo('id')}>
        Sort By ID <i className='fa-solid fa-arrow-up'></i>
      </button>
      <button onClick={() => sortTodo('todo')}>
        Sort By Name <i className='fa-solid fa-arrow-up'></i>
      </button>
    </div>
  );
};

export default SortTodos;
