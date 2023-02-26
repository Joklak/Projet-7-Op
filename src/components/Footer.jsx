import React from 'react'; 
import logoFooter from "../assets/logofooter.png"

const Footer = () => {
    const actualYear = new Date().getFullYear();
    return (
      <footer className="footer_pages">
        <img src={logoFooter} alt="" className="footer__logo" />
        <p className="footer__text">
        &copy;          
          {actualYear} Kasa. All rights reserved
        </p>
      </footer>
    );
  };

  export default Footer;


  