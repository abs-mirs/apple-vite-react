import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Iphone.css";

function Iphone() {
  const [iphones, setIphones] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/iphones")
      .then((res) => res.json())
      .then((data) => setIphones(data))
      .catch((err) => console.error("Error fetching iPhone data:", err));
  }, []);

  return (
    <div className="iphone-container">
      <h1 className="iphone-title">iPhone Products</h1>
      {iphones.map((phone, index) => (
        <div
          className={`iphone-row ${
            index % 2 === 0 ? "row-normal" : "row-flipped"
          }`}
          key={phone.Product_id}
        >
          <div className="iphone-img">
            <img src={phone.Product_img} alt={phone.product_name} />
          </div>
          <div className="iphone-details">
            <h2>{phone.product_name}</h2>
            <p>{phone.Product_brief_description}</p>
            <p>
              <strong>{phone.Starting_price}</strong>
            </p>
            <Link to={`/iphone/${phone.Product_id}`} className="learn-more">
              Learn more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Iphone;


// Imports:

// React, useState, useEffect for React functionality.

// Link from react-router-dom for navigation.

// Iphone.css for styling.

// State Setup:

// iphones state stores the list of iPhones fetched from the server.

// Fetch iPhone Data:

// useEffect runs once when the component mounts.

// It sends a request to http://localhost:3000/api/iphones.

// On success, updates the iphones state with the fetched data.

// Render Products:

// Iterates over iphones using .map().

// Displays image, name, description, price, and a "Learn more" button.

// Alternates layout using a row-normal / row-flipped CSS class based on index.

// Navigation:

// Each "Learn more" button links to /iphone/:id using React Router.