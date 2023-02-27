import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
   return (
      <main>
         <div className="error">
            <h1 className="number404"> 404</h1>
            <h2 className="errorText">
               {' '}
               Oups! La page que vous demandez n'existe pas.
            </h2>
            <NavLink
               to="/"
               className={(nav) =>
                  nav.isActive ? 'nav-active' : 'nav-inactive'
               }
            >
               <li className="errorlinkreturn">
                  Retourner sur la page d'accueil
               </li>
            </NavLink>
         </div>
      </main>
   );
};

export default Error;
