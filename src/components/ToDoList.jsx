import React, { useEffect, useState } from 'react';
import { fetchTodos, addTodo } from '../api/todolist';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Fetch todos on component mount
  useEffect(() => {
    const loadTodos = async () => {
      try {
        const todosData = await fetchTodos();
        setTodos(todosData);
      } catch (error) {
        console.error('Failed to load todos');
      }
    };

    loadTodos();
  }, []);

  // Handle adding a new todo
  const handleAddTodo = async () => {
    if (!newTodo.trim()) return;
    try {
      const addedTodo = await addTodo({ title: newTodo });
      setTodos((prevTodos) => [...prevTodos, addedTodo]);
      setNewTodo('');
    } catch (error) {
      console.error('Failed to add todo');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default TodoList;
