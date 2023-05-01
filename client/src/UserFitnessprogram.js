import React from 'react';
import {useState} from 'react';





function UserFitnessProgram({id, name, bulking, cutting, strongLeanBuild}){
   function UserFitnessProgramContainer({userFitnessProgram}) {
      console.log(userFitnessProgram);
      const workouts = userFitnessProgram.map((workoutObj) => { 
          const users = workoutObj.users.map((user) => {
              return (
                  <div key={user?.id}>
                      <p>{user?.name}</p>   
                  </div>
              );
            });
          const fitnessPrograms= workoutObj.fitnessProgram.map((fp) => {
              return (
                  <div key={fp.id}>
                      <p>{fp.name}</p>
                  </div>
              );
          });
          return (
              <UserFitnessProgram
                key = {workoutObj.id}
                name = {workoutObj.name}
                users = {users}
                fitnessPrograms = {fitnessPrograms}
              />
      );
  
  })
  
      return (
          <div className='grid grid-cols-4 gap-4'>
              {workouts}
          </div>
      );
  }

}


export default UserFitnessProgram;








