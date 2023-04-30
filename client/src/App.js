//import logo from './logo.svg';
// import NavBar from './NavBar'
// import Form from './Form'
 // const [fitnessPrograms, setFitnessPrograms] = useState([])

import './stylesheets/App.css'
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import UserContainer from './UserContainer';
import UserFitnessProgramContainer from './UserFitnessProgramContainer';
import Login from './Login'

function App() {
  
  const [user, setUser] = useState(null);
  const [userFitnessProgram, setUserFitnessProgram] = useState([])


  useEffect(() => {
    fetch('/user')
    .then((r) => r.json())
    .then(setUser)
  },[])

  useEffect(() => {
    fetch('/userFitnessProgram')
    .then((r) => r.json())
    .then(setUserFitnessProgram)
  }, [])

  const addUserState = (newUserObj) => {
    setUser([newUserObj, ...user])
  }
  const handleUserDelete = (id) => {
    setUser(user.filter(user => {
      return user.id ==id
    }))
  }
  const handleUserPatch = (updatedUser) => {
    setUser(user.map(user => {
      if (user.id == updatedUser.id) {
        return {...updatedUser};
      } else {
        return user
      }
    }))
  }
  
 
      
      
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
    




  
 console.log("hello world")


return (
<div>
  {}
  <Switch>
    <Route exact path = '/user'>
      <UserContainer user={user} handleUserDelete={handleUserDelete} handleUserPatch={handleUserPatch}/>
    </Route>
    <Route exact path = '/userfitnessprograms'>
      <UserFitnessProgramContainer userFitnessProgram={userFitnessProgram} />
    </Route>
    <Route exact path = '/login'>
      <Login login={Login} /> 
    </Route>
  </Switch>
  {/* <Header /> */}
</div>
  );
}

export default App;
