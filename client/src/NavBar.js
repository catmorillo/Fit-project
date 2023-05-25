import React from "react"; 
import {NavLink} from 'react-router-dom'

function NavBar({onLogout}) {



    // const history = useHistory();
    const handleLogout = () =>  {
        localStorage.removeItem('accessToken');
        onLogout();
        // history.push('/login');
    };

    return ( 

        <nav className="bg-white w-screen">
            <div className="flex justify between items-center"> 
            {/* <h1>Logout</h1> */}
            {/* <button onClick={handleLogout}>Logout</button>  */}
                <div className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-500 mb-6 w-full">
                <div className="flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
                        <a className="text-lg font-Helvetica-BoldOblique leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                          Get Fit To Flex
                        </a>
                        <button className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
                          <span className="block relative w-6 h-px rounded-sm bg-white"></span>
                          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                          <span className="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        </button>
                      </div>
                        <div className="lg:flex flex-grow items-center" id="example-navbar-warning">
                          <ul className="flex flex-col lg:flex-row list-none mr-auto">
                            <li className="nav-item">
                              <a className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /> 
                              </a>
                            </li>
                            <li className="nav-item">
                              <NavLink to= '/' exact className="text-white font-bold">
                                <a className="px-3 py-2 flex items-center text-sm uppercase font-bold text-white hover:opacity-75" href="#pablo">
                                  <span className="ml-2"> HOME </span>
                                </a>
                              </NavLink> 
                            </li>
                            <li className="nav-item">
                              <NavLink to='/login' exact className="text-white font-bold">
                                <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo"> 
                                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> 
                                  <span className="ml-2"> Login </span>  
                                </a>  
                              </NavLink>  
                            </li>
                            <li className="nav-item">
                              <NavLink to='/user' exact className="text-white font-bold">
                                <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo"> 
                                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> 
                                    <span className="ml-2"> User </span>  
                                </a>  
                              </NavLink>  
                            </li>
                            <li className="nav-item">
                              <NavLink to ='/FitnessProgram' exact className="text-white font-bold">
                                <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> 
                                    <span className="ml-2"> Fitness Program  </span>
                                </a>         
                              </NavLink>
                            </li>
                            <li className="nav-item">
                              <NavLink to='/userFitnessProgram' exact className= "text-white font-bold">
                                <a className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
                                  <i className="fab fa-twitter text-lg leading-lg text-white opacity-75" /> 
                                    <span className="ml-2"> User Fitness Program </span>
                               </a>         
                              </NavLink>
                              <button onClick={handleLogout}>Logout</button> 
                            </li>
                          </ul>
                        </div>
                    </div>
                  </div>
          </nav>
    )
}

export default NavBar;





