import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img
          src={product.thumbnail}
          className="card-img-top"
          alt={product.title}
        />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <p className="card-text">
            <strong>Price: ${product.price.toFixed(2)}</strong>
          </p>
          <p className="card-text">
            <small>Discount: {product.discountPercentage}%</small>
          </p>
          <p className="card-text">
            <small>Rating: {product.rating}</small>
          </p>
          <p className="card-text">
            <small>Stock: {product.stock}</small>
          </p>
          <button className="btn btn-warning">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
