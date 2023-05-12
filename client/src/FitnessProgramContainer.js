import FitnessProgram from './FitnessProgram';
import React, {useEffect, useState} from 'react';

function FitnessProgramContainer() {
    const [fitnessProgramsList, setFitnessProgramsList] = useState([]);
    // const fpData = ['fitnessProgramsList'];

    useEffect(() => {
        fetch('/fitness_program')
        .then(r => r.json())
        .then(data => setFitnessProgramsList(data));   
                
    }, []);

    const wo = fitnessProgramsList.map((program) => { 
        return <FitnessProgram
            key={program.id} {...program}
            // name={programs.name}
            // description={programs.descriptions}
            // duration={programs.duration}
            // diificulty={programs.dificulty}
            // gym_frequency={programs.gym_frequency}
            // training_split={programs.training_split}
        />
    })   
    return(
                
        <div style={{backgroundColor: "lightpink", textAlign: "center"}}>
           
            <h1> Packages for Workout Programs</h1>
            <FitnessProgram fitnessProgramsList={fitnessProgramsList}/>
            <div className="tabs__wrap"></div>
            <div className="tabs"/>
            <div className="item_wrap"/>
                {wo}
            <div className="tab-item active">Strong Lean Build </div>
            <div className="tab-item">Bulking with Cat </div>
            <div className="tab-item">Cutting with Cat</div>
                 
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