import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from 'formik';

export function Home() {
  return (
    <div>
      <h1>Welcome to Mobiles App!!!</h1>
      <LoginForm />
    </div>
  );
}


function LoginForm(){
  return(
    <form className='login-form'>
      <h2>Login</h2>
      <TextField  label="Username" variant="outlined" />
      <TextField  label="Password" variant="outlined" />
      <Button variant="contained">Submit</Button>
    </form>
  );
}