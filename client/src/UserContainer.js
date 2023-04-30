import React from 'react';
import Users from './Users';


function UsersContainer({users, handleUserDelete, handleUserPatch}) {
    const people = users.map((userObj) => {
        return <Users
            key = {userObj?.id}
            id = {userObj?.id}
            name = {userObj?.name}
            age = {pirateObj?.age}
            handleUserDelete = {handleUserDelete}
            handleUserPatch = {handleUserPatch}

        />
    })

    return (
        <div>
            <h1 className='font-bold text-xl text-center'>Write something here cat <span className='animate-pulse text-gray-500'>Parley</span> and here too! <span className='animate-pulse text-red-500'> Also here </span></h1>
            <div className='grid grid-cols-4 gap-4'>
                {people} 
            </div>
        </div>
    )
}

export default UsersContainer

