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
import Footer from "./components/Footer";

function App() {
  // Dummy data for new arrivals
const newArrivals = [
  { id: 1, imageUrl: 'https://www.meenabazaar.shop/cdn/shop/files/Artboard2_65e816d0-2864-4103-8a22-ac46c2d90089_400x.jpg?v=1714480507', name: 'Mustrad colour cotton floral Anarkali', price: 'Rs: 5000' },
  { id: 2, imageUrl: 'https://www.meenabazaar.shop/cdn/shop/files/Artboard5_ea1018d1-88e1-4f74-8677-c7d78e503229_400x.jpg?v=1714479423', name: 'Product 2', price: 'Rs: 50000' },
  { id: 3, imageUrl: 'https://www.meenabazaar.shop/cdn/shop/files/Artboard2_fb306f1d-b93e-4b3a-bcc4-ffc207400592_400x.jpg?v=1714478899', name: 'Product 3', price: 'Rs: 2000' },
  // Add more products here
];
const buyMoreSpendLess = [
  { id: 1, imageUrl: 'https://www.meenabazaar.shop/cdn/shop/files/Artboard12_19a084ff-4103-4801-9b32-4457b7881b84_800x.jpg?v=1711716643', name: 'Mustrad colour cotton floral Anarkali', price: 'Rs: 5000' },
  { id: 2, imageUrl: 'https://www.meenabazaar.shop/cdn/shop/files/WhatsAppImage2023-08-09at18.40.20_1_1_.jpegcopy_800x.jpg?v=1691826547', name: 'Product 2', price: 'Rs: 50000' },
  { id: 3, imageUrl: 'https://www.meenabazaar.shop/cdn/shop/files/A18I3616_JPG_800x.jpg?v=1697017523', name: 'Product 3', price: 'Rs: 2000' },
  // Add more products here
];
const bestSeller = [
  { id: 1, imageUrl: 'https://www.meenabazaar.shop/cdn/shop/files/Artboard12_19a084ff-4103-4801-9b32-4457b7881b84_800x.jpg?v=1711716643', name: 'Mustrad colour cotton floral Anarkali', price: 'Rs: 5000' },
  { id: 2, imageUrl: 'https://www.meenabazaar.shop/cdn/shop/files/WhatsAppImage2023-08-09at18.40.20_1_1_.jpegcopy_800x.jpg?v=1691826547', name: 'Product 2', price: 'Rs: 50000' },
  { id: 3, imageUrl: 'https://www.meenabazaar.shop/cdn/shop/files/A18I3616_JPG_800x.jpg?v=1697017523', name: 'Product 3', price: 'Rs: 2000' },
  // Add more products here
];
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
      <NewArrivals headerText={"New Arrivals"} data={newArrivals}/>
      <NewArrivals headerText={"Buy more , Spend less"} data={buyMoreSpendLess}/>
      <NewArrivals headerText={"best Sellers"} data={bestSeller}/>
      <CustomCarousel>
        {images.map((image, index) => {
          return <img key={index} src={image.imgURL} alt={image.imgAlt} />;
        })}
      </CustomCarousel>
      <NewArrivals headerText={"What to wear for"} data={bestSeller}/>
     
    </>
  );
}

export default App;
