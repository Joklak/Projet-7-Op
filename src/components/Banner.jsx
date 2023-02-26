import React from 'react'; 
import Banner from "../assets/banner.png"


export default function BannerHomePage() {
        return (
            <div className="banner_home">
                <img src={Banner} alt="Banner" className="banner_img" />  
                <p className="banner_text"> Chez vous, partout et ailleurs</p>                              
            </div>
        ) 
}