import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Services } from "./pages/Services";
import Shop from "./pages/Shop";
import ItemDetails from "./pages/ItemDetails";
import { Contact } from "./pages/Contact";
import About from "./components/About/About"
import AboutHeader from "./components/About/AboutHeader/AboutHeader";
function App() {
  return (
    <BrowserRouter>
   
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route path="shop/:itemID" element={<ItemDetails />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
