// src/pages/SingleAppleProduct.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function SingleAppleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/iphones/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img
            src={product.Product_img}
            className="img-fluid"
            alt={product.product_name}
          />
        </div>
        <div className="col-md-6">
          <h2>{product.product_name}</h2>
          <p>{product.Product_description}</p>
          <p>
            <strong>Price:</strong> {product.Starting_price}
          </p>
          <p>{product.Price_range}</p>
          <a
            href={product.product_url}
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            View on Apple Site
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleAppleProduct;


// Imports:

// React, useEffect, useState for React features.

// useParams from react-router-dom to get the product ID from the URL.

// A CSS file for styling (if any).

// Extract Product ID:

// useParams() gets the id from the URL like /iphone/1.

// State Setup:

// product stores the single product's data.

// loading tracks if data is still being fetched.

// Fetch Product by ID:

// In useEffect, an async function fetches data from:

// bash
// Copy
// Edit
// http://localhost:3000/api/iphones/:id
// On success, sets the product state and turns off loading.

// Render Product:

// While loading: shows a loading message.

// After loading: displays product image, name, description, and price.