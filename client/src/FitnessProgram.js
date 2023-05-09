import React, {useState, useEffect} from 'react';



function FitnessProgram() {
    const [fitnessProgramsList, setFitnessProgramsList] = ([]);

    useEffect(() => {
        fetch('/fitnessPrograms')
        .then(r => r.json)
        .then(data => setFitnessProgramsList(data));
        
    }, []);

    return (
        <div>
            <h1>Fitness Programs</h1>
            {fitnessProgramsList.map(program => (
               <FitnessProgram
               key={program.id}
               id={program.id}
               name={program.name}
               weeks={program.weeks}
            />

            ))}
        </div>
    )
}


export default FitnessProgram




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
        

