import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"; //creates routing configuration, configuration means it will define what will happen on a specific route
import AboutComponent from "./components/About";
import Contact from "./components/Contact";
import ErrorComponent from "./components/ErrorComponent";
import RestaurantMenu from "./components/RestaurantMenu";

// single {} means it accepts the JS expression i.e any JS value and to have JS object we use another {}.

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};
{
  /** This is a comment in JSX*/
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      {
        path: "/About",
        element: <AboutComponent />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        //:resId is dynamic : given by react router
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
