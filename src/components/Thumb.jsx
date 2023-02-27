import React from 'react';

const Thumb = ({ image, title }) => {
   return (
      <div className="gallery_thumb">
         <img src={image} alt="" className="thumb_img" />
         <h2 className="thumb_title">{title}</h2>
      </div>
   );
};

export default Thumb;
