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
  const { handleChange, values, handleSubmit } = useFormik({
    initialValues : { username: "Nandhini", password: "123"},
    onSubmit: (values) => {
      console.log(values);

      fetch("http://localhost:5000/user/Login", {
        method: 'POST',
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(values),
      }) 
      .then((data) => data.json)
      .then((result) => console.log(result));
    },
  });
  return(
    <form onSubmit={handleSubmit} className='login-form'>
      <h2>Login</h2>
      <TextField  label="Username" 
      variant="outlined" 
      onChange={handleChange} 
      value={values.username} 
      name= "username"
      />
      <TextField  label="Password" 
      variant="outlined" 
      onChange={handleChange} 
      value={values.password}
      name= "password"
      />
      <Button type="submit" variant="contained">Submit</Button>
    </form>
  );
}