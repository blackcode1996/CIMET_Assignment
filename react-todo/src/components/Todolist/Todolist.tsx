import { TodoItem } from "../../page/Todo";
import "./Todolist.css";

interface TodolistProps {
  todoList: TodoItem[];
  handleEdit: (id: number) => void;
  handleDelete: (id: number) => void;
  handleStatusChange: (id: number, status: boolean) => void; // New prop for status change
}

const Todolist = ({
  todoList,
  handleEdit,
  handleDelete,
  handleStatusChange,
}: TodolistProps) => {
  return (
    <div className="todo-list-container">
      {todoList.map((todo) => (
        <div className="todo-item" key={todo.id}>
          <div>
            <input
              type="checkbox"
              checked={todo.status}
              onChange={() => handleStatusChange(todo.id, !todo.status)}
              className="status-checkbox"
            />
            <span className={`todo-text ${todo.status ? "completed" : ""}`}>
              {todo.title}
            </span>
          </div>

          <div className="todo-actions">
            <button className="edit-btn" onClick={() => handleEdit(todo.id)}>
              <i className="fas fa-edit"></i>
            </button>
            <button
              className="delete-btn"
              onClick={() => handleDelete(todo.id)}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todolist;
