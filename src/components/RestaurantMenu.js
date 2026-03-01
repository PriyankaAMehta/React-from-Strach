import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      //use mapi instead od dapi for swiggys url. mapi is the api for mobiles and dapi is api for desktop. mapi are somethimes for Slightly more lenient.
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=1072642&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;

  //const { itemCards } =
  //resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
  //?.card?.itemCards[0]?.card.info;

  const { itemCards } =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card.card;
  console.log(itemCards);

  //console.log(itemCards);

  return (
    <div className="menu">
      {/** <h1>{resInfo?.cards[2]?.card?.card?.info.name}</h1>, instead of this we will destructure */}
      <h1>{name}</h1>
      <p>
        {/** .join is JavaScript array method call. .join(separator) takes all elements of an array and combines them into a single string, with the specified separator inserted between each element. */}
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        {/**<li>{itemCards[0].card.info.name}</li>
        <li>{itemCards[1].card.info.name}</li>
        <li>{itemCards[2].card.info.name}</li>
        {1.  what are we iterating upon? --> itemCards 
        2. so do itemCards.map
        3. this map takes a callback function so write () => {} inside map()
        4. the callback function takes item , so for each item , i want card.info.name
        5. and i want a list item so return the <li> inside the map callback function
        6. whenever you are using a map, always use a key
        */}
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {"₹"}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
