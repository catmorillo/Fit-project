// import React, {useContext} from 'react';
import React, {useState} from 'react'; 

function User({id, name, handleUserPatch}) {
  
    const [userName, setUserName] = useState('');
    // const [userId, setUserId] = useState('');
    
  
  //   const handleDelete = (e) => {
  //     fetch(`/users/${id}`, {
  //       method: "DELETE"
  //     })
  //       .then((response) => response.json())
  //       .then(() => {
  //         handleUserDelete(id);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //   });
  // };


    const handlePatch = (e) => {
        e.preventDefault();
        
        let updatedUser = {
            name: userName,
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


              <form onSubmit={handlePatch} className="form">
                Username:
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Insert name"
                />

            
            <button onClick={handlePatch}>
              Edit User
            </button>
          </form>
        </div>
);
}
   
export default User