import React from 'react';
import FitnessProgram from './fitnessProgram';


function fitnessProgramContainer(){
    return(
               
        <div>
            <h1> Packages for Programs</h1>
            <h2>Fitness Programs </h2>
            <fitnessProgramContainer
            id={1}
            name ={"Cutting"}
            weeks = {12}
            />
         
        </div>



    ) 

}


export default fitnessProgramContainer