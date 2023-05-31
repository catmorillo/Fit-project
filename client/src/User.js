import React, {useState} from 'react'; 
import styles from "./mystyle.module.css";
import {Button} from 'semantic-ui-react';

function User({id, name, handleUserPatch}) {
  
    const [userName, setUserName] = useState('');
  
    const handlePatch = (e) => {
        e.preventDefault();
        
        let updatedUser = {
          username: userName,
        };

      fetch(`/users/${id}`, {
        method: "PATCH",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(updatedUser)
    })
        .then(r => r.json())
        .then(handleUserPatch);
     };

return (   
    <div style={{backgroundColor: "lightpink"}} >      
      <div className="outline-solid max-w-sm rounded overflow-hidden shadow-lg shadow-gray-500/50"/>
         <div className= 'flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52'/>
         <h1 className={styles.user}></h1>
              <form onSubmit={handlePatch} className="form">
                Username:
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Insert name"
                />            
            <Button onClick={handlePatch}>
              Edit User
            </Button>
          </form>
        </div>
);
}   
export default User