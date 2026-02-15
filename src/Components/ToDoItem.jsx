import Header from "./Header";

import { useState } from "react";
import "./style.css"

function ToDoItem({todo, completeTask, deleteTodo,setEditData,isCompleted }) {
  

  return (
    <div className="todo-item">
        <h4>{todo.text}</h4>
        {!isCompleted && 
        <div className="btns">
          <button className="combtn" onClick={()=>completeTask(todo.id)}>Complete</button>
          <button className="editbtn" onClick={()=>setEditData(todo)}>Edit</button>
          <button className="delbtn" onClick={()=>deleteTodo(todo.id)}>Delete</button>
        </div>
        }
    </div>
  );


};

export default ToDoItem;


