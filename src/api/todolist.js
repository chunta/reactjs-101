import axios from 'axios';

const BASE_URL = 'http://localhost:80/todolist';

// Fetch all todos
export const fetchTodos = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching todos:', error);
    throw error;
  }
};

// Add a new todo
export const addTodo = async (todo) => {
  try {
    const response = await axios.post(BASE_URL, todo);
    return response.data;
  } catch (error) {
    console.error('Error adding todo:', error);
    throw error;
  }
};
