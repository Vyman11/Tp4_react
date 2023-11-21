import React, { useState, useEffect } from 'react';
import axios from 'axios';
import'./Comp.css'


function Api() {
  const [todos, setTodos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=10`)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, [page]);

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  return (
    <div className="App">
      <h1>TO DO LIST</h1><br/>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul><br/><br/>
      <button id='bt1' onClick={handlePreviousPage}>Precedent</button>
      <button id='bt2' onClick={handleNextPage}>Suivant</button>
      
    </div>
  );
}

export default Api;
