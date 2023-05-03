import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { Gallery } from "./pages/Gallery";
import { Services } from "./pages/Services";
import { Shop } from "./pages/Shop";
import { Contact } from "./pages/Contact";
import About from "./Component/About/About"
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact />} />
       </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
