import React,{useState} from 'react';
import "./App.css"
import {Todo} from "./components/modal"
import Inputfield from "./components/Inputfield"
import  TodoList from "./components/TodoList"
const App:React.FC = () => {
   //defining types
    // | this is a union
  const [todo,setTodo] = useState<string>("");


  //here todo is a interrface i imported from Component 
  const [todos,setTodos] = useState<Todo[]>([]);

  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault();
    if(todo.length < 1) {
      alert("Please enter some value");
      return;
    }
    setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
    setTodo("");
  }
  console.log(todos);
   
  return( <div className="App">
     <span className="heading">Taskify</span>
     <>
     <Inputfield todo={todo} setTodo={setTodo}  handleAdd={handleAdd}/>   
     <TodoList setTodo={setTodo} todos={todos}/>
     </>
     </div>
     )
};

export default App;
