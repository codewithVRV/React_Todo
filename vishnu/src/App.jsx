
import './App.css'
import Todo from './Coponent/Todo/Todo'

function App() {
  const todo = [{data: "vishnu", id: 21}, {data: "neha", id: 32}, {data: "atul", id: 89}]
  return (
      <>
        <Todo  todolist={todo}/>
      </>
  )
}

export default App;
