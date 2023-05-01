import React from 'react';
import User from './User';


function UserContainer({user, handleUserDelete, handleUserPatch}) {
   
    return (
        <div>
            <h1 className='font-bold text-xl text-center'>Want to Sign Up from a Program? <span className='animate-pulse text-gray-500'></span> Sign Up Today! <span className='animate-pulse text-red-500'> Get Fit to Flex </span></h1>
            <div className='grid grid-cols-4 gap-4'>
            <User
            key = {user?.id}
            id = {user?.id}
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


