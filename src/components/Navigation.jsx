import React from 'react'; 
import {Link , NavLink } from "react-router-dom"
import logo from "../assets/logo.png"


const Navigation = () => {
    return (
        <header>
            <div className="navigationbar">
                <Link to= "/"> <img src={logo} alt='logo-kasa' title ="aller sur la page accueil " /> </Link>
      <nav className='navigationlink'>
        <ul >
          <li>
            <NavLink exact to="/" activeClassName="active">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" activeClassName="active">
              À propos
            </NavLink>
          </li>
        </ul>
      </nav>
      </div>
      </header>
    );
  };
  
  export default Navigation;