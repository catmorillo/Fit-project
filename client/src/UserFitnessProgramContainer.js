import React from 'react';
import UserFitnessProgram from './UserFitnessProgram';

function UserFitnessProgramContainer({name, bulking, cutting, strongLeanBuild}) {
    
//name and description  
return (
  
    <div>
    <h1> Your Fitness Program </h1>
    <UserFitnessProgramContainer
        bulking={bulking}
        cutting={cutting}
        strongleanbuild={strongLeanBuild}
    />
    <p></p>
    </div>
    )


}

export default UserFitnessProgramContainer

