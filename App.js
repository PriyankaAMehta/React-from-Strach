/* Creating the following structure using React
<div id="parent">
    <div id="child">
        <h1></h1> 
    </div>
</div>
*/
/*
react.createElement takes 3 arguments 
: 1- tag to be created , 
2- {} object with tag attributes like id, class etc. 
3- childrens means something that goes into the tag like other tags or content.
*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "Hello Priyanka")
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
