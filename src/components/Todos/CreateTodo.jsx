import TextField from '@mui/material/TextField';
import Buttons from '../Buttons/Button'

const CreateTodo = () => {
   return (
      <div className="todos-create">
         <TextField id="outlined-basic" label="Outlined" variant="outlined" className="todos-create__input" />
         <Buttons text={Create}>

         </Buttons>
      </div>
   )
}

export default CreateTodo
