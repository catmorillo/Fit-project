import React, {useEffect, useState} from 'react';
import UserFitnessProgram from './UserFitnessProgram';
//name and description of programs 
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
            // name={userGuide.name}
            // description={userGuide.description}
           
        />
    })
    return (
  
        <div style={{backgroundColor: "lightpink", textAlign: "center"}} >
            <h1>Welcome </h1>
            <h1> To Your Fitness Program</h1>
            {workout} 
            <UserFitnessProgram/>
        </div>
    )
}

export default UserFitnessProgramContainer

  

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