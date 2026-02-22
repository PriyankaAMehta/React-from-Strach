import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mokData";
import { useState } from "react";
import { useEffect } from "react";

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState(resList);

  //1st argument is call back function and 2nd is the dependency array.
  useEffect(() => {
    console.log("useEffect called");
  }, []);

  console.log("body called");

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.5
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
