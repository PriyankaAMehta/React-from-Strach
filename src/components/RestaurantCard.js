import React from "react";

const RestaurantCard = (props) => {
  const { resData } = props;

  // destructring because we dont want to repeate resData.info again and again.
  // ? optional chaining
  // fom resData we will destructure cloudinaryImageId,name,cuisines, costForTwo,
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRatingString } =
    resData?.info;
  const { deliveryTime } = resData?.info.sla;

  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-image"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resData.info.cloudinaryImageId
        }
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString}stars</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
