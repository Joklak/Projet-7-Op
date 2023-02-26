import React from "react";

const Cards = ({ image, title , }) => {
 
    
   return (
    <div className="gallery_cards">
      <img src={image} alt="" className="cards__img" />      
      <h2 className="cards__title">{title}</h2>
    </div>
  );
};

export default Cards;

