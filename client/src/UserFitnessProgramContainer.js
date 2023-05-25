//name and description of programs 
import React, {useEffect, useState} from 'react';
import UserFitnessProgram from './UserFitnessProgram';

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