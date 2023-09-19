import { useState } from 'react';
import './Todo.css';
import TodoList from '../TodoList/TodoList';

function Todo ({todolist}) {
    const [todoItems, setTodoItems] = useState([{data:"Vishnu", id: 26},]);
    const [inputText, setInputText] = useState("");
    
    function deleteTodo(id) {
        const remainingTodo = todoItems.filter((todo) => todo.id != id);
        setTodoItems(remainingTodo);
    }
    function editTodo (id, newTodo) {
        let updatedTodos = todoItems.map((todo) => {
            if(todo.id == id) todo.data = newTodo;
            return todo; 
        });
        setTodoItems(updatedTodos);
    }
    return (
        <div className="input-wrapper">  
            <h1>This is Todo App</h1>
            <input 
                className="inp"
                type="text" 
                placeholder="Your Task Here..."
                value={inputText}  
                onChange={(e) => setInputText(e.target.value)}
            />
            <button className="btn" onClick={() => {
                setTodoItems([...todoItems, {data:inputText, id: (new Date()).getTime()}])
                setInputText("")
            } }>Add ToDo</button>
            {todoItems.map((todo) => <TodoList 
            key={todo.id} 
            todo={todo}
            delete={() => deleteTodo(todo.id)}
            edit={(newTodo) => editTodo(todo.id, newTodo)}
            />)}
            
        </div>
    )
}

export default Todo;