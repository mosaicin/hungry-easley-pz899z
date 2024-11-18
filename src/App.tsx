import React, { useState } from 'react';

interface TodoItem {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<TodoItem[]>([
    { id: 1, text: 'Buy milk', completed: false },
    { id: 2, text: 'Walk the dog', completed: false },
    { id: 3, text: 'Do laundry', completed: false },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const handleToggleCompleted = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
        className="w-full p-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
      <button
        onClick={handleAddTodo}
        className="ml-2 px-4 py-2 text-sm text-white bg-blue-500 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Add
      </button>
      <ul className="mt-4">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center justify-between p-2 border-b border-gray-200">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleCompleted(todo.id)}
                className="mr-2"
              />
              <span className={todo.completed ? 'text-gray-400 line-through' : 'text-gray-700'}>{todo.text}</span>
            </div>
            <button
              onClick={() => handleDeleteTodo(todo.id)}
              className="px-2 py-1 text-sm text-red-500 rounded-lg hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;