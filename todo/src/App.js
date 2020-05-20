import React, { useReducer } from 'react';
import './App.css';
import TodoList from './componenets/TodoList';
import TodoForm from './componenets/TodoForm';

import {todoReducer, initialTodoList} from './reducers'

const App = () => {
  const [state, dispatch] = useReducer(todoReducer, initialTodoList)

  return (
    <div className="App">
      <div className="TodoForm">
        <TodoForm />
      </div>
      <div className="TodoList">
        <TodoList />
      </div>

    </div>
  );
}

export default App;
