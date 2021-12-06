import TodoItem from "./TodoItem";
import "./Todos.scss";

const TodosList = ({ todos }) => {
   return (
      <ul className='list'>
         {
            todos.map((todo, index) => <TodoItem key={index} todo={todo} index={index} />)
         }
      </ul>
   )
}

export default TodosList
