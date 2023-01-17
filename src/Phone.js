import Button from '@mui/material/Button';
import { checkAuth, logout } from './App';


const ROLE_ID = {
  ADMIN: "0",
  NORMAL_USER: "1",
};

//component declaration
export function Phone({ mobile, getMobiles }) {
  const roleId = localStorage.getItem("roleId");

  const deleteMobile = (mobileId) =>{
    fetch(`http://localhost:5000/mobiles/${mobileId}`, {
      method: "DELETE",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
        roleId: roleId
      },
    })
    .then((data) => checkAuth(data))
    .then(() => getMobiles())               //refresh data - again get mobiles
    .catch((err) => logout());
  };

  return (
    <div>
      <div className='phone-container'>
        <img className='phone-picture' src={mobile.img} alt={mobile.model} />
        <h2 className='phone-name'>{mobile.model}</h2>
        <p className='phone-company'>{mobile.company}</p>
        { roleId === ROLE_ID.ADMIN ? 
        <Button onClick={() => deleteMobile(mobile._id)}   sx={{ width: "100%" }} 
        color={"error"} 
        type="submit" 
        variant="contained">
          DELETE
        </Button> : null }
      </div>
    </div>
  );
}
