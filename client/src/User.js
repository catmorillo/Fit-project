import React from 'react';
import {useState} from 'react';








function User({id, name, handleUserDelete, handleUserPatch}){
    // Hooks
    const [userName, setUserName] = useState('')

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
        }

        fetch(`/user/${id}`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(newUserObj)
        })
            .then(r => r.json())
            .then(handleUserPatch)
    }


    // Functions such as useEffect and event listeners

    // Render method (Returns JSX)
 
    return (
        {
            User.map((userObj) => ( 
                <div>   
                    <h1>{userObj.name}</h1>
                    <h2>{userObj.id}</h2>       
                </div>
            ))
        }
    )
}

export default User;

