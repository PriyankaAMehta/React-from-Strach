import React from "react";
import User from "./User";
import UserClass from "./UserClass";

const AboutComponent = () => {
  return (
    <div>
      <h1>About US</h1>
      <User
        name={"Priyanka Mehta"}
        location={"Hanau"}
        contact={"parayankagm@gmail.com"}
      />
      <UserClass name={"Priyanka Mehta (Class)"} />
    </div>
  );
};

export default AboutComponent;
