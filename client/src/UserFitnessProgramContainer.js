//name and description of programs 
import React, {useEffect, useState} from 'react';
import UserFitnessProgram from './UserFitnessProgram';
// import styles from './userFitnessProgram.module.css';

function UserFitnessProgramContainer({userFitnessProgram}) {
    const [userFitnessProgramsList, setUserFitnessProgramsList] = useState([]);

    useEffect(() => { 
    fetch('/user_fitness_programs')
    .then(r => r.json())
    .then(setUserFitnessProgramsList);
},[]); 

    const workout = userFitnessProgramsList.map((userGuide) => {
        return <UserFitnessProgram
            key={userGuide.id}
            {...userGuide}           
        />
    });

    return (
        <div style={{backgroundColor: "lightpink", textAlign: "center"}} >
             <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzcyUyMG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" alt="Deadlift Photo" />"
            <h1>Welcome </h1>
            <h1> To Your Fitness Program</h1>
            {workout}         
        </div>
         
    );
}

export default UserFitnessProgramContainer;

  

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