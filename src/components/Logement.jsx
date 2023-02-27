import React from 'react';
import { Link } from 'react-router-dom';
import Thumb from './Thumb';
import products from '../data/data.json';

const Logement = () => {
   return (
      <section className="logement_products">
         {products.map((product) => {
            return (
               <article key={product.id}>
                  <Link to={`/Detailslogement/${product.id}`}>
                     <Thumb image={product.cover} title={product.title} />
                  </Link>
               </article>
            );
         })}
      </section>
   );
};

export default Logement;
