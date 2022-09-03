import React from "react";
import "./input.css";

//implementing the interface types of function
interface props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  //shows that returns nothing
  handleAdd: (e: React.FormEvent) => void;
}
const Inputfield = ({ todo, setTodo, handleAdd }: props) => {
  //or
  //const Inputfield:React.FC<props> = ({todo,setTodo})

  return (
    <div>
      <form className="input" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="enter a task"
          className="input__box"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="input_submit" type="submit">
          Go
        </button>
      </form>
    </div>
  );
};

export default Inputfield;
