import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mokData";
import { useState } from "react";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([
    {
      info: {
        id: "10576",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bb48c990-87ae-4884-83d8-03d73f3cd2a7_10576.JPG",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
        avgRatingString: "3.8",
        totalRatingsString: "22K+",
        sla: {
          deliveryTime: 22,
        },
      },
    },
    {
      info: {
        id: "10577",
        name: "Dominos",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bb48c990-87ae-4884-83d8-03d73f3cd2a7_10576.JPG",
        costForTwo: "₹450 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.5,
        avgRatingString: "4.2",
        totalRatingsString: "22K+",
        sla: {
          deliveryTime: 22,
        },
      },
    },
    {
      info: {
        id: "10579",
        name: "Mehta's Foods",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bb48c990-87ae-4884-83d8-03d73f3cd2a7_10576.JPG",
        costForTwo: "₹450 for two",
        cuisines: ["Pizzas"],
        avgRating: 4.5,
        avgRatingString: "4.8",
        totalRatingsString: "22K+",
        sla: {
          deliveryTime: 22,
        },
      },
    },
  ]);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(ListOfRestaurants);
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {ListOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
