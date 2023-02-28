import React from 'react';

import { useParams, Navigate } from 'react-router-dom';
import products from '../data/data.json';
import CollapsibleTemplate from '../components/Collapse';
import SliderComponent from '../components/Slider';
import Tags from '../components/Tags';
import Host from '../components/Host';
import Rating from '../components/Rating';

const Details = () => {
   const { productid } = useParams();
   console.log(productid);
   const product = products.find((product) => product.id === productid);

   if (!product) {
      return <Navigate replace to="/Error" />;
   }
   const { title, location, rating, host, equipments, description, pictures } =
      product;

   return (
      <main className="maindetail">
         <SliderComponent pictures={pictures} />
         <div className="singleproduct_information">
            <div className="singleproduct_container">
               <div>
                  <h1 className="singleproduct_title">{title}</h1>
                  <p className="singleproduct_location">{location}</p>
                  <div className="singleproduct_tags">
                     {product.tags.map((tag, index) => (
                        <Tags key={index} getTag={tag} />
                     ))}
                  </div>
               </div>
               <div className="singleproduct_rating_host">
                  <Host host={host} className="teddst" />
                  <Rating rating={rating} />
               </div>
            </div>
            <div className="collapsibles-container">
               <CollapsibleTemplate label="Description">
                  <p className="description_text"> {description} </p>
               </CollapsibleTemplate>
               <CollapsibleTemplate label="Equipements">
                  <div>
                     {' '}
                     {equipments.map((equip, i) => (
                        <p className="description_text" key={i}>
                           {' '}
                           {equip}{' '}
                        </p>
                     ))}
                  </div>
               </CollapsibleTemplate>
            </div>
         </div>
      </main>
   );
};
export default Details;
