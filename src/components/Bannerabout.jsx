import React from 'react';
import Banner from '../assets/banner.png';

export default function BannerAboutPage() {
   return (
      <div className="banner_home">
         <img src={Banner} alt="Banner" className="banner_img" />
      </div>
   );
}
