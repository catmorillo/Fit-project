//import logo from './logo.svg';
// import UserFitnessProgram from './userFitnessProgram';
import React from 'react'; 
import NavBar from './NavBar'

import {useEffect, useState} from 'react';
import {Route, Switch, useHistory} from 'react-router-dom';
import UserContainer from './UserContainer';
import FitnessProgramContainer from './FitnessProgramContainer';
import UserFitnessProgramContainer from './UserFitnessProgramContainer';
import Login from './Login';
import Signup from './Signup';
import User from './User';
// import { Button } from '@mui/material'; 
// import Logout from './Logout';
// const UserContext = React.createContext();

// const UserProvider =({ children }) => {
//   const [user, setUser] = useState(null);
  

//   return(
//     <UserContext.Provider value={{ user, setUser}}>
//       {children}
//     </UserContext.Provider>
//   );
// };


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

// useEffect(() => {
//   fetch('/signUp')
//   .then((r) => r.json())
//   .then(setSignUp)
//       // history.push('/fitnessProgram')
// },[]);


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
    setUser (user.map(user => {
      if (user.id === updatedUser.id) {
        return {...updatedUser};
      } else {
        return user;
      }
    }));
  }

  return (
  <div>
    {/* <Button>Click me </Button> */}
    <NavBar/> 
    <Switch>
      <Route exact path='/user'>
        <UserContainer user={user}/>
        {/* <User addUser = {addUserState} />  */}
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
 
      {/* {user && <button onClick={handleLogout}>Logout</button>}     */}
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




    //   const handleLogout = () =>  {
    //     localStorage.removeItem('accessToken');
    //     onLogout();
    //     // history.push('/login');
    // };
    //     return (
    //     <div> 
    
    
    
    //         <h1>Logout</h1>
    //         <button onClick={handleLogout}>Logout</button>    
    //     </div>
    //     );
    // }


