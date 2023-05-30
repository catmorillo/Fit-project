import React from 'react';
import { useState} from 'react';
import styles from "./mystyle.module.css";

function UserFitnessProgram({fitness_program, id, handleUserDelete}) {
    const [isVisible, setIsVisible] = useState(false);
    const fitnessProgramId = 1
    const handleDelete = () => {
        fetch(`/user_fitness_programs?fitness_program_id=${fitnessProgramId}`,{
            method:'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                console.log("Fitness program deleted successfully")
            } else {
                console.error("Failed to delete fitness program");
            }
        })
        // e.preventDefault();
    };

    // const handleDelete = () => {
    //     fetch(`/fitness_program_id/${id}`,{
    //         method:'DELETE',
    //     })
    //     .then((response) => {
    //         if (response.ok) {
    //             console.log('Fitness Program deleted successfully!');
    //             handleUserDelete(id); 
    //         } else {
    //             console.error('Failed to delete fitness program');
    //         }
    //     })
        
    // }





    const handleClick =() => {
    setIsVisible(!isVisible);
};
    return (
         <div>   
            <h1 className={styles.user}></h1>
            <h2> User Fitness Program: {fitness_program?.name} </h2>
            {isVisible && (    
            <div>
                <h2>Description: {fitness_program.description} </h2>
                <h2>Duration: {fitness_program.duration}</h2>
                <h2>Difficulty: {fitness_program.difficulty}</h2>
                <h2>Gym Frequency: {fitness_program.gym_frequency}</h2>
                <h2>Training Split: {fitness_program.training_split}</h2>
            </div>
            )} 
            <button type="submit" onClick={handleDelete}>
                Delete 
            </button>
             <button type="button" onClick={handleClick}className="button button--primary">
                View
            </button> 
       
        </div>  
        
     );
}
export default UserFitnessProgram;
//     return (
//         <div>
//             <h1> Your Fitness Program</h1>
//             {userFitnessPrograms.map((program) => ( */}
/* //                 <div key={program.id}>
//                     <h3>{program.name}</h3>
//                     <p>{program.description}</p>
//                 </div>
//             ))}
//         </div>
        
//     );
 } */









    /* //   console.log(userFitnessPrograms);
//       const workouts = userFitnessPrograms.map((workoutObj) => {  */
/* //           const users = workoutObj.users.map((user) => { */
/* //             console.log(users)
//               return (
//                   <div key={user?.id}>
//                       <p>{user?.name}</p>   
//                   </div>
//               );
//             });
//             const fitnessPrograms= workoutObj.fitnessProgram.map((fp) => { */
/* //               return (
//                   <div key={fp.id}>
//                       <p>{fp.name}</p>
//                   </div>
//               );
//             });
//           return (
//               <UserFitnessProgram */
/* //                 key ={workoutObj.id}
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
//       ); */
  








