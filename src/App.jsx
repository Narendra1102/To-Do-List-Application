import Header from './Components/Header'
import ToDoList from './Components/ToDoList'
import { useState } from 'react'
import "./Components/style.css"


function App() {
  
  const [todoitem,setItem]=useState([])
  const [nextId,setNextId]=useState(1)
  const [text, setText] = useState("");
  const [editData,setEditData]=useState(null)
  const [completedTasks,setCompletedTasks]=useState([])

  const updateTodo=()=>{
    const updatedTodos=todoitem.map((todo)=>{
      return todo.id==editData.id?editData:todo
    })
    setItem(updatedTodos)
    setEditData(null)
  }

  function completeTask(id){
    const completedTask=todoitem.filter((item)=>item.id==id)
    const afterFilter=todoitem.filter((item)=>item.id!=id)
    setCompletedTasks([...completedTasks,completedTask[0]])
    setItem(afterFilter)
  }

  function handleAddItem(){
    if (text.trim() === "") return;

    const newTask = {
      id: nextId,
      text:text 
    }; 

    setItem([...todoitem,newTask])
    setNextId(nextId+1)
    setText("")

  };

  

  function deleteTodo(id){
    setItem(todoitem.filter((item)=>item.id!=id))
  }

  
  return (
    <div className="app">
      <Header />
      <h3>To be completed</h3>
      <div className="input-box">
        <input type="text"      
          placeholder="Enter a task..." 
          value={editData ? editData.text : text}
          
          onChange={(e)=>
          editData? 
          setEditData({ ...editData, text: e.target.value }):
          setText(e.target.value)}/>
        <button className="addbtn" 
        onClick={editData?updateTodo:handleAddItem}>
        {editData?"Update":"Add"}</button>
      </div>
      
      <ToDoList 
        todos={todoitem}
        completeTask={completeTask}
        deleteTodo={deleteTodo}
        setEditData={setEditData}
        isCompleted={false}
      />
      <hr />
      <br />

      <h3>Completed Tasks</h3>
      <div>
        <ToDoList 
        todos={completedTasks}
        isCompleted={true}
        />
      </div>
      
    </div>
  )
}

export default App
