import React from 'react';
import FitnessProgram from './fitnessProgram';


function fitnessProgramContainer(){
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
            <fitnessProgramContainer
            id={1}
            name ={"Cutting"}
            weeks = {12}
            />
         
        </div>



    ) 

}


export default fitnessProgramContainer