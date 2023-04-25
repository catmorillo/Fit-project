import NavButton from './NavButton'
import {useState} from 'react'


export const Signup = () => {
    const [ form, setForm] = useState({})


    const updateForm = (form) => (e) => {

        setForm(form => {
            return {
                ...form, 
                [e.target.name]: e.target.value 
            }
        })
    }}
   
    // return (
    //     <>
    //         <h1>Sign Up</h1>
    //         <form>
    //             <div>
    //                 username: <input onChange={ updateForm} name="username"/>    
    //             </div>
    //         </form>
            