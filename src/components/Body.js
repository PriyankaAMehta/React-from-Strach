import React from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mokData";
import { useState } from "react";
import { useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  //const [ListOfRestaurants, setListOfRestaurants] = useState(resList);
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  //create a copy of filteredRestaurants in setListOfRestaurants(filteredRestaurants);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

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
    setFilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //the following if is called as the conditional redering
  //if (ListOfRestaurants.length === 0) {
  //return <h1>Loading....</h1>;
  //return <Shimmer />;
  //}

  //the above conditional redering can also be written as a ternary operator
  return ListOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredRestaurants = ListOfRestaurants.filter(
                //(res) => res.info.name === searchText --> for this you have to write the exact name.
                //so we need to include the search term so we do .include
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              //setListOfRestaurants(filteredRestaurants);
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter(
              (res) => res.info.avgRating > 4.3
            );

            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};
// {ListOfRestaurants.map((restaurant) => instead now filter from the copy -- filteredRestaurants
export default Body;
