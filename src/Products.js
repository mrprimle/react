import React from "react";
import Product from "./Product";
import { useFetch } from "./useFetch";

const url = "https://course-api.com/javascript-store-products";

const Products = () => {
  const { data } = useFetch(url);

  return (
    <div className="compMargin">
      <h2>products</h2>
      <section className="products">
        {data.map((product) => {
          return <Product key={product.id} {...product.fields}></Product>;
        })}
      </section>
    </div>
  );
};

export default Products;
