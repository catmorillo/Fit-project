// import React, {useContext} from 'react';
import {useState} from 'react';
import React from 'react'; 

function User({id, name, handleUserDelete, handleUserPatch}){
  
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    
   

    const handleDelete = (e) => {
        handleUserDelete(id);
        fetch(`/user/${id}`, {
            method: "DELETE"
        })
    }
    const handlePatch = (e) => {
        e.preventDefault();
        
        let newUserObj = {
            name: userName, 
            age: userAge,  
        };

        fetch(`/user/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUserObj)
        })
            .then(r => r.json())
            .then(handleUserPatch);
     };

   return (
   
    <div style={{backgroundColor: "lightpink"}}>
      <div className="outline-solid max-w-sm rounded overflow-hidden shadow-lg shadow-gray-500/50">
         <div className= 'flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52'>
          
              <form onSubmit={handlePatch} className="form">
                      Username:
                      <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Insert name"
                      />
                      Age:
                      <input
                        type="text"
                        id="age"
                        name="age"
                        onChange={(e) => setUserAge(parseInt(e.target.value))}
                        placeholder=" Insert Age"
                      />   
            
            <button type="button" onClick={handleDelete}>
              Delete
           
            {/* <button onClick={handlePatch}></button> */}
            
            </button>
            </form>
    </div>
    </div>
    </div>

   );
            }       
                
  
          
          

export default User;






 
// Functions such as useEffect and event listeners

// Render method (Returning jsx) */}

