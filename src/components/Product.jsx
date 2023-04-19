import React from "react";
import "./Style.css";
import { Link } from "react-router-dom";
const Product = ({ id, title, image, price }) => {
  return (
    <div className="col-md-6 col-lg-4">
      <div className="card mb-3">
        <div className="card-body">
          <div className="mb-3">
            <img src={image} className="card-img-top item-img" alt="..." />
          </div>
          <h5 className="card-title text-text-truncate">
            {title.substring(0, 20)}...
          </h5>
          <p className="card-text">${price}</p>
          <button className="btn btn-primary me-2">Add to Cart</button>
          <Link to={`/detail/${id}`}>
            <button className="btn btn-outline-info">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
