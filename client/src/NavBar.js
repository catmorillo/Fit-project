import React from "react"; 
import {NavLink} from 'react-router-dom'
import styles from "./mystyle.module.css";

function NavBar({onLogout}) {

    // const history = useHistory();
    const handleLogout = () =>  {
        localStorage.removeItem('accessToken');
        onLogout();
        // history.push('/login');
    };

    return ( 
         <nav className="bg-white w-screen">
            <div className="flex justify between items-center"/> 
            {/* <h1>Logout</h1> */}
            {/* <button onClick={handleLogout}>Logout</button>  */}
                <div className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-6 w-full">
                  <div className="flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <div className="text-lg font-Helvetica-BoldOblique leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                        <h1>Get Fit To Flex</h1> 
                        <p style={{backgroundColor: "lightpink", textAlign: "center"}} />
                        </div>
                        <div className={styles.NavBar}>
                            <NavLink 
                                to="/"
                                exact 
                                className={styles.link}
                            />
                      </div>
                        <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                          <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <li className="nav-item"></li>
                            {/* </li>                            */}
                            <li className="nav-item">
                              <NavLink to= '/' exact >
                                <span className={styles.home}> HOME </span>
                              </NavLink> 
                            </li>
                            <li className="nav-item">
                              <NavLink to= '/home' exact >
                                <span className={styles.link}></span>
                              </NavLink> 
                            </li>

                            <li className="nav-item">
                              <NavLink to='/login' exact className="text-white font-bold">
                                <span className={styles.login}> Login </span>  
                              </NavLink>  
                            </li>
                            <li className="nav-item">
                              <NavLink to='/user' exact className="text-white font-bold">
                                <span className={styles.user}> User </span>  
                                
                              </NavLink>  
                            </li>
                            <li className="nav-item">
                              <NavLink to ='/FitnessProgram' exact className="text-white font-bold">
                                <span className={styles.fitnessprogram}> Fitness Program  </span>
                                     
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink to ='/Signup' exact className="text-white font-bold">                                
                                <span className={styles.signupbutton}> Sign up </span>
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink to='/userFitnessProgram' exact className= "text-white font-bold">
                                <span className={styles.userfitnessprogram}> User Fitness Program </span>        
                              </NavLink>
                              {/* <button onClick={handleLogout}>Logout</button>  */}
                              <button onClick={handleLogout} className="ui primary button">Logout</button>
                            </li>
                          </ul>
                        </div>
                    </div>
                  </div>
          </nav>
    )
}

export default NavBar;





