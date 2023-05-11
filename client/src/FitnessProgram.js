// import React, {useState, useEffect} from 'react';
import FitnessProgramContainer from './FitnessProgramContainer';


function FitnessProgram({fitList}) {
    console.log(fitList)
    const wo = fitList.map((workoutObj) => {
        return <FitnessProgram
            key={workoutObj.id}
            name={workoutObj.name}
            description={workoutObj.descriptions}
            duration={workoutObj.duration}
            diificulty={workoutObj.diificulty}
            gym_frequency={workoutObj.gym_frequency}
            training_split={workoutObj.training_split}
        />
    })   
    return (
        <div>
            <h1 className='font-bold text-xl text-center'/> Get Started For the Day<span className='animate-pulse text-black-500'></span>
            <div className='grid grid-cols-4 gap-4'>
                {wo} 
            </div>    
        </div>
    )
}

export default FitnessProgram;


//    const [fitnessPrograms, setFitnessPrograms] = useState([]);

//    useEffect(() => {
//     fetch('/fitness_programs')
//         .then(response => response.json())
//         .then(data => setFitnessPrograms(data))
//         .catch(error => console.error('Error fetching fitness programs:', error));
//     }, []);
//     return (
//         <div>
//            <h1>Fitness Program</h1>
//             <ul>
//                 {fitnessPrograms.map((item, index) => (
//                     <li key={index}>{fitnessPrograms}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }







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
        

