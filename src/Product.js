import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Product = ({ image, name, price }) => {
  return (
    <div className="product">
      <Link to={`/purchase/${name}`}>
        <img src={image[0].url} alt={name} />
        <h4>{name}</h4>
        <p>${price}</p>
      </Link>
    </div>
  );
};

Product.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
Product.defaultProps = {
  name: "item",
  price: 0,
};

export default Product;
