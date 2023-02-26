import React from "react";

import { useParams, Navigate } from "react-router-dom";
import products from "../data/data.json";
import CollapseExample from "../components/Collapse";
import SliderComponent from "../components/Slider";
import Tags from "../components/Tags";
import Host from "../components/Host";
import Rating from "../components/Rating";

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
      <SliderComponent images={pictures} />

      <div className="singleproduct_information">
        <div className="singleproduct_container">
          <div>
            <h1 className="singleproduct__title">{title}</h1>
            <p className="singleproduct_location">{location}</p>
            <div className="singleproduct_tags">
              {product.tags.map((tag, index) => (
                <Tags key={index} getTag={tag} />
              ))}
            </div>
          </div>
          <div className="singleproduct_rating_host">          
            <Host host={host} />
            <Rating rating={rating} />
          </div>
        </div>
        <div className="description_equipement_collapse">
          <CollapseExample text="Description" textContent={description} />
          <CollapseExample text="Equipement" textContent={equipments} />
        </div>
      </div>
    </main>
  );
};

export default Details;