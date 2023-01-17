import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { Home } from './Home';




function App() {
  return (
    <div className="App">
     <ProtectedRoute />
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<ProtectedRoute> <PhoneList /> </ProtectedRoute>} />
      </Routes>
    </div>
  );
}

//--------------------------------------------------------------  
function ProtectedRoute( {children} ){
  const isAuth = localStorage.getItem('token');
  console.log(isAuth);
  return isAuth ? children : <Navigate replace to="/" />;
}
//----------------------------------------------------------------
// fake user login-find and redirect to login page
// Normal function
function checkAuth(data) {
  if (data.status == 401 ) {
    console.log("unauthorized");
    throw Error("unauthorized");
  } else {
    return data.json();
  }
}

function logout(navigate){
  localStorage.removeItem("token");
  window.location.href = "/";
}

function PhoneList(){
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    //Protected API
    fetch("http://localhost:5000/mobiles", {
      method: "GET",
      headers: {
        "x-auth-token": localStorage.getItem("token"),
      },
    })
    .then((data) => checkAuth(data))
    .then((mbs) => setMobiles(mbs))
    .catch((err) => logout());
  }, []);
 
  return(
    <div className='phone-list-container'>
       {mobiles.map((mb, index) => (
        <Phone key={index} mobile={mb} />
       ))};
    </div>
  );
}

//-----------------------------------------------------------------
//component declaration
function Phone( {mobile} ) {
// const mobile = {
// "model": "OnePlus 9 5G",
// "img": "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
// "company": "Oneplus"
// };
  return(
    <div>
      <div className='phone-container'>
        <img className='phone-picture' src={mobile.img} alt={mobile.model}/>
        <h2 className='phone-name'>{mobile.model}</h2>
        <p className='phone-company'>{mobile.company}</p>
      </div>
    </div>
  );
}


export default App;
