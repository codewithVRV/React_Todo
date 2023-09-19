import { useState } from 'react';
import './TodoList.css'

function TodoList (props) {
    const [isEdit, setIsEdit] = useState(false)
    const [todoData, setTodoData] = useState(props.todo.data);
    return (
        <div className="todolist-wrapper"> 
            <div>
                {
                    (isEdit) ? <input type="text" className="inp"
                    value={todoData} 
                    onChange={(e) => setTodoData(e.target.value)}/> 
                    : <h2 className="task">{props.todo.data}</h2>                        
                }
            </div>
            
            <div className="btn-wrapper">
                <button 
                className="btn-2"
                onClick={() => {
                    props.delete();
                }
                } 
                > Delete </button>
                <button
                className="btn-2"
                onClick={() => {
                    setIsEdit(!isEdit) 
                    props.edit(todoData)
                }
                }
                >{(isEdit) ? "Save" : "Edit"}</button>
            </div>
        </div>
    )
}

export default TodoList;