import React from 'react';
import { useState} from 'react';
import styles from "./mystyle.module.css";
import {Button} from 'semantic-ui-react';
// import styles from './userFitnessProgram.module.css';

function UserFitnessProgram({fitness_program, id}) {
    const [isVisible, setIsVisible] = useState(false);

    const handleDelete = () => {
        fetch(`/user_fitness_programs/${id}`,{
            method:'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                console.log("Fitness program deleted successfully")
                handleDelete(id); 
            } else {
                console.error("Failed to delete Catherinaaa fitness program");
            }
        })
        // .catch((error) => {
        //     console.error("Failed to delete fitness program", error);
        // });
        
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
              
            {/* <h1 className={styles.user}></h1> */}
            <h2 className={styles.userfitnessprogram}></h2>
            <h2> User Fitness Program: {fitness_program?.name} </h2>
            {isVisible && (    
            <div>
                {/* <img src=""/> */}
                <h2>Description: {fitness_program.description} </h2>
               
                <img src="https://media.istockphoto.com/id/693655538/photo/prove-it-to-yourself.webp?b=1&s=170667a&w=0&k=20&c=ZkDv9zGKC57Z3sTu5pAuJ8yHl7iOdsKI_rCf3aSxaV0=" alt="Fitness" />
                <h2>Duration: {fitness_program.duration}</h2>               
                <h2>Difficulty: {fitness_program.difficulty}</h2>
                <h2>Gym Frequency: {fitness_program.gym_frequency}</h2>
                <h2>Training Split: {fitness_program.training_split}</h2>
            </div>
            )}            
            <Button type="submit" onClick={handleDelete}> 
                Delete 
            </Button>
             <Button type="button" onClick={handleClick}className="button button--primary">
                View
            </Button> 
            
        </div>  
        
     );
}
export default UserFitnessProgram;









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
  








