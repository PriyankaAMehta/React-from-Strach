import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router"; //creates routing configuration, configuration means it will define what will happen on a specific route
import AboutComponent from "./components/About";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErrorComponent";

// single {} means it accepts the JS expression i.e any JS value and to have JS object we use another {}.

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorComponent />,
  },
  {
    path: "/About",
    element: <AboutComponent />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
