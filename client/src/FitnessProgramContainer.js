import FitnessProgram from './FitnessProgram';
import React, {useEffect, useState} from 'react';



function FitnessProgramContainer(){

    const [fitnessProgramsList, setFitnessProgramsList] = useState([]);
    console.log(fitnessProgramsList)
    useEffect(() => {
        fetch('/fitness_programs')
        .then(r => r.json())
        .then(data => setFitnessProgramsList(data));        
    }, []);

    return(
        
        
        <div style={{backgroundColor: "lightpink", textAlign: "center"}}>
           
            <h1> Packages for Workout Programs</h1>
            <h2>Fitness Programs </h2>
            <div className="tabs__wrap"></div>
            <div className="tabs"/>
            <div className="item_wrap"/>
            <div className="tab-item active">Strong Lean Build </div>
            <div className="tab-item">Bulking with Cat </div>
            <div className="tab-item">Cutting with Cat</div>
            <div 
            />
         
        </div>



    ) 

}


export default FitnessProgramContainer