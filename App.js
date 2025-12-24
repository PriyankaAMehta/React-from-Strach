import React from "react";
import ReactDOM from "react-dom/client";

const Title = function () {
  return <h1>This is Title 1 </h1>;
};
const elem = <span>and she is awesome!!</span>;
let number = 1000;
let a = "Priyanka";
const subheading = <h1>PRIYANKA</h1>;

const HeadingComponent = () => (
  <div id="container">
    {number}
    <h2>{number}</h2>
    {300 + 30}
    <h2>This is {a}</h2>
    <h2>{console.log("ndjn")}</h2>

    <Title />
    <h1>This is Heading component {elem}</h1>
    {subheading}
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
