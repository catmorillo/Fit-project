import React from 'react';
import { useState, useEffect } from 'react';

// function UserFitnessProgram({id, name}){
function UserFitnessProgram({name, description}) {
    const [userFitnessPrograms, setUserFitnessPrograms] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const handleButton =() => {
    setIsVisible(!isVisible);
};

    // useEffect(() => {
    //     setUserFitnessPrograms(programs);
    // }, [programs]);

    return (
        <div>            
            {/* <p>{userFitnessPrograms}</p> */}
            {isVisible && (
            <div>
                <h1 className='mb-4 text-base  text-gray-700 dark:text-gray-900'></h1>
                Program:{name}
            <h1 className='mb-4 text-base  text-gray-700 dark:text-gray-900'></h1>
                Description: {description}
            
            </div>
            )}
            <button onClick={handleButton}className="button button--primary">
            Click To View 
            </button>
        </div> 
    );
}

//     return (
//         <div>
//             <h1> Your Fitness Program</h1>
//             {userFitnessPrograms.map((program) => ( */}
{/* //                 <div key={program.id}>
//                     <h3>{program.name}</h3>
//                     <p>{program.description}</p>
//                 </div>
//             ))}
//         </div>
        
//     );
 } */}

export default UserFitnessProgram;







    {/* //   console.log(userFitnessPrograms);
//       const workouts = userFitnessPrograms.map((workoutObj) => {  */}
{/* //           const users = workoutObj.users.map((user) => { */}
{/* //             console.log(users)
//               return (
//                   <div key={user?.id}>
//                       <p>{user?.name}</p>   
//                   </div>
//               );
//             });
//             const fitnessPrograms= workoutObj.fitnessProgram.map((fp) => { */}
{/* //               return (
//                   <div key={fp.id}>
//                       <p>{fp.name}</p>
//                   </div>
//               );
//             });
//           return (
//               <UserFitnessProgram */}
{/* //                 key ={workoutObj.id}
//                 name ={workoutObj.name}
//                 users = {users}
//                 fitnessPrograms = {fitnessPrograms}
//               />
//             );
  
//   })
  
//       return (
//           <div className='grid grid-cols-4 gap-4'>
//               {workouts}
//           </div>
//       ); */}
  








