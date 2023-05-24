// import {NavLink} from 'react-router-dom'
import React from "react"; 

function NavBar({onLogout}) {



const handleLogout = () =>  {
    localStorage.removeItem('accessToken');
    onLogout();
    // history.push('/login');
};
    return (
      <div>
        <h1>Logout</h1>
        <button onClick={handleLogout}>Logout</button>    
  
      </div>
    );
}

export default NavBar;

//     function handleLogout() {
//       fetch("/logout", {
//         method: "DELETE",
//       }).then(() => onLogout());
//     }
  