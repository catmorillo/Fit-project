import React, {useEffect, useState} from 'react';
import UserFitnessProgram from './UserFitnessProgram';

function UserFitnessProgramContainer({userFitnessProgram}) {
    const [userFitnessProgramsList, setUserFitnessProgramsList] = useState([]);

    useEffect(() => { 
    fetch('/user_fitness_programs')
    .then(r => r.json())
    .then(setUserFitnessProgramsList);
},[]); 

    const workout = userFitnessProgramsList.map((userGuide) => {
        return <UserFitnessProgram
            key={userGuide.id}
            {...userGuide}   
            setUserFitnessProgramsList={setUserFitnessProgramsList}        
        />
    });

    return (
        <div style={{backgroundColor: "black", textAlign: "center", fontFamily: 'sans serif', color:"white"}} >
             <img src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zml0bmVzcyUyMG1vdGl2YXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" alt="Deadlift" />
            <h1 style={{ fontSize: '24 px', fontWeight: 'bold', fontStyle: 'sans-serif', }}>Welcome </h1>
            <h1 style={{fontSize: '20 px', fontWeight:'bold', fontStyle: 'sans-serif'}}> To Your Fitness Program</h1>
            {workout} 
            <img src="https://media.istockphoto.com/id/693655538/photo/prove-it-to-yourself.webp?b=1&s=170667a&w=0&k=20&c=ZkDv9zGKC57Z3sTu5pAuJ8yHl7iOdsKI_rCf3aSxaV0=" alt="Fitness" />        
        </div>
         
    );
}

export default UserFitnessProgramContainer;
