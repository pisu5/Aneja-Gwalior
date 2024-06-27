import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage.jsx";
import NewArrivals from "./components/NewArrivals.jsx";
import { Navigate } from "react-router-dom";
import ResponsiveeGrid from "./components/ProductsDetails/ProductOverView.jsx";
import Example from "./components/ProductsDetails/ProductToCart.jsx";
import Root from "./components/Root.jsx";
import Header from "./components/Header.jsx";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Root />}>
        <Route
          path="/new-Arrivals"
          element={
            <NewArrivals
              headerText={"New Arrivals"}
              pTag={"bhh b"}
              collection={"New Arrivals"}
            />
          }
        />
        <Route path="home" element={<HomePage />} />
        <Route
          path="/sarees"
          element={<ResponsiveeGrid category={"Sarees"} />}
        />
        <Route
          path="/RajputaniPosak"
          element={<ResponsiveeGrid category={"RajputaniPosak"} />}
        />
        <Route path="/suits" element={<ResponsiveeGrid category={"Suits"} />} />
        <Route path="/sale" element={<ResponsiveeGrid category={"sale"} />} />
        <Route path="/gowns" element={<ResponsiveeGrid category={"Gowns"} />} />
        <Route path="/kurti" element={<ResponsiveeGrid category={"Kurti"} />} />
        <Route
          path="/co-ord-set"
          element={<ResponsiveeGrid category={"co-ord-set"} />}
        />
        <Route
          path="/Unstitched Suits"
          element={<ResponsiveeGrid category={"Unstitched Suits"} />}
        />
        <Route
          path="/Lehengas"
          element={<ResponsiveeGrid category={"Lehengas"} />}
        />
        <Route
          path="/Wedding-Collection"
          element={<ResponsiveeGrid category={"Wedding Collection"} />}
        />
        <Route
          path="/Best-Seller"
          element={<ResponsiveeGrid category={"BestSeller"} />}
        />

        <Route path="/product/:productId" element={<Example />} />
        <Route index element={<Navigate to="/home" replace />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
