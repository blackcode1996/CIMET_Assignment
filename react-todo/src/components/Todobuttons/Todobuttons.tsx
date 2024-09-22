import "./Todobuttons.css";

interface TodobuttonsProps {
  handleTodo: () => void; 
  isEditing: boolean;
}

const Todobuttons = ({handleTodo,isEditing}: TodobuttonsProps) => {
  return (
    <div className="darksoul-glowing-button">
      <button className="darksoul-button" type="button" onClick={handleTodo}>
      {isEditing ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default Todobuttons;
