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
import About from "./Component/About/About";
import { NotFound } from "./pages/NotFound";
import { DashboardServices } from "./pages/DashboardServices";

function App() {
  return (
    <BrowserRouter>
    <div className="app">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/shop/:itemID" element={<ItemDetails />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/dashboard/" element={<Home />} />
        <Route exact path="/dashboard/gallery" element={<Gallery />} />
        <Route exact path="/dashboard/services" element={<DashboardServices />} />
        <Route exact path="/dashboard/shop" element={<Shop />} />
        <Route exact path="/dashboard/shop/:itemID" element={<ItemDetails />} />
        <Route exact path="/dashboard/about" element={<About />} />
        <Route exact path="/dashboard/contact" element={<Contact />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
