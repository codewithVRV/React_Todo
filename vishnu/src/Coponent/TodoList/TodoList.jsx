import { useState } from 'react';
import './TodoList.css'

function TodoList (props) {
    // const [edit, setEdit] = useState(false);
    const [isEdit, setIsEdit] = useState(false)
    const [todoDatas, setTodoDatas] = useState(props.todoData)
    console.log("button state is", isEdit)
    return (
        <div  className="todolist-wrapper">
            <div>
                {
                (isEdit) ? <input  type='text' className='inp'
                value={todoDatas} onChange={(e) => setTodoDatas(e.target.value)}  /> :
                <h2>{props.todoData}</h2>
                }
            </div>

            <div className='btn-wrapper'>
                
                <button className="btn-2" onClick={() => {
                    setIsEdit(!false)
                    props.edit(todoDatas);
                }}>{(isEdit) ? "Save" : "Edit"}</button>

                <button className="btn-2"
                    onClick={() => {
                        props.deleteTask()
                    }}
                >Delete</button>

            </div>
        </div>
    )
}

export default TodoList;