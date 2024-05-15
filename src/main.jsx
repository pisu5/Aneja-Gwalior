import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import NewArrivals from "./components/NewArrivals.jsx";
import { Navigate } from "react-router-dom";

import App from "./App.jsx";
import Header from "./components/Header.jsx";
import Root from "./components/Root.jsx";
import newArrivals from "./data/DataNewArrivals.js";
import ResponsiveeGrid from "./components/ProductsDetails/ProductOverView.jsx";

const routes = createRoutesFromElements(
  <Route path="/" element={<Root />}>
    <Route path="new-Arrivals" element={<NewArrivals headerText={"New Arrivals"} pTag={"bhh b"} data={newArrivals} />} />
    <Route path="home" element={<HomePage />} />
    <Route path="/sarees" element={<ResponsiveeGrid/>} />
    <Route index element={<Navigate to="/home" replace />} />
  </Route>
);

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
