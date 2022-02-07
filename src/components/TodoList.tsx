import React from 'react';
import {Todo} from "./modal"
import "./input.css"
import SingleTodo from "./SingleTodo"
interface To{
   setTodo:React.Dispatch<React.SetStateAction<string>>;
   todos:Todo[];
}
const TodoList:React.FC<To> = ({setTodo,todos}) => {
  return <div className="todos">
         {todos.map(el=>(
           <SingleTodo todo={el} key={el.id} todos={todos}  setTodo={setTodo}/>
         ))}
        </div>;
};

export default TodoList;
