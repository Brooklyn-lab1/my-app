// import './Button.scss';
import Button from '@mui/material/Button';

const Buttons = ({ text }) => {
   return (
      <Button variant="outlined">{text}</Button>
      // <button className='button'>{text}</button>
   )
}

export default Buttons
