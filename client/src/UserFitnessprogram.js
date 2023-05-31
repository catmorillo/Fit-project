import React, {useState} from 'react';
import styles from "./mystyle.module.css";
import {Button} from 'semantic-ui-react';

function UserFitnessProgram({fitness_program, id, setUserFitnessProgramsList}) {
    const [isVisible, setIsVisible] = useState(false);
   
    const handleDelete = () => {
        fetch(`/user_fitness_programs/${id}`,{
            method:'DELETE',
        })
        .then((response) => {
            if (response.ok) {
                console.log("Fitness program deleted successfully");
                setUserFitnessProgramsList(prevPrograms => prevPrograms.filter(program => program.id !== id));
            } else {
                console.error("Failed to delete Catherinaaa fitness program");
            }
        })    
        .catch((error) => {
            console.error("Failed to delete fitness program", error);
        });        
    };
    const handleClick =() => {
    setIsVisible(!isVisible);
};
    return (
         <div>
          
            <div key={fitness_program.id}>
            <h1 className={styles.user}></h1>
            <h2 className={styles.userfitnessprogram}></h2>
            <h2> User Fitness Program: {fitness_program?.name} </h2>
            {isVisible && (                    
            <div>
                <h2>Description: {fitness_program.description} </h2>               
                <h2>Duration: {fitness_program.duration}</h2>               
                <h2>Difficulty: {fitness_program.difficulty}</h2>
                <h2>Gym Frequency: {fitness_program.gym_frequency}</h2>
                <h2>Training Split: {fitness_program.training_split}</h2>
            </div>
            
            )}            
            <Button type="submit" onClick={() => handleDelete(fitness_program.id)}>
                Delete 
            </Button>
             <Button type="button" onClick={handleClick}className="button button--primary">
                View
            </Button>             
        </div>  
    </div>
    );
}
export default UserFitnessProgram;
