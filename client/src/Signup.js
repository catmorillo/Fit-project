import React from 'react';
import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import styles from "./mystyle.module.css";
import {Message} from 'semantic-ui-react'

function Signup(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const formData = {username, password, email};
    const [user, setUser] = useState(null);
    const history = useHistory();

    const [showMsg, setShowMsg]= useState('')
    const message = () => {
        setShowMsg(<Message succes header="You are now logged in!" content="Thank you for singning up"/>)
    }

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
            message(showMsg)
    })
       .catch((error) => {
            console.error('Signup error', error);
       });
    } catch (error) {
        console.error('Fetch error', error);
    }
}
    if (user !== null) {
        history.push('/login');

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
            {showMsg}
        </form>
            
    );
  }
(
    <span className={styles.signup}></span>
  )
export default Signup; 


