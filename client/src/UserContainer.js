import React from 'react';
import User from './User';

function UserContainer({user, handleUserPatch}) {
   
    return (
        // <div style={{backgroundColor: "lightpink", textAlign: "center"}}>
        <div 
            style={{backgroundColor: "purple", textAlign: "center"}}>
                <img src="https://cdn.shopify.com/s/files/1/0557/3987/5491/products/Pink-Bumper-Lifestyle-3.jpg?v=1627326754" alt="plated pink weights"/>
        
    

            <h1 className='font-bold text-xl text-center'> Edit your info to upgrade and get Stronger 🦾 <span className='animate-pulse text-gray-500'></span> <span className='animate-pulse text-red-500'> </span></h1>
            <div className='grid grid-cols-4 gap-4'>
        <User
            key = {user?.id}
            name = {user?.name}
            handleUserPatch = {handleUserPatch}
            id={user?.id}
        />
            </div>
        </div>
    )
}

export default UserContainer;


