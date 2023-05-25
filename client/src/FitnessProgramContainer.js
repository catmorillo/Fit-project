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
    
    return(                
        <div style={{backgroundColor: "lightpink", textAlign: "center"}}>           
            <h1> Packages for Exercise Programs</h1>
            {WO}
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