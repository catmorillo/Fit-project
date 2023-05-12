// import React, {useState, useEffect} from 'react';
import FitnessProgramContainer from './FitnessProgramContainer';


function FitnessProgram() {
    // console.log(fps_data)
    // const wo = fps_data.map((fp_data) => {
    //     return <FitnessProgram
    //         key={fp_data.id}
    //         name={fp_data.name}
    //         description={fp_data.descriptions}
    //         duration={fp_data.duration}
    //         diificulty={fp_data.diificulty}
    //         gym_frequency={fp_data.gym_frequency}
    //         training_split={fp_data.training_split}
    //     />
    // })   
    return (
        <div>
            <h1 className='font-bold text-xl text-center'/> click here! <span className='animate-pulse text-black-500'></span>
            <h2 className='grid grid-cols-4 gap-4' > Get Started </h2>  
            <div className="tab-item"> 
            </div>    
        </div>
    )
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
        

