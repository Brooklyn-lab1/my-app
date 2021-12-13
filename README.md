
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";

      <TextField
        id="outlined-basic"
        label="Todo text..."
        variant="outlined"
        size="small"
      />

      <AddCircleIcon
        color="primary"
        fontSize="large"
      >
        Add
      </AddCircleIcon>

.todos-create {
   margin-bottom: 25px;
   position: relative;
   display: flex;
   max-width: 300px;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   border-radius: 10px;
   background: #b5b4b4;
   padding: 15px;

   &__input {
      border: 1px solid tomato;
      padding: 6px 10px;
      margin-right: 10px;
   }

   &__error {
      display: none;
      position: absolute;
      bottom: -15px;
      font-size: 12px;
      line-height: 12px;
      left: 0;
      color: tomato;

      &.show {
         display: block;
      }
   }

   &__button {
      cursor: pointer;
   }
}

// -----------------------------------

import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";       
       
        <IconButton
          color="primary"
          aria-label="delete"
          size="large"
        >
          <DeleteIcon fontSize="inherit" />
        </IconButton>

        <EditIcon color="primary" size="large"></EditIcon>

        <Button color="primary" variant="text"></Button>



// ------ Checkbox ------

   <input
      className="todo__checkbox"
      id={todo.id}
      type="checkbox"
   />
   <label htmlFor={todo.id} className="todo__label-checkbox" />

   &__label-checkbox {
      position: relative;
      cursor: pointer;
      margin-right: 60px;
   }

   &__label-checkbox:before {
      content: "";
      position: absolute;
      top: -1px;
      left: 0;
      width: 45px;
      height: 20px;
      border-radius: 13px;
      background: #cdd1da;
      box-shadow: inset 0 2px 3px rgba(0, 0, 0, 0.4);
      transition: 0.2s;
   }

   &__label-checkbox:after {
      content: "";
      position: absolute;
      top: 0;
      left: 2px;
      width: 18px;
      height: 18px;
      border-radius: 10px;
      background: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.4);
      transition: 0.2s;
   }

   &__checkbox:checked + &__label-checkbox::after {
      left: 24px;
   }