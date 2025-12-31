import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo/container">
        <img
          className="logo"
          src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// single {} means it accepts the JS expression i.e any JS value and to have JS object we use another {}.

const RestaurantCard = ({ resName, cuisines, ratings, deliveryTime }) => {
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-image"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/0335dd45be555d0a4187255e57d2ca88"
      />
      <h3>{resName}</h3>
      <h4>{cuisines}</h4>
      <h4>{ratings}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurantCard
          resName="Mehta Foods"
          cuisines="pizza, pasta, fries"
          ratings="5 stars"
          deliveryTime="35 minutes"
        />
        <RestaurantCard
          resName="Dominos"
          cuisines="pizza, pasta, Garlic butter"
          ratings="4.2 stars"
          deliveryTime="30 minutes"
        />
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
