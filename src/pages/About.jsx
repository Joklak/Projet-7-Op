import React from 'react';
import BannerAboutPage from '../components/Bannerabout';
import CollapseExample from '../components/Collapse';

export default function About() {
   return (
      <main className="mainabout">
         <BannerAboutPage />
         <div className="testcolonne">
            <CollapseExample
               text="Fiabilité"
               textContent="Chez Kasa, nous sommes fiers d'offrir un service de réservation d'hôtels fiable et de qualité supérieure. Nous nous engageons à honorer chaque réservation et à fournir des informations précises et à jour sur chaque établissement."
            />
            <CollapseExample
               text="Respect"
               textContent="Nous croyons que chaque client mérite un service respectueux et attentif. C'est pourquoi nous nous efforçons de créer une expérience de réservation personnalisée et facile pour chaque client, en répondant à leurs besoins individuels et en leur offrant un service de haute qualité à chaque étape."
            />
            <CollapseExample
               text="Service"
               textContent="Notre objectif est de fournir un service exceptionnel à chaque client, à chaque fois. Nous nous engageons à offrir une assistance rapide et courtoise à tout moment, ainsi qu'à fournir des informations détaillées sur chaque hôtel, pour que nos clients puissent faire des choix éclairés en toute confiance."
            />
            <CollapseExample
               text="Responsabilité"
               textContent="Nous sommes conscients de notre responsabilité envers nos clients et envers l'environnement. Nous nous engageons à fournir des informations précises et à jour sur chaque établissement, à respecter les normes éthiques et environnementales les plus strictes et à travailler avec des partenaires responsables pour assurer une expérience de voyage durable et respectueuse de l'environnement."
            />
         </div>
      </main>
   );
}
