//import logo from './logo.svg';
// import NavBar from './NavBar'
// import Form from './Form'
 

import './stylesheets/App.css';
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import UserContainer from './UserContainer';
import FitnessProgramContainer from './fitnessProgramContainer';
import UserFitnessProgramContainer from './UserFitnessProgramContainer';
import Login from './Login';
// import UserFitnessProgram from './userFitnessProgram';

function App() {
  
  const [user, setUser] = useState(null);
  const [userFitnessProgram, setUserFitnessProgram] = useState([]);
  const [fitnessProgram, setFitnessProgram] = useState([]);

  useEffect(() => {
    fetch('/user')
    .then((r) => r.json())
    .then(setUser)
  },[]);

  useEffect(() => {
    fetch('/userFitnessProgram')
    .then((r) => r.json())
    .then(setUserFitnessProgram)
    .then(console.log)
  }, []);

  const addUserState = (newUserObj) => {
    setUser([newUserObj, ...user]);
  }
  const handleUserDelete = (id) => {
    setUser(user.filter(user => {
      return user.id ==id;
    }));
  }
  const handleUserPatch = (updatedUser) => {
    setUser(user.map(user => {
      if (user.id == updatedUser.id) {
        return {...updatedUser};
      } else {
        return user;
      }
    }));
  }

  useEffect(() => {
    fetch('/fitnessProgram')
    .then((r) => r.json())
    .then(setFitnessProgram)
  },[]);

  
 console.log("hello world");


return (
<div>
  {}
  <Switch>
    <Route exact path = '/user'>
      <UserContainer user={user} handleUserDelete={handleUserDelete} handleUserPatch={handleUserPatch}/>
    </Route>
    <Route exact path = '/userFitnessProgram'>
      <UserFitnessProgramContainer userFitnessProgram={userFitnessProgram} />
    </Route>
    <Route exact path = '/login'>
      <Login login={Login} /> 
    </Route>
    <Route exact path = '/fitnessProgram'>
      <FitnessProgramContainer fitnessProgram={fitnessProgram} />
    </Route>
  </Switch>
  {}
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