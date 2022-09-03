import React from "react";
import { Todo } from "./modal";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Draggable } from "react-beautiful-dnd";

interface props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodo?: React.Dispatch<React.SetStateAction<string>>;
  completed?: boolean;
  setTodos?: (el: Todo[]) => void;
  // key:number;
}
const SingleTodo: React.FC<props> = ({
  todo,
  todos,
  setTodos,
  index,
  completed = false,
}) => {
  console.log(todos);
  const handleDone = () => {
    const newState = todos.map((el) => {
      if (el.id === todo.id) {
        return { ...todo, isDone: true };
      }
      return el;
    });
    setTodos(newState);
  };
  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className="todos__single"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <span className="todos__single--text">{todo.todo}</span>
          {!completed && (
            <div>
              {/* <span className="icon">
                <AiFillEdit />
              </span>
              <span className="icon">
                <AiFillDelete />
              </span> */}
              <span className="icon" onClick={handleDone}>
                <MdDone />
              </span>
            </div>
          )}
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
