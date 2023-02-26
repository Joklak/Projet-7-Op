import React  from 'react'; 
import BannerHomePage from "../components/Banner";
import logo from "../assets/logo.png"
import Logement from "../components/Logement";
import products from "../data/data.json";



export default function Home() {    
        return (
            <main className='"main"'>
                <BannerHomePage/>      
                <Logement />                  
            </main>            
        ) 
}