import React from 'react';
import UserFitnessProgram from './UserFitnessProgram';

function UserFitnessProgramContainer({ufp_data}) {
    
//name and description of programs 
return (
  
    <div>
    <h1> Your Fitness Program </h1>
    <UserFitnessProgram
   
    programs ={ufp_data}


        // name={ufp_data.name}
        // bulking={ufp_data.bulking}
        // cutting={ufp_data.cutting}
        // strongleanbuild={ufp_data.strongLeanBuild}
    />
    <p></p>
    </div>
    )


}

export default UserFitnessProgramContainer

