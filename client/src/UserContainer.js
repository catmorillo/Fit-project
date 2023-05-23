import React from 'react';
import User from './User';


function UserContainer({user, handleUserDelete, handleUserPatch}) {
    
    return (
        <div style={{backgroundColor: "lightpink", textAlign: "center"}}>
            <h1 className='font-bold text-xl text-center'>Sorry to see you go 😔 <span className='animate-pulse text-gray-500'></span> <span className='animate-pulse text-red-500'> </span></h1>
            <div className='grid grid-cols-4 gap-4'>
        <User
            key = {user?.id}
            name = {user?.name}
            age = {user?.age}
            handleUserDelete = {handleUserDelete}
            handleUserPatch = {handleUserPatch}
        />
            </div>
        </div>
    )
}

export default UserContainer;


