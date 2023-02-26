import React from 'react'; 
import { NavLink } from "react-router-dom";


const Error =() => {
        return (
            <main>
            <div className='error'>
                <div className='number404'>
                    <h1> 404</h1>
                </div>
                <div className='error_text'>
                    <h2> Oups! La page que vous demandez n'existe pas.</h2>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}>
          <li className="errorlinkreturn">Retourner sur la page d'accueil</li>
        </NavLink>  
                </div>
                              
            </div>
            </main>
        ) 
}

export default Error