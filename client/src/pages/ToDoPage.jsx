import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://todolist-vk7i.onrender.com/api/todos";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Fetch all tasks from the server
  const fetchTodos = async () => {
    try {
      const response = await axios.get(API_URL);
      setTodos(response.data);
    } catch (error) {
      console.error("Error fetching todos:", error);
    }
  };

  // Add a new task
  const addTask = async () => {
    if (!newTask.trim()) return; // Prevent empty tasks
    try {
      const response = await axios.post(API_URL, {
        title: newTask,
        completed: false,
      });
      setTodos([...todos, response.data]);
      setNewTask("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  // Update a task (e.g., mark as completed)
  const updateTask = async (id, completed) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, {
        completed: !completed, // Toggle completion status
      });
      setTodos(todos.map((todo) => (todo._id === id ? response.data : todo)));
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  // Delete a task
  const deleteTask = async (id) => {
    try {
      console.log(`Attempting to delete task with ID: ${id}`);
      const response = await axios.delete(`${API_URL}/${id}`);
      console.log("Delete response:", response.data);

      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (error) {
      console.error(
        "Error deleting task:",
        error.response ? error.response.data : error
      );
    }
  };

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-xl font-bold mb-4">To-Do List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 p-2 border rounded-l"
          placeholder="Add a new task"
        />
        <button
          onClick={addTask}
          className="p-2 bg-blue-500 text-white rounded-r"
        >
          Add Task
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo._id}
            className="flex justify-between items-center p-2 border-b"
          >
            <span
              className="cursor-pointer"
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => updateTask(todo._id, todo.completed)}
            >
              {todo.title}
            </span>
            <button
              onClick={() => deleteTask(todo._id)}
              className="ml-2 p-1 bg-red-500 text-white rounded"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
