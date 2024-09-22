import Todobuttons from "../Todobuttons/Todobuttons";
import "./Todoinput.css";

interface TodoinputProps {
  todoList: { title: string; status: boolean }[];
  input: string;
  handleTodo: () => void;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isEditing: boolean; 
}

const Todoinput = ({ input, handleTodo, handleInput, isEditing }: TodoinputProps) => {
  return (
    <center>
      <input id="inputTodo" type="text" onChange={handleInput} value={input} />
      <Todobuttons handleTodo={handleTodo} isEditing={isEditing} /> 
    </center>
  );
};

export default Todoinput;
