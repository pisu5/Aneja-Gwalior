import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import HighlightedText from "./HighlightedText";
import Header from "./Header";
import WhatsAppChatIcon from "./Whatsapp";

function Root() {
  return (
    <div>
      <HighlightedText />
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
export default Root;
