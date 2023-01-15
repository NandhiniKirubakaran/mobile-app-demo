import { useEffect, useState } from 'react';
import './App.css';
import { Routes, Route, Link, Navigate } from "react-router-dom";
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
function PhoneList(){
  const [mobiles, setMobiles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/mobiles")
    .then((data) => data.json())
    .then((mbs) => setMobiles(mbs));
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
