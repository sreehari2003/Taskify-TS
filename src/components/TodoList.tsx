import React from "react";
import { Todo } from "./modal";
import "./input.css";
import SingleTodo from "./SingleTodo";
import { Droppable } from "react-beautiful-dnd";
interface To {
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  todos: Todo[];
  setTodos: (el: Todo[]) => void;
}
const TodoList: React.FC<To> = ({ setTodo, todos, setTodos }) => {
  return (
    <Droppable droppableId="todosList">
      {(provided) => (
        <>
          <div
            className="todos"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2 className="todos_txt">Active tasks</h2>
            {todos.map((el, index) => {
              if (!el.isDone)
                return (
                  <SingleTodo
                    index={index}
                    todo={el}
                    key={el.id}
                    todos={todos}
                    setTodo={setTodo}
                    setTodos={setTodos}
                  />
                );
              return null;
            })}
          </div>
          <div
            className="todos red"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <h2 className="todos_txt">Completed tasks</h2>
            {todos.map((el, index) => {
              if (el.isDone) {
                <SingleTodo
                  index={index}
                  todo={el}
                  key={el.id}
                  todos={todos}
                  completed={true}
                />;
              }
              return null;
            })}
          </div>
        </>
      )}
    </Droppable>
  );
};

export default TodoList;
