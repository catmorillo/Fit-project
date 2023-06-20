import FitnessProgram from './FitnessProgram';
import React, {useEffect, useState} from 'react';

function FitnessProgramContainer({fitnessProgram}) {
    const [fitnessProgramsList, setFitnessProgramsList] = useState([]);
    
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
        <div style={{backgroundColor: "black", textAlign: "center", fontFamily: 'tilt prism, sans-serif', color: 'white'}}>           
            <h1 style={{ color: 'purple', fonntSize: '24px' }}>Packages for Exercise Programs</h1>
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