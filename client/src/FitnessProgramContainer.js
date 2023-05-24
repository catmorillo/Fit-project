import FitnessProgram from './FitnessProgram';
import React, {useEffect, useState} from 'react';

function FitnessProgramContainer({fitnessProgram}) {
    const [fitnessProgramsList, setFitnessProgramsList] = useState([]);
    // const [userFitnessProgramsList, setUserFitnessProgramsList] = useState([]);

    useEffect(() => {
    fetch('/fitness_programs')
    .then(r => r.json())
    .then(setFitnessProgramsList);   
}, []);

    const WO = fitnessProgramsList.map((program) => { 
        return <FitnessProgram 
            key={program.id}
             {...program}                               
        />
    })  
// function handleCreateUserFitnessProgram() {
//     const newFitnessProgram = {
//         user_id: 'user_id',
//         fitness_program_id: 'fitness_program_id',
//     };
       
//     fetch('/user_fitness_programs', {
//     method:'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newFitnessProgram),
//         })
//             .then((r) => {
//                 if (r.ok) {
//                     return r.json();
//                 } else 
//                 {
//                     throw new Error('Failed to create fitness program');
//                 }
//             })
//             .then((createdProgram) => {
//                 setUserFitnessProgramsList([...userFitnessProgramsList, createdProgram]);
//             });
//         }    
    
    return(
                
        <div style={{backgroundColor: "lightpink", textAlign: "center"}}>           
            <h1> Packages for Exercise Programs</h1>
                {WO}
                {/* <button onClick={handleCreateUserFitnessProgram} style={{fontSize: '24px'}} >
                +
               </button>  */}
        </div>                
    )
}
export default FitnessProgramContainer



 












 // const [fitnessProgramsList, setFitnessProgramsList]
    // const fp_data = ['fitnessProgramsList'];
    // console.log('fitnessProgramsList')
    // useEffect(() => {
    //     fetch('/fitness_programs')
    //     .then(r => r.json())
    //     .then(data => setFitnessProgramsList(data));        
    // }, []);