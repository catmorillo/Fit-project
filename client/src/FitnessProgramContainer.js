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
                
        <div style={{backgroundColor: "lightpink", textAlign: "center"}}>
           
            <h1> Packages for Workout Programs</h1>
            {/* <FitnessProgram fitnessProgramsList={fitnessProgramsList}/> */}
            <div className="tabs__wrap"></div>
            <div className="tabs"/>
            <div className="item_wrap"/>
                {WO}
                 
            <div 
            />
         
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