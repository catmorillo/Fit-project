import React from 'react';
import UserFitnessProgram from './UserFitnessProgram';

function UserFitnessProgramContainer({ufp_data}) {
    
return (
  
 <div style={{backgroundColor: "lightpink", textAlign: "center"}}>
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

