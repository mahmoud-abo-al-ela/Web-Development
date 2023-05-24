import { CartProvider } from "./context/cart-provider";
import About from "./components/about/About";
import Cars from "./components/cars/Cars";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Gallery from "./components/gallery/Gallrey";
import Testominial from "./components/testemonial/Testominial";
import Logos from "./components/logos/Logos";
import Footer from "./components/contact/Footer";

function App() {
  return (
    <CartProvider>
      <Home />
      <About />
      <Services />
      <Cars />
      <Gallery />
      <Testominial />
      <Logos />
      <Footer />
    </CartProvider>
  );
}

export default App;
