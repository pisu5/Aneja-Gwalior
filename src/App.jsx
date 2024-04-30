import { useState } from "react";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import HighlightedText from "./components/HighlightedText";
import CustomCarousel from "./components/HeroSection";
import images from "./data/ImagesHero";
import OurServicesSection from "./components/ServicesCard";
import GridView from "./components/ProductCategory";
import ResponsiveGrid from "./components/ProductCategory";
import WatchAndShop from "./components/WatchShop";
import NewArrivals from "./components/NewArrivals";

function App() {
  return (
    <>
      <HighlightedText text="Hello This is Prashant here , I am MERN Developer" />

      <Header />
      <CustomCarousel>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomCarousel>
      <OurServicesSection />
      <ResponsiveGrid/>
      <WatchAndShop/>
      <NewArrivals/>
    </>
  );
}

export default App;
