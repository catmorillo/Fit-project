
// import axios from 'axios';
import React, { useState } from "react";



function Login([onLogin]) {
    const[username, setUsername] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify({ username}),
        })
        .then(r => r.json())
        .then((user) => onLogin(user));
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            />
            <button type="submit">Login</button>
        </form>

    )}
        



//  FORM  //
// const Form = () => {
//   const [formData, setFormData] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:3000", formData);
//       console.log(response.data);
//     } catch (error) {
     
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Name"
//         onChange={handleChange}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         onChange={handleChange}
//       />
//       <input
//         type="text"
//         name="message"
//         placeholder="Message"
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };
// }
// export default Form;
































// const LoginForm = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');

//     const handleSubmit = async (e) =>
//     e.preventDefault();
// }










// export const Signup = () => {
//     const [ form, setForm] = useState({})


//     const updateForm = (form) => (e) => {

//         setForm(form => {
//             return {
//                 ...form, 
//                 [e.target.name]: e.target.value 
//             }
//         })
//     }}
   
    // return (
    //     <>
    //         <h1>Sign Up</h1>
    //         <form>
    //             <div>
    //                 username: <input onChange={ updateForm} name="username"/>    
    //             </div>
    //         </form>
            