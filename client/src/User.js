import React from 'react';
import {useState} from 'react';

  // Hooks


function User({id, name, age, handleUserDelete, handleUserPatch}){
  
    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');



    const handleDelete = (e) => {
        handleUserDelete(id)
        fetch(`/user/${id}`, {
            method: "DELETE"
        })
    }
    const handlePatch = (e) => {
        e.preventDefault()
        
        let newUserObj = {
            name: userName, 
            age: userAge,  
        }

        fetch(`/user/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUserObj)
        })
            .then(r => r.json())
            .then(handleUserPatch)
    }


   
 
   return (
    <div>
      <div className="outline-solid max-w-sm rounded overflow-hidden shadow-lg shadow-gray-500/50">
         <div className= 'flex flex-col rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52'>
              <h1>Name: {name}</h1>
              <p>Age: {age}</p>
              <button onClick={handleClose}className="bg-black text-white active:bg-blue-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"> </button>
                   <button type="button"
                    className= "animate-pulse inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500 sm:text-sm"
                    onClick={handleDelete} 
                    > </button>
                    <button onClick={handlePatchClose} className="bg-gray-500 text-white active:bg-gray-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button">Parley</button>
                {isPatchVi && (
                  <div>
                    <form onSubmit={handlePatch} className="form">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setUserName(e.target.value)}
                        placeholder="Enter User Name"
                      />
                      <input
                        type="text"
                        id="age"
                        name="age"
                        onChange={(e) => setUserAge(parseInt(e.target.value))}
                        placeholder="Enter User Age"
                      />
                      <div className='mb-6'>
                        </div>
                    </form>
                    <button onClick={handlePatch}>Provide Parley</button>
                    <button onClick={handlePatchClose}>Back To The Brig</button>
                  </div>
                )}
          </div>
        </div>
      </div>
  
          );
        }


export default User;






 
 // Functions such as useEffect and event listeners

    // Render method (Returns JSX) */}

//         {
//             // User.map((userObj) => ( 
//                 <div>   
//                     <h1>{userObj.name}</h1>
//                     <h2>{userObj.id}</h2>       
//                 </div>
//             ))
//         }
//     )
// }

//  */}

