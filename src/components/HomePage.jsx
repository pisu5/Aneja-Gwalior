import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons";
import Carousel from "./Carousel";
import CustomCarousel from "./HeroSection";
import ResponsiveGrid from "./ProductCategory";
import OurServicesSection from "./ServicesCard";
import HighlightedText from "./HighlightedText";
import Header from "./Header";
import NewArrivals from "./NewArrivals";
import { bestSeller, buyMoreSpendLess } from "../data/dummydata";
import newArrivals from "../data/DataNewArrivals";
import CardContainer from "./HorizontalCards";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div>
      <Carousel/>
      <OurServicesSection/>
      <ResponsiveGrid/>
      <NewArrivals
        headerText={"New Arrivals"}
        pTag={"Arrivals For The Finest"}
        data={buyMoreSpendLess}
      />

      <NewArrivals
        headerText={"Sale"}
        pTag={"Buy More, Spend Less"}
        data={buyMoreSpendLess}
      />
      <NewArrivals
        headerText={"Best Sellers"}
        pTag={"Deal With Best Calender Sellers"}
        data={bestSeller}
      />
      <NewArrivals
        headerText={"What To Wear For"}
        pTag={"Shop Based On Event"}
        data={bestSeller}
      />
      <CardContainer />
    </div>
  );
};
export default HomePage;
