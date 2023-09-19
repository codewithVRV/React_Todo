import { useState } from 'react';
import './Todo.css';
import TodoList from '../TodoList/TodoList';

function Todo ({todolist}) {
    const [todoItems, setTodoItems] = useState([{data: "Vishnu", id: 23}, {data: "Neha", id: 45}])
    const [inputText, setInputText] = useState("");


    function deleteTodo (todoId){
        const remainingTodos = todoItems.filter((todo) => todo.id != todoId);
        setTodoItems(remainingTodos);
    }

    function editTodo(id, newTodo) {
        let updatedTodos = todoItems.map((todo) => {
            if(todo.id == id) {
                console.log("condition matched")
                todo.data = newTodo
            }
            return todo;
        })

        setTodoItems(updatedTodos)
    }


    return (
        <>
            <div className='input-wrapper'>
                    <h1>This is a todo app</h1>
                    <input className='inp' type="text" placeholder="Your Task Here..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                    <button className='btn'
                        onClick={() => setTodoItems([ ...todoItems, {data: inputText, id: (new Date()).getTime()}])}
                    >Add Todo</button>
            </div>
            {todoItems.map((todo) => <TodoList 
            
                                    key={todo.id}
                                    todoData={todo.data}
                                    deleteTask={() => deleteTodo(todo.id)}
                                    edit={(todoData) => editTodo(todo.id, todoData)}
            />

                

             )}
             
            
        </>
    )
}

export default Todo;