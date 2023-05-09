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
              {/* <p>Name: {name}</p>
              <p>Age: {age}</p> */}
                   {/* <button 
                    type="button"
                    className= "animate-pulse inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500 sm:text-sm"
                    onClick={handleDelete} 
                  > 
                     
                  </button> */}
                  <div>
                    
                    <h1 onSubmit={handlePatch} className="form">
                      <label>Homepage</label>
                      {/* <p
                        type="text"
                        id={`name-${id}`}
                        name="name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder=""
                      /> */}
                      {/* <p
                        type="text"
                        id={`age-${id}`}
                        age="age"
                        value={userAge}
                        onChange={(e) => setUserAge(parseInt(e.target.value))}
                        placeholder=""
                      /> */}
                      <div className='mb-6'>
                        </div>
                    </h1>
                    <h2 onClick={handlePatch}></h2>
                  </div>              
                 </div>
              </div>
             </div>
  
          );
          }

export default User;






 
// Functions such as useEffect and event listeners

// Render method (Returning jsx) */}

