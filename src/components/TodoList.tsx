import React, { useState } from 'react';
import TodoItem from './TodoItem';
import '../App.css';

type TodoItem = {
  id: number;
  text: string;
  completed: boolean;
};

const TodoList = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const handleAddTodo = () => {
    if (inputValue) {
      const newTodoItem: TodoItem = {
        id: Date.now(),
        text: inputValue,
        completed: false,
      };
      setTodoList([...todoList, newTodoItem]);
      setInputValue("");
    }
  };

  const handleToggleTodo = (id: number) => {
    const updatedTodoList = todoList.map((item) =>
      item.id === id ? { ...item, completed: !item.completed } : item
    );
    setTodoList(updatedTodoList);
  };

  const handleDeleteTodo = (id: number) => {
    setTodoList(todoList.filter((item) => item.id !== id));
  };

  return (
    <div className="todo-list">
      <h2>Todo List</h2>
      <div className="todo-list-container">
        <div className="todo-list-input-container">
          <input
            type="text"
            placeholder="Add a new todo..."
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <button onClick={handleAddTodo}>Add</button>
        </div>
        <ul className="todo-items-list">
          {todoList.map((item) => (
            <TodoItem
              key={item.id}
              item={item}
              handleToggleTodo={handleToggleTodo}
              handleDeleteTodo={handleDeleteTodo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
