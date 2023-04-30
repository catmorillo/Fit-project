// import FitnessProgramContainer from './FitnessProgramContainer'
//import logo from './logo.svg';
// import NavBar from './NavBar'
// import Form from './Form'
 // const [fitnessPrograms, setFitnessPrograms] = useState([])

import './stylesheets/App.css'
import {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom';
import UserContainer from './UserContainer';
import UserFitnessProgramContainer from './UserfitnessprogramContainer';
import Login from './Login'

function App() {
  
  const [user, setUser] = useState([])
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
