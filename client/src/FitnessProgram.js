import React from 'react';
import {useState} from 'react';


function Fitness_programs({id, name, weeks}) {
  
    return(
        <div>
            <h1> 
                {name}
            </h1>
        </div>
    )





}


export default Fitness_programs
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
        

