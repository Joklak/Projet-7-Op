import React from 'react';
import BannerHomePage from '../components/Banner';
import Logement from '../components/Logement';

export default function Home() {
   return (
      <main className='"main"'>
         <BannerHomePage />
         <Logement />
      </main>
   );
}
