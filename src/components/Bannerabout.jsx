import React from 'react';
import BannerWeb from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';
import BannerMobile from '../assets/gustavo-alves-YOXSC4zRcxw-unsplash 1.png';
export default function BannerAboutPage() {
   return (
      <div className="banner_home_about">
         <img src={BannerWeb} alt="Banner" className="banner_img_web" />
         <img src={BannerMobile} alt="Banner" className="banner_img_mobile" />
      </div>
   );
}
