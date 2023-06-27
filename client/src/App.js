import React from 'react'; 
import NavBar from './NavBar'

import {useEffect, useState} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import UserContainer from './UserContainer';
import FitnessProgramContainer from './FitnessProgramContainer';
import UserFitnessProgramContainer from './UserFitnessProgramContainer';
import Login from './Login';
import Signup from './Signup';

function App() {
  const [user, setUser] = useState(null);
  const [userFitnessProgram, setUserFitnessProgram] = useState([]);
  const [fitnessProgram, setFitnessProgram] = useState([]);
  const [signUp, setSignUp] = useState([]);
  const history = useHistory();
  
  useEffect(() => {
    fetch('/check_session')
    .then((response) => response.json())
    .then((data) => {
      if (data.id) {
        setUser(data);
      } else {
        // history.push('/login');
      }
    })
    .catch((error) => {
      console.error(error);
  });
}, []);

  const handleLogout = () => {
    localStorage.clear();
    fetch('/logout', {
      method:'POST'
    })
      .then((response) => response.json())
      .then((data) => {
      })
      .catch((error) => {
        console.error(error);
      }); 
    setUser(null);
    history.push('/login');
  };
  
  const handleLogin =(user) => {
    console.log(`User ${user} is logged`);
    setUser(user);
    history.push('/userFitnessProgram')
  };

  const addUserState = (newUserObj) => {
    setUser([newUserObj, ...user]);
  }
  
  const handleUserPatch = (updatedUser) => {   
    setUser ((user => {
      if (user.id === updatedUser.id) {
        return {...updatedUser};
      } else {
        return user;
      }
    }));
  }

  return (
  <div>
    <NavBar/> 
    <Switch>
      <Route exact path='/user'>
        <UserContainer user={user}
        handleUserPatch={handleUserPatch}
        /> 
      </Route>
      <Route exact path='/userFitnessProgram'>
        <UserFitnessProgramContainer 
        userFitnessProgram={userFitnessProgram}
        setUserFitnessProgram={setUserFitnessProgram} />
      </Route>
      <Route exact path='/login'>
        <Login onLogin={handleLogin} />
      </Route>
      <Route exact path='/fitnessProgram'>
        <FitnessProgramContainer fitnessProgram={fitnessProgram} />
      </Route>
      <Route exact path='/signUp'>
        <Signup signUp={signUp} />
       </Route>
      </Switch>
    </div>
    );
}

export default App;



