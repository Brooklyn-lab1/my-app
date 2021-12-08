// import Kot from "../assets/images/kot.jpg";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import React from 'react';
import { useState, useEffect } from 'react';


const HomePage = () => {
   const [count, setCount] = useState(0);

   useEffect(() => {
      document.title = `${count}`
   })

   return (
      <div>
         <h1 className='title'>Home</h1>
         {/* <Button variant="contained" color='warning' size='small'>
            Hello World 
            <DeleteIcon />
         </Button> */}

         {/* <img src={Kot} alt="Kot" />
         <img src={require("../assets/images/kot.jpg").default} alt="Kot" /> */}

         <button onClick={() => setCount(count + 1)}>CountUp</button>
         <h2>{count}</h2>
         <button onClick={() => setCount(count - 1)}>CountDown</button>

      </div>
   )
}

export default HomePage
