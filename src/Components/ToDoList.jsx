import ToDoItem from "./ToDoItem";
import "./style.css"

function ToDoList(props){
    

    return (
        <div className="todo-list">
            { props.todos.map((item)=>(
                
                <ToDoItem 
                    key={item.id}
                    todo={item} 
                    completeTask={props.completeTask}
                    deleteTodo={props.deleteTodo}
                    setEditData={props.setEditData}
                    isCompleted={props.isCompleted}
                />
                
            )) }
           
        </div>
    )
}

export default ToDoList;
