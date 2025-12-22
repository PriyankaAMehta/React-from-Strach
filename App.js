import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello Priyanka"),
    React.createElement("h2", {}, "Hello Shreyansh"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello Raj"),
    React.createElement("h2", {}, "Hello Anita"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
