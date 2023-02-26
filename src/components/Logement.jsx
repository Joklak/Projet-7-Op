import React from "react";
import { Link } from "react-router-dom";
import Cards from "./Cards";
import products from "../data/data.json";

const Logement = () => {
  return (
    <section className="logement__products">
      {products.map((product) => {
        
        return (
          <article key={product.id}>
            <Link to={`/Detailslogement/${product.id}`}>
              <Cards image={product.cover} title={product.title} />
            </Link>
          </article>
        );
      })}
    </section>
  );
};

export default Logement;
