import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mokData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //const [ListOfRestaurants, setListOfRestaurants] = useState(resList);
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);

  //1st argument is call back function and 2nd is the dependency array.
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  console.log("body called");

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setListOfRestaurants(
      //json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (ListOfRestaurants.length === 0) {
    //return <h1>Loading....</h1>;
    return <Shimmer />;
  }
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
