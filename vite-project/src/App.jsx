import { useState } from 'react'
import './App.css'

function App() {
  const [task, setTask] = useState("");
  
  const [todos, setTodos] = useState([]);

 function addTodo(){

  if(task.trim() === "")return;

    setTodos([

     ...todos,

     { id: Date.now(), text: task, completed: false }

    ]);

   setTask("");
 }

   function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }


 function toggleTodo(id){

   setTodos(

     todos.map(todo => 

      todo.id === id 

         ?{ ...todo, completed: !todo.completed}

           :todo

     )

   );
 }


  return (
    <>
         <div className='app'>

          <div className='todo-card'>
           <h1>✨ My Todo App</h1>
             

             <div className="input-box">
               <input
                 type="text"
                 placeholder="Add a new task..."
                 value={task}
                 onChange={(e) => setTask(e.target.value)}
               />

                 <button onClick={addTodo}>+</button>
             </div>

              <ul>
                {todos.map(todo => (
                    <li
                    
                    key={todo.id}
                    
                     className={todo.completed ? "done" : ""}
                    
                    >
                     
                     <span onClick={() => toggleTodo(todo.id)}>
                     {todo.text}
                      </span>
                      <button onClick={() => deleteTodo(todo.id)}>🗑</button>




                    </li>

                ))}

              </ul>
          </div>

         </div>
    </>
  )
}

export default App
