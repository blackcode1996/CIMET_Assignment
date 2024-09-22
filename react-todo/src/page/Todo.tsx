import { useCallback, useState } from "react";
import Todoinput from "../components/Todoinput/Todoinput";
import Todonavbar from "../components/Todonavbar/Todonavbar";
import "./Todo.css";
import Todolist from "../components/Todolist/Todolist";

export interface TodoItem {
  id: number;
  title: string;
  status: boolean;
}

const Todo = () => {
  const [todoList, setTodoList] = useState<TodoItem[]>([]);
  const [input, setInput] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editId, setEditId] = useState<number | null>(null);

  const handleTodo = useCallback(() => {
    if (!input.trim()) return;

    if (isEditing && editId !== null) {
      setTodoList((prev) =>
        prev.map((todo) =>
          todo.id === editId ? { ...todo, title: input } : todo
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        title: input,
        status: false,
      };
      setTodoList((prev) => [...prev, newTodo]);
    }

    setInput("");
  }, [input, isEditing, editId]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleDelete = (id: number) => {
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id: number) => {
    const todoToEdit = todoList.find((todo) => todo.id === id);
    if (todoToEdit) {
      setInput(todoToEdit.title);
      setIsEditing(true);
      setEditId(id);
    }
  };

  const handleStatusChange = (id: number, status: boolean) => {
    setTodoList((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, status } : todo
      )
    );
  };

  return (
    <div>
      <Todonavbar />
      <Todoinput
        todoList={todoList}
        input={input}
        handleTodo={handleTodo}
        handleInput={handleInput}
        isEditing={isEditing}
      />
      <Todolist
        todoList={todoList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleStatusChange={handleStatusChange}
      />
    </div>
  );
};

export default Todo;
