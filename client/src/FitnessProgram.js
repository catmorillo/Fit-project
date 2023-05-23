import React, {useState} from 'react';
// import FitnessProgramContainer from './FitnessProgramContainer';
// import styles from "./mystyle.module.css";

    

function FitnessProgram({name, description, duration, difficulty, gym_frequency, training_split}){

    const [isVisible, setIsVisible] = useState(false);
    const handleButton =() => {
        setIsVisible(!isVisible);
    };
    const [userFitnessProgramsList, setUserFitnessProgramsList] = useState([]);
// function handleLogout() {
//     localStorage.removeItem('accessToken');
//         // history.push('/login');
//     }


function handleCreateUserFitnessProgram() {
    const newFitnessProgram = {
        user_id: 'user_id',
        fitness_program_id: 'fitness_program_id',
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
                <button onClick={handleButton}className="button button--primary">
                 Click here
                </button>
                <button onClick={handleCreateUserFitnessProgram} style={{fontSize: '24px'}} >
         +
        </button>              


                {/* <button onClick={handleLogout}>Logout</button>     */}
        </div>            
    );
}
export default FitnessProgram;


























































//make fetch request for fitness programs 

//     const [fitnessProgramName, setFitnessProgramName] = useState('');
//     const [fitnessProgramBulking, setFitnessProgramBulking] = useState('');
//     const [fitnessProgramCutting, setFitnessProgramCutting] = useState('');
//     const [fitnessProgramStrongLeanBuild, setFitnessProgramStrongLeanBuild] = useState('');
//     const [isVisible, setIsVisible] = useState(false)
//     const [isPatchVi, setIsPatchVi] = useState(false)

//     const handleClose = () => {
//         setIsVisible(!isVisible);
//       }

//     const handlePatchClose = () => {
//         setIsPatchVi(!isPatchVi);
//     }

//     const handleDelete = (e) => {
//         handleFitnessProgramDelete(id)
//         fetch(`/fitnessPrograms/${id}`, {
//             method: "DELETE"
//         })
//     }
//     const handlePatch = (e) => {
//         e.preventDefault()
        

