//import logo from './logo.svg';
// import NavBar from './NavBar'
// import Form from './Form'
// import UserFitnessProgram from './userFitnessProgram';

import './stylesheets/App.css';
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import UserContainer from './UserContainer';
import FitnessProgramContainer from './fitnessProgramContainer';
import UserFitnessProgramContainer from './UserFitnessProgramContainer';
import Login from './Login';
import Signup from './Signup';


function App() {
  const [user, setUser] = useState(null);
  const [userFitnessProgram, setUserFitnessProgram] = useState([]);
  const [fitnessProgram, setFitnessProgram] = useState([]);
  const [signUp, setSignUp] = useState([]);
  const handleLogin =(username) => {
    console.log(`User ${username} is logged`);
  };
  
  useEffect(() => {
    fetch('/users')
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
        console.log(data);
       
  });
  },[]);

  const addUserState = (newUserObj) => {
    setUser([newUserObj, ...user]);
  }
  const handleUserDelete = (id) => {
    if (user) {
      setUser (user.filter(userObj => {
          return userObj.id ===id;
      }));
    }
  }
  const handleUserPatch = (updatedUser) => {   
    setUser (user.map(user => {
      if (user.id === updatedUser.id) {
        return {...updatedUser};
      } else {
        return user;
      }
    }));
  }

  // useEffect(() => {
  //   fetch('/fitnessProgram')
  //   .then((r) => r.json())
  //   .then(setFitnessProgram)
  //   .then(console.log)
  // },[]);
  
  // useEffect(() => {
  //   fetch('/signUp')
  //   .then((r) => r.json())
  //   .then(setSignUp)
  // },[]);




  return (
  <div>
    
    <Switch>
      <Route exact path ='/user'>
        <UserContainer user={user}
        handleUserDelete={handleUserDelete} 
        handleUserPatch={handleUserPatch}/>
      </Route>
      <Route exact path ='/userFitnessProgram'>
        <UserFitnessProgramContainer userFitnessProgram={userFitnessProgram} />
      </Route>
      <Route exact path ='/login'>
        <Login onLogin={handleLogin} />
      </Route>
      <Route exact path ='/fitnessProgram'>
        <FitnessProgramContainer fitnessProgram={fitnessProgram} />
      </Route>
      <Route exact path ='/signUp'>
        <Signup signUp={signUp} />
      </Route>
        </Switch>
    
  </div>
    );
}

export default App;

  
      
      //   useEffect(() => {
      //     fetch("/check_session").then((response) => {
      //       if (response.ok) {
      //         response.json().then((user) => setUser(user));
      //       }
      //     });
      //   }, []);
      
      //   if (user) {
      //     return <h2>Welcome, {user.username}!</h2>;
      //   } else {
      //     return <Login onLogin={setUser} />;
      //   }
      // }