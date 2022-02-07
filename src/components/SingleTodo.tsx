import React from 'react';
import {Todo} from "./modal"
import { AiFillEdit,AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";


interface props{
    todo: Todo;
    todos:Todo[];
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    // key:number;
}
const SingleTodo:React.FC<props> = ({todo,todos,setTodo}) => {
    const handleDone = (id:number)=>{
        console.log("hello");
    }
  return (
      <form  className="todos__single">
          <span className="todos__single--text">{todo.todo}</span>

          <div>
              <span className="icon">
              <AiFillEdit/>
              </span>
              <span className="icon">
                  <AiFillDelete/>
              </span>
              {/* didnt understood */}
              <span className="icon" onClick={()=>handleDone}>
                   <MdDone/>
              </span>
          </div>
      </form>
  )

};

export default SingleTodo;
