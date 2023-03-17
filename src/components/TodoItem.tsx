import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
// import './TodoList.css';

type TodoItemProps = {
  item: {
    id: number;
    text: string;
    completed: boolean;
  };
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

const TodoItem = ({ item, handleToggleTodo, handleDeleteTodo }: TodoItemProps) => {
  return (
    <li
      key={item.id}
      className={item.completed ? "todo-item completed" : "todo-item"}
      onClick={() => handleToggleTodo(item.id)}
    >
      <span>{item.text}</span>
      <button className="delete-button" onClick={(event) => {
          event.stopPropagation();
          handleDeleteTodo(item.id);
        }}
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </li>
  );
};

export default TodoItem;
