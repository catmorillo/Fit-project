import React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';


function Signup({}){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const formData = {username, password, email};
    const [user, setUser] = useState(null);
    const history = useHistory();

function handleSubmit(e) {   
    e.preventDefault();
    try {
        fetch('/signup',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(formData),
        })
        .then(r=>r.json())
        .then((data) => {
            // update user state and navigate to new route
            console.log(data);
            setUser(data); 
    })
       .catch((error) => {
            console.error('Signup error', error);
       });
    } catch (error) {
        console.error('Fetch error', error);
    }
}
    if (user !== null) {
        history.push('/fitnessProgram');

}
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username:
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                />                
            </label>
            <label>
                Password:
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />                   
            </label>
            <label>
                Email: 
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}   
                    />               
            </label>
            <button type="submit">Sign Up</button>
        </form>
    
    );
  }
export default Signup; 






           
           {/* <button type="button"
            className="animate-pulse inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-black text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500 sm:text-sm"
            onClick={handleDelete} 
            > </button>
          <div> 
            <form onSubmit={handlePatch} className="form">
            <input
                type="text"
                id="id"
                name="name"
                onChange={(e) => setUserName(e.target.value)}
                placeholder=""
                />
            <input
                type="text"
                id="id"
                age="age"
                onChange={(e) => setUserAge(parseInt(e.target.value))}
                placeholder=""
                /> */}