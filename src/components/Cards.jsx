import React from "react";

const Cards = ({ image, title , }) => {
 
    
   return (
    <div className="gallery_cards">
      <img src={image} alt="" className="cards_img" />      
      <h2 className="cards_title">{title}</h2>
    </div>
  );
};

export default Cards;

