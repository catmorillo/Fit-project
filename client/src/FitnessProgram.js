import React, {useState} from 'react';
// import FitnessProgramContainer from './FitnessProgramContainer';
// import styles from "./mystyle.module.css";

    

function FitnessProgram({name, description, duration, difficulty, gym_frequency, training_split}){

    const [isVisible, setIsVisible] = useState(false);
    const handleButton =() => {
        setIsVisible(!isVisible);
    };


    return(
        <div>
            {/* <h1 className='font-bold text-xl text-center'><span className='animate-pulse text-black-500'></span> </h1>
            <h2 className='grid grid-cols-4 gap-4' ></h2> 
            <div className="item_wrap"/> */}
            {/* <div className="tab-item"/>  */}
                
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
        

