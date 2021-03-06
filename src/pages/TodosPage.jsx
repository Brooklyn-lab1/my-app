import { useEffect, useState } from "react";
import TodosList from "../components/Todos/TodosList";
import { API } from "../utils/api";
import CreateTodo from "../components/Todos/CreateTodo";

const TodosPage = () => {
   const [todos, setTodos] = useState([]);
   const [loading, setLoading] = useState(false);

   useEffect(() => {
      setLoading(true)
      API.get('/posts')
         .then(({ data }) => setTodos(data))
         .catch(e => console.error(e))
         .finally(setLoading(false))
   }, [])

   return (
      <div>
         <h1 className='title'>Todos</h1>
         <CreateTodo setTodos={setTodos} />
         {
            loading
               ?
               (<h2>Loading...</h2>)
               :
               (
                  <TodosList todos={todos} setTodos={setTodos} />
               )
         }
      </div>
   )
}

export default TodosPage;