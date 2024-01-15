import React, { useState } from 'react';
import style from './Todo.module.scss';

export const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [showInput, setShowInput] = useState(false);

  const addTodo = () => {
    setTodos([...todos, { id: todos.length + 1, text: newTodo }]);
    setNewTodo('');
    setShowInput(false); // Skjul inputfeltet efter tilføjelse af TODO
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const deleteAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className={style.todoWrapper}>
      <h1>ToDo</h1>
      <span className={style.line}></span>

      {!showInput && (
        <button className={style.addTodo} onClick={() => setShowInput(true)}><span class="material-symbols-outlined">add_circle</span>Add new</button>
      )}

      {showInput && (
        <div>
          <input className={style.todoText} type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)}
          />
          <button className={style.addTodo} onClick={addTodo}>Tilføj TODO</button>
        </div>
      )}

      <ul>
        {todos.map((todo) => (
          <li className={style.todoList} key={todo.id}>
            {todo.text}
            <button className={style.delTodo} onClick={() => deleteTodo(todo.id)}><span class="material-symbols-outlined">do_not_disturb_on</span></button>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button className={style.delAllTodos} onClick={deleteAllTodos}>Delete all todos</button>
      )}
    </div>
  );
};
