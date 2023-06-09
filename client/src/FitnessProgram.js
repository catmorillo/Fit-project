import React, {useState} from 'react';
import styles from "./mystyle.module.css";
import {Button} from 'semantic-ui-react';  

function FitnessProgram({id, name, description, duration, difficulty, gym_frequency, training_split}){

    const [isVisible, setIsVisible] = useState(false);
    const handleButton =() => {
        setIsVisible(!isVisible);
    };
    const [userFitnessProgramsList, setUserFitnessProgramsList] = useState([]);

function handleCreateUserFitnessProgram() {
    const newFitnessProgram = {
        fitness_program_id: id,
    };
   
    fetch('/user_fitness_programs', {
    method:'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newFitnessProgram),
    })
        .then((r) => {
            if (r.ok) {
                return r.json();
            } else 
            {
                throw new Error('Failed to create fitness program');
            }
        })
        .then((createdProgram) => {
            setUserFitnessProgramsList([...userFitnessProgramsList, createdProgram]);
        });
    }
    return(
        <div>  
                <h1 className={styles.fitnessprogram}></h1>
                <h2>Program : {name} </h2>
                {isVisible && (
            <div>
                <h2>Description : {description}</h2>
                <h2>Duration : {duration}</h2>
                <h2>Difficulty : {difficulty}</h2>
                <h2>Gym Frequency : {gym_frequency}</h2>
                <h2>Training Split : {training_split}</h2>
            </div>
                )}
                <Button onClick={handleButton}className="button button--primary">
                 Click here
                </Button>
                <Button onClick={handleCreateUserFitnessProgram} style={{fontSize: '24px'}} >
         +
        </Button>              
        </div>            
    );
}
export default FitnessProgram;

        

