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

const RestaurantCard = (props) => {
  const { resData } = props;
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
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines}</h4>
      <h4>{resData.info.avgRatingString}stars</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

const resobj = {
  info: {
    id: "10576",
    name: "Pizza Hut",
    cloudinaryImageId:
      "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bb48c990-87ae-4884-83d8-03d73f3cd2a7_10576.JPG",
    locality: "6th Block",
    areaName: "Koramangala",
    costForTwo: "₹350 for two",
    cuisines: ["Pizzas"],
    avgRating: 4.2,
    parentId: "721",
    avgRatingString: "4.2",
    totalRatingsString: "22K+",
    sla: {
      deliveryTime: 22,
      lastMileTravel: 1.2,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "1.2 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2026-01-03 05:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹49",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "4.6",
        ratingCount: "3.6K+",
      },
      source: "GOOGLE",
      sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    context: "seo-data-2148c5c7-8f85-42bc-8ce3-9da5df8aa690",
  },
  cta: {
    link: "https://www.swiggy.com/city/bangalore/pizza-hut-6th-block-koramangala-rest10576",
    type: "WEBLINK",
  },
};
const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resobj} />
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
